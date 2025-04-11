import { useEffect, useState } from 'react';
import './Toast.css';

function Toast({ message }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3800); // Start animation slightly before 4s timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`toast ${visible ? 'visible' : 'hidden'}`}>
      {message}
    </div>
  );
}

export default Toast;