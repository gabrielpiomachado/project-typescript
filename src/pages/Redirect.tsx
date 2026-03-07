import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect() {
  const [time, setTime] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        navigate('/about', {
          state: { message: 'You have been redirected!' },
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, navigate]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Redirect Page</h1>
      <p>Welcome to the redirect page!</p>
      <p>You will be redirected in {time} seconds...</p>
    </div>
  );
}
