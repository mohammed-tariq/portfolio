import { SKILL_ICONS } from './skill-icons';

const BY_NAME = new Map(SKILL_ICONS.map((s) => [s.name, s]));

/** Look up a brand mark by its display name (e.g. 'React'). */
export function getSkill(name) {
  return BY_NAME.get(name);
}

/** '#61DAFB' -> '97, 218, 251', for use in rgba(var(--brand-rgb), a). */
export function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)).join(', ');
}
