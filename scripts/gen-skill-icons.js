const si = require('simple-icons');
const fs = require('fs');

// [slug, display name, size tier]  tier: 3=core, 2=major, 1=supporting
const SKILLS = [
  ['react','React',3],['nextdotjs','Next.js',3],['typescript','TypeScript',3],
  ['javascript','JavaScript',2],['nodedotjs','Node.js',2],['python','Python',2],
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
for (const [slug, name, tier] of SKILLS) {
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = si[key];
  if (!icon) { console.error('MISSING', slug); continue; }
  // Some marks are pure black/white; lift them so they read on a dark surface.
  let hex = '#' + icon.hex;
  if (['000000','181717','010101','333333','1C2024'].includes(icon.hex)) hex = '#E6EDF3';
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
