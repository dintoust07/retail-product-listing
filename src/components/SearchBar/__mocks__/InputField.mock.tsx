import { vi } from 'vitest';

const MockInputField = vi.fn(({ 'data-testid': testId, onChange, ...props }) => (
  <input data-testid={testId} onChange={onChange} {...props} />
));

export default MockInputField;