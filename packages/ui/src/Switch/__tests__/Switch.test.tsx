import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from '../Switch';

describe('Switch', () => {
  it('renders correctly', () => {
    const onChange = vi.fn();
    render(<Switch checked={false} onChange={onChange} />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const onChange = vi.fn();
    render(<Switch checked={false} onChange={onChange} />);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('renders with label', () => {
    const onChange = vi.fn();
    render(<Switch checked={false} onChange={onChange} label="Test Label" />);
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders with description', () => {
    const onChange = vi.fn();
    render(
      <Switch 
        checked={false} 
        onChange={onChange} 
        label="Test" 
        description="Test description" 
      />
    );
    
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('does not call onChange when disabled', () => {
    const onChange = vi.fn();
    render(<Switch checked={false} onChange={onChange} disabled />);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    
    expect(onChange).not.toHaveBeenCalled();
  });

  it('handles keyboard events', () => {
    const onChange = vi.fn();
    render(<Switch checked={false} onChange={onChange} />);
    
    const switchElement = screen.getByRole('switch');
    
    fireEvent.keyDown(switchElement, { key: ' ' });
    expect(onChange).toHaveBeenCalledWith(true);
    
    fireEvent.keyDown(switchElement, { key: 'Enter' });
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});



