import { render, screen, waitFor } from '@testing-library/react';
import OptimizedImage from '../../src/components/optimized-image';

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, onLoad, onError, ...props }: any) {
    return (
      <img
        src={src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
        {...props}
      />
    );
  };
});

describe('OptimizedImage', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    width: 400,
    height: 300,
  };

  it('renders image with correct alt text', () => {
    render(<OptimizedImage {...defaultProps} />);
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    render(<OptimizedImage {...defaultProps} />);
    const loadingElement = screen.getByRole('img');
    expect(loadingElement).toHaveClass('opacity-0');
  });

  it('handles image load error gracefully', async () => {
    render(<OptimizedImage {...defaultProps} />);
    const image = screen.getByAltText('Test image');
    
    // Simulate image error
    image.dispatchEvent(new Event('error'));
    
    await waitFor(() => {
      expect(screen.getByText('Image failed to load')).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    render(<OptimizedImage {...defaultProps} className="custom-class" />);
    const container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('custom-class');
  });
});