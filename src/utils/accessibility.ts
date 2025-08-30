// Accessibility utilities
export const skipLinkStyles = `
  fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded 
  transform -translate-y-16 focus:translate-y-0 transition-transform 
  duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
`;

export const srOnly = `
  absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap 
  border-0 clip-[rect(0,0,0,0)]
`;

// Generate unique IDs for form elements
export const generateId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

// Announce content to screen readers
export const announceToScreenReader = (message: string): void => {
  if (typeof window === 'undefined') return;
  
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = srOnly;
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Focus management
export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Keyboard navigation helpers
export const handleKeyboardNavigation = (
  event: React.KeyboardEvent,
  callback: () => void
): void => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    callback();
  }
};