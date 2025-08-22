import { describe, it, expect, vi, beforeEach } from 'vitest';
import debounce from '../debounce'; // adjust path as needed

describe('debounce', () => {
  let mockFn: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockFn = vi.fn();
  });

  it('initial rendering', async () => {
    const debouncedFunction = debounce(mockFn, 100);
    debouncedFunction('apple');

    expect(mockFn).not.toHaveBeenCalled();

    await new Promise((r) => setTimeout(r, 120));
    expect(mockFn).toHaveBeenCalledOnce();
    expect(mockFn).toHaveBeenCalledWith('apple');
  });
});