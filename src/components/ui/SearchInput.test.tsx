import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchInput } from './SearchInput';

jest.mock('@/hooks/useDebounce', () => ({
  useDebounce: (value: string) => value,
}));

describe('SearchInput', () => {
  it('renders input', () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    render(<SearchInput onChange={onChange} />);

    // Assert
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('calls onChange when value changes', async () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    render(<SearchInput onChange={onChange} />);
    const input = screen.getByLabelText('Search');
    fireEvent.change(input, { target: { value: 'tesla' } });

    // Assert
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('tesla');
    });
  });
});
