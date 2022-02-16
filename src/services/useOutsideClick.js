import { useEffect, useCallback } from 'react';

export default function useOutsideClick(ref, callback) {



  const handleClick = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();

    }
  }, [callback, ref]);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      callback();
    }
  },[callback]);

  useEffect(() => {
    document.addEventListener('click', handleClick, false);
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('click', handleClick, false);
      document.removeEventListener('keydown', escFunction, false);
    };
  });
}
