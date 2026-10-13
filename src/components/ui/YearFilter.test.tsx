import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { YearFilter } from './YearFilter';

describe('YearFilter', () => {
  it('renders select with All option', () => {
    // Arrrange
    const onChange = jest.fn();

    // Act
    render(<YearFilter onChange={onChange} />);

    // Assert
    expect(screen.getByLabelText('Year')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
  });

  it('calls onChange when year selected', async () => {
    // Arrange
    const user = userEvent.setup();
    const onChange = jest.fn();

    // Act
    render(<YearFilter onChange={onChange} />);
    await user.click(screen.getByLabelText('Year'));
    await user.click(screen.getByRole('option', { name: '2023' }));

    // Assert
    expect(onChange).toHaveBeenCalledWith('2023');
  });
});
