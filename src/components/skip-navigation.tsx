'use client';

import { skipLinkStyles } from '../utils/accessibility';

export default function SkipNavigation() {
  return (
    <>
      <a
        href="#main-content"
        className={skipLinkStyles}
        tabIndex={0}
      >
        Skip to main content
      </a>
      <a
        href="#navigation"
        className={skipLinkStyles}
        tabIndex={0}
        style={{ top: '4rem' }}
      >
        Skip to navigation
      </a>
    </>
  );
}