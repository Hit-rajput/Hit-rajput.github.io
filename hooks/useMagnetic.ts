import { useEffect, useRef } from 'react';

interface UseMagneticOptions {
    strength?: number;
    active?: boolean;
}

export const useMagnetic = <T extends HTMLElement>({ strength = 15, active = true }: UseMagneticOptions = {}) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (!active) return;

        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = element.getBoundingClientRect();

            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const moveX = (clientX - centerX) / width * strength;
            const moveY = (clientY - centerY) / height * strength;

            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        const handleMouseLeave = () => {
            element.style.transform = 'translate(0px, 0px)';
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.style.transform = 'translate(0px, 0px)';
        };
    }, [strength, active]);

    return ref;
};
