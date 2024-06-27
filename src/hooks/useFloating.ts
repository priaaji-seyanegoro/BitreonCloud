// hooks/useFloating.ts
import { useEffect, useState } from 'react';

const useFloating = () => {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloating((prev) => !prev);
    }, 3000); // Change the interval to control the speed of the floating effect

    return () => clearInterval(interval);
  }, []);

  return floating;
};

export default useFloating;
