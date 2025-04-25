import { useEffect } from "react"

interface RefObject {
    current: HTMLElement | null;
}
interface Handler {
    (event: MouseEvent | TouchEvent): void;
}

const useOutsideClick = (ref: RefObject, handler: Handler) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) return;
            return handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }

    }, [ref, handler])
}

export default useOutsideClick;