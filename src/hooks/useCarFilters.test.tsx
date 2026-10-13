import { renderHook, act } from '@testing-library/react';
import { useCarFilter } from './useCarFilters';

describe('useCarFilter', () => {
  it('builds empty variables when no filters', () => {
    // Act
    const { result } = renderHook(() => useCarFilter());

    // Assert
    expect(result.current.variables).toEqual({});
  });

  it('adds model when present', () => {
    // Arrange
    const { result } = renderHook(() => useCarFilter());

    // Act
    act(() => {
      result.current.setFilters({ model: '  Tesla  ' });
    });

    // Assert
    expect(result.current.variables).toEqual({ model: 'Tesla' });
  });

  it('does not add mode when empty', () => {
    // Arrange
    const { result } = renderHook(() => useCarFilter());
    // Act
    act(() => {
      result.current.setFilters({ model: '   ' });
    });

    // Assert
    expect(result.current.variables).toEqual({});
  });

  it('adds year when present', () => {
    // Arrange
    const { result } = renderHook(() => useCarFilter());

    // Act
    act(() => {
      result.current.setFilters({ year: 2023 });
    });

    // Assert
    expect(result.current.variables).toEqual({ year: 2023 });
  });

  it('clears filters', () => {
    // Arrange
    const { result } = renderHook(() => useCarFilter());

    // Act
    act(() => {
      result.current.setFilters({ model: 'Tesla', year: 2023 });
    });
    act(() => {
      result.current.setFilters({});
    });

    // Arrange
    expect(result.current.variables).toEqual({});
  });
});
