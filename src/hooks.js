import { useEffect, useRef, useState } from "react";

/** Lights a work when it enters the room. */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setLit(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLit(true);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "-12% 0px -18% 0px", threshold: 0.06, ...options }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, lit];
}

/** Locks body scroll while the case study is open. */
export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return;
    const y = window.scrollY;
    document.body.classList.add("is-locked");
    return () => {
      document.body.classList.remove("is-locked");
      window.scrollTo(0, y);
    };
  }, [active]);
}

/** Closes the case study on Escape. */
export function useEscape(handler, active) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") handler();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler, active]);
}
