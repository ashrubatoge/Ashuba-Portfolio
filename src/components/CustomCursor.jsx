import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 640) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;
      rafId.current = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      dot.classList.add('hover');
      ringEl.classList.add('hover');
    };

    const onMouseLeaveInteractive = () => {
      dot.classList.remove('hover');
      ringEl.classList.remove('hover');
    };

    document.addEventListener('mousemove', onMouseMove);
    rafId.current = requestAnimationFrame(animate);

    // Add hover effect to interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], .glass-card');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId.current);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden sm:block" />
      <div ref={ringRef} className="cursor-ring hidden sm:block" />
    </>
  );
}
