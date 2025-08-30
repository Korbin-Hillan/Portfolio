import {
  generateId,
  announceToScreenReader,
  handleKeyboardNavigation,
} from '../../src/utils/accessibility';

// Mock DOM methods
const mockDocument = {
  createElement: jest.fn(() => ({
    setAttribute: jest.fn(),
    textContent: '',
    className: '',
  })),
  body: {
    appendChild: jest.fn(),
    removeChild: jest.fn(),
  },
};

// Mock global document
global.document = mockDocument as any;

describe('Accessibility Utils', () => {
  describe('generateId', () => {
    it('generates unique IDs with correct prefix', () => {
      const id1 = generateId('test');
      const id2 = generateId('test');
      
      expect(id1).toMatch(/^test-[a-z0-9]+$/);
      expect(id2).toMatch(/^test-[a-z0-9]+$/);
      expect(id1).not.toBe(id2);
    });
  });

  describe('announceToScreenReader', () => {
    it('creates and removes announcement element', () => {
      const mockElement = {
        setAttribute: jest.fn(),
        textContent: '',
        className: '',
      };
      
      mockDocument.createElement = jest.fn().mockReturnValue(mockElement);
      
      announceToScreenReader('Test message');
      
      expect(mockDocument.createElement).toHaveBeenCalledWith('div');
      expect(mockElement.setAttribute).toHaveBeenCalledWith('aria-live', 'polite');
      expect(mockElement.setAttribute).toHaveBeenCalledWith('aria-atomic', 'true');
      expect(mockElement.textContent).toBe('Test message');
    });
  });

  describe('handleKeyboardNavigation', () => {
    it('calls callback on Enter key', () => {
      const mockCallback = jest.fn();
      const mockEvent = {
        key: 'Enter',
        preventDefault: jest.fn(),
      } as any;
      
      handleKeyboardNavigation(mockEvent, mockCallback);
      
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockCallback).toHaveBeenCalled();
    });

    it('calls callback on Space key', () => {
      const mockCallback = jest.fn();
      const mockEvent = {
        key: ' ',
        preventDefault: jest.fn(),
      } as any;
      
      handleKeyboardNavigation(mockEvent, mockCallback);
      
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockCallback).toHaveBeenCalled();
    });

    it('does not call callback on other keys', () => {
      const mockCallback = jest.fn();
      const mockEvent = {
        key: 'Tab',
        preventDefault: jest.fn(),
      } as any;
      
      handleKeyboardNavigation(mockEvent, mockCallback);
      
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      expect(mockCallback).not.toHaveBeenCalled();
    });
  });
});