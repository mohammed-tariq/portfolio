import { getSkill, hexToRgb } from '../lib/brand';

const FALLBACK_HEX = '#00dbe9';

// Overlapping circular brand badges. Names that have no brand mark (concepts
// like "Real-time") fall back to a two-letter monogram in the accent colour.
export default function TechBadges({ items, className = '' }) {
  return (
    <ul className={`flex -space-x-2 ${className}`}>
      {items.map((name) => {
        const skill = getSkill(name);
        const hex = skill?.hex ?? FALLBACK_HEX;
        const mono = skill?.mono ?? name.replace(/[^A-Za-z]/g, '').slice(0, 2);

        return (
          <li key={name} className="tech-badge" style={{ '--brand-rgb': hexToRgb(hex) }}>
            {skill && !skill.mono ? (
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d={skill.path} />
              </svg>
            ) : (
              <span className="tech-badge__mono" aria-hidden="true">
                {mono}
              </span>
            )}
            <span className="tech-badge__label">{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
