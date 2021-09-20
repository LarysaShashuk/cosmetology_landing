import { useEffect } from 'react';

export default function useOutsideClick(ref, callback) {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, false);
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', escFunction, false);
    };
  });
}
