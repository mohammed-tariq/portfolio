const si = require('simple-icons');
const fs = require('fs');

// [slug, display name, size tier]  tier: 3=core, 2=major, 1=supporting
const SKILLS = [
  ['react','React',3],['nextdotjs','Next.js',3],['nodedotjs','Node.js',3],
  ['typescript','TypeScript',2],['mongodb','MongoDB',2],['express','Express',2],
  ['javascript','JavaScript',2],['python','Python',2],['postgresql','PostgreSQL',2],
  ['tailwindcss','Tailwind',2],['redux','Redux',2],['docker','Docker',2],
  ['git','Git',2],['figma','Figma',2],['googlecloud','Google Cloud',2],
  ['html5','HTML5',1],['css','CSS',1],['sass','Sass',1],['mui','MUI',1],
  ['bootstrap','Bootstrap',1],['jquery','jQuery',1],['reactquery','TanStack Query',1],
  ['webpack','Webpack',1],['vite','Vite',1],['babel','Babel',1],
  ['jenkins','Jenkins',1],['jira','Jira',1],['github','GitHub',1],
  ['vercel','Vercel',1],['netlify','Netlify',1],['chartdotjs','Chart.js',1],
  ['leaflet','Leaflet',1],['socketdotio','Socket.IO',1],['webrtc','WebRTC',1],
  ['googleanalytics','Analytics',1],['lighthouse','Lighthouse',1],
  ['apachejmeter','JMeter',1],['claude','Claude',1],['threedotjs','Three.js',1],
];

// No Simple Icons mark available (trademark removals) -> monogram tiles.
const MONOGRAMS = [
  ['AWS','AWS','#FF9900',2],['BI','Power BI','#F2C811',1],
  ['BS','BrowserStack','#FF6C37',1],['Zu','Zustand','#A78BFA',1],
];

const out = [];
// Tile background from .skill-tile in app/globals.css.
const TILE_BG = '#1e1e1e';
const MIN_CONTRAST = 2.8;

const toRgb = (h) => [0, 2, 4].map((i) => parseInt(h.replace('#', '').slice(i, i + 2), 16));
const toHex = (rgb) => '#' + rgb.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

function luminance(hex) {
  const [r, g, b] = toRgb(hex)
    .map((v) => v / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// Several brand marks are near-black (Express #0A0A0A) or very dark (CSS
// #663399) and vanish against the dark tile. Lift them toward white until they
// clear MIN_CONTRAST, preserving hue so the brand stays recognisable. A
// hardcoded denylist was the previous approach and silently missed new icons.
function ensureVisible(hex) {
  if (contrast(hex, TILE_BG) >= MIN_CONTRAST) return hex;
  let rgb = toRgb(hex);
  const [r, g, b] = rgb;
  const isAchromatic = Math.max(r, g, b) - Math.min(r, g, b) < 24;
  if (isAchromatic) return '#E6EDF3'; // no hue worth keeping
  for (let step = 0; step < 24; step++) {
    rgb = rgb.map((v) => v + (255 - v) * 0.12); // ease toward white
    const next = toHex(rgb);
    if (contrast(next, TILE_BG) >= MIN_CONTRAST) return next;
  }
  return '#E6EDF3';
}

for (const [slug, name, tier] of SKILLS) {
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = si[key];
  if (!icon) { console.error('MISSING', slug); continue; }
  const original = '#' + icon.hex;
  const hex = ensureVisible(original);
  if (hex !== original) console.log(`  lifted ${name}: ${original} -> ${hex}`);
  out.push({ name, hex, tier, path: icon.path });
}
for (const [mono, name, hex, tier] of MONOGRAMS) out.push({ name, hex, tier, mono });

fs.writeFileSync(
  __dirname + '/../lib/skill-icons.js',
  '// GENERATED — do not edit by hand.\n' +
  '// Brand marks from simple-icons (CC0). Regenerate with scripts/gen-skill-icons.js\n' +
  '// after changing the skill list; `path` is inlined so no network request is made.\n' +
  'export const SKILL_ICONS = ' + JSON.stringify(out, null, 2) + ';\n'
);
console.log('wrote', out.length, 'icons');
