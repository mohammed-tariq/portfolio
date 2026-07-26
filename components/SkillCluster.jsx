import { SKILL_ICONS } from '../lib/skill-icons';
import { hexToRgb } from '../lib/brand';

// Deterministic scatter: walking the list in a fixed stride mixes the large
// "core" tiles through the cluster instead of clumping them at the front, and
// stays identical between server and client render.
function arrange(items) {
  const stride = 7;
  const out = [];
  const seen = new Set();
  for (let start = 0; start < stride; start++) {
    for (let i = start; i < items.length; i += stride) {
      if (!seen.has(i)) {
        seen.add(i);
        out.push(items[i]);
      }
    }
  }
  return out;
}

export default function SkillCluster() {
  const tiles = arrange(SKILL_ICONS);

  return (
    <ul className="skill-cluster">
      {tiles.map((skill, i) => (
        <li
          key={skill.name}
          className={`skill-tile skill-tile--${skill.tier}`}
          style={{
            '--brand-rgb': hexToRgb(skill.hex),
            // Spread the drift so tiles never move in lockstep.
            '--float-delay': `${((i * 370) % 4200) / 1000}s`,
            '--float-dur': `${6 + ((i * 13) % 5)}s`,
          }}
        >
          {skill.mono ? (
            <span className="skill-tile__mono" aria-hidden="true">
              {skill.mono}
            </span>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d={skill.path} />
            </svg>
          )}
          <span className="skill-tile__label">{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}
