import { renderHook, act } from '@testing-library/react';
import { useCarsSorting } from './useCarSorting';

describe('useCarsSorting', () => {
  const cars = [
    { id: '1', make: 'Tesla', model: 'Model 3', year: 2023, color: 'red' },
    { id: '2', make: 'BMW', model: 'X5', year: 2022, color: 'blue' },
    { id: '3', make: 'Audi', model: 'A4', year: 2024, color: 'black' },
  ];

  it('defaults to none and sorts by make asc', () => {
    // Act
    const { result } = renderHook(() => useCarsSorting(cars));

    // Assert
    expect(result.current.sortTerm).toBe('none');
    expect(result.current.sortedCars[0].make).toBe('Audi');
    expect(result.current.sortedCars[1].make).toBe('BMW');
    expect(result.current.sortedCars[2].make).toBe('Tesla');
  });

  it('sorts by model asc', () => {
    // Arrange
    const { result } = renderHook(() => useCarsSorting(cars));

    // Act
    act(() => {
      result.current.setSortTerm('model_asc');
    });

    // Assert
    expect(result.current.sortedCars[0].model).toBe('A4');
    expect(result.current.sortedCars[1].model).toBe('Model 3');
    expect(result.current.sortedCars[2].model).toBe('X5');
  });

  it('sorts by year desc', () => {
    // Arrange
    const { result } = renderHook(() => useCarsSorting(cars));

    // Act
    act(() => {
      result.current.setSortTerm('year_desc');
    });

    // Assert
    expect(result.current.sortedCars[0].year).toBe(2024);
    expect(result.current.sortedCars[1].year).toBe(2023);
    expect(result.current.sortedCars[2].year).toBe(2022);
  });
});
