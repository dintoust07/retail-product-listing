import { UseProductListContext } from '../UseProductListContext';

const TestComponent = () => {
  const context = UseProductListContext();
  return <div>{context.productResponse.total}</div>;
};

export default TestComponent