import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Use refs to track position to avoid fast re-renders in React state
    const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const blobPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // Track shape-matching block elements
    const hoveredBlock = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;

            // Update dot immediately
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleMouseDown = () => document.body.classList.add('cursor-click');
        const handleMouseUp = () => document.body.classList.remove('cursor-click');

        // Add interactivity checks for links/buttons/text fields
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for shape-matching blocks
            const block = target.closest('[data-cursor="block"]') as HTMLElement | null;
            if (block) {
                hoveredBlock.current = block;
                document.body.classList.add('cursor-block');
                document.body.classList.remove('cursor-hover', 'cursor-text');
                return;
            } else {
                hoveredBlock.current = null;
                document.body.classList.remove('cursor-block');
            }

            // Text inputs
            if (
                window.getComputedStyle(target).cursor === 'text' ||
                target.tagName.toLowerCase() === 'input' ||
                target.tagName.toLowerCase() === 'textarea' ||
                target.dataset.cursor === 'text'
            ) {
                document.body.classList.add('cursor-text');
                document.body.classList.remove('cursor-hover');
                return;
            }

            // Interactive elements
            if (
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.dataset.cursor === 'hover'
            ) {
                document.body.classList.add('cursor-hover');
                document.body.classList.remove('cursor-text');
                return;
            }

            // Default
            document.body.classList.remove('cursor-hover', 'cursor-text');
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        let animationFrameId: number;

        const render = () => {
            if (hoveredBlock.current && blobRef.current) {
                // Shape matching & magnetic snapping logic
                const { left, top, width, height } = hoveredBlock.current.getBoundingClientRect();
                const computedStyle = window.getComputedStyle(hoveredBlock.current);
                const borderRadius = computedStyle.borderRadius;

                const centerX = left + width / 2;
                const centerY = top + height / 2;

                // Magnetic pull: offset the blob slightly towards the mouse relative to the center
                const magneticStrength = 0.1;
                const targetX = centerX + (mousePos.current.x - centerX) * magneticStrength;
                const targetY = centerY + (mousePos.current.y - centerY) * magneticStrength;

                // Lerp towards the target shape and position
                blobPos.current.x += (targetX - blobPos.current.x) * 0.2;
                blobPos.current.y += (targetY - blobPos.current.y) * 0.2;

                // Convert computed width/height to numbers for lerping
                const currentWidth = parseFloat(blobRef.current.style.width) || 48;
                const currentHeight = parseFloat(blobRef.current.style.height) || 48;

                const newWidth = currentWidth + (width - currentWidth) * 0.2;
                const newHeight = currentHeight + (height - currentHeight) * 0.2;

                // Apply inline styles to override CSS defaults
                blobRef.current.style.transform = `translate(${blobPos.current.x}px, ${blobPos.current.y}px) translate(-50%, -50%)`;
                blobRef.current.style.width = `${newWidth}px`;
                blobRef.current.style.height = `${newHeight}px`;
                blobRef.current.style.borderRadius = borderRadius;
                blobRef.current.style.transition = 'background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease, opacity 0.2s ease'; // Remove dimensions from CSS transition so JS can update them instantly

            } else {
                // Standard follow logic
                blobPos.current.x += (mousePos.current.x - blobPos.current.x) * 0.15;
                blobPos.current.y += (mousePos.current.y - blobPos.current.y) * 0.15;

                if (blobRef.current) {
                    blobRef.current.style.transform = `translate(${blobPos.current.x}px, ${blobPos.current.y}px) translate(-50%, -50%)`;

                    // Clear inline styles so CSS classes take over again
                    if (blobRef.current.style.width) {
                        blobRef.current.style.width = '';
                        blobRef.current.style.height = '';
                        blobRef.current.style.borderRadius = '';
                        blobRef.current.style.transition = ''; // Restore full CSS transition
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    // Don't render cursor on mobile devices (touch screens)
    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            document.body.style.cursor = 'auto'; // Revert back
            document.body.classList.add('cursor-hidden');
        }
    }, []);

    return (
        <>
            <div
                id="custom-cursor-blob"
                ref={blobRef}
                className={!isVisible ? 'opacity-0' : ''}
            ></div>
            <div
                id="custom-cursor-dot"
                ref={dotRef}
                className={!isVisible ? 'opacity-0' : ''}
            ></div>
        </>
    );
};

export default CustomCursor;
