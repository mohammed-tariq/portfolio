import { SOCIALS } from '../lib/site';

export default function Footer() {
  return (
    <footer className="w-full max-w-container-max mx-auto px-6 md:px-margin-desktop py-8 flex flex-col md:flex-row justify-between items-center border-t border-surface-container-highest bg-background gap-4">
      <div className="font-label-caps text-label-caps text-primary">SYSTEM_ARCHITECT</div>
      <div className="font-code-sm text-code-sm text-on-tertiary-container text-center md:text-left">
        © {new Date().getFullYear()} SYSTEM_ARCHITECT. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-6">
        <a
          className="font-code-sm text-code-sm text-on-tertiary-container hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100"
          href={SOCIALS.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          className="font-code-sm text-code-sm text-on-tertiary-container hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100"
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <span className="font-code-sm text-code-sm text-on-tertiary-container flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
          LAYER_0_STATUS
        </span>
      </div>
    </footer>
  );
}
