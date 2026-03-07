import { useCounterStore } from '../store/counterStore';
import Button from './Button';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex items-center gap-4 mt-4">
      <h1>{count}</h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
