import { useLocation } from 'react-router-dom';

export default function About() {
  const { state } = useLocation();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>Welcome to the about page!</p>
      {state && <p className="mt-2">Message: {state.message}</p>}
    </div>
  );
}
