import { useEffect, useRef } from 'react';
export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  // console.log(ref.current);
  useEffect(() => {
    function handelClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(false);
      } else {
        console.log('Outside Click');
      }
    }
    document.addEventListener('click', handelClick, listenCapturing);
    return () => document.removeEventListener('click', handelClick, listenCapturing);
  }, [handler, listenCapturing]);
  return ref;
}
