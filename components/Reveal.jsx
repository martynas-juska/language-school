"use client";

import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion, stagger, useAnimate, useInView, useReducedMotion } from "framer-motion";

/**
 * Scroll animations (ported from RickNest). Each part animates once, the first time it's in view.
 *   variant "up"      rises in (headings, single blocks)
 *   variant "left"    slides in from the left, "right" from the right (split sections)
 *   variant "stagger" its children rise in one after another (lists, card grids)
 * `as`: the element to render ("div", "ul", "ol"…).
 */

const EASE = [0.2, 0.7, 0.2, 1];
const VIEWPORT = { once: true, amount: 0.15, margin: "0px 0px -8% 0px" };
const FROM = {
  up: { opacity: 0, y: 24 },
  left: { opacity: 0, x: -36 },
  right: { opacity: 0, x: 36 },
};

/** Wrap the site in this, so animations follow the system's "reduce motion" setting. */
export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({ as = "div", variant = "up", ...props }) {
  if (variant === "stagger") return <StaggerReveal as={as} {...props} />;
  const Tag = motion[as];
  return (
    <Tag
      initial={FROM[variant] ?? FROM.up}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: variant === "up" ? 0.7 : 0.8, ease: EASE }}
      {...props}
    />
  );
}

/** Children are hidden by CSS until data-shown is set, then fade and lift in 0.08 s apart. */
function StaggerReveal({ as: Tag, className = "", children, ...rest }) {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, VIEWPORT);
  const reduce = useReducedMotion();

  useEffect(() => {
    const element = scope.current;
    if (!inView || !element) return;
    element.setAttribute("data-shown", "");
    if (reduce) return;
    animate([...element.children], { opacity: [0, 1], y: [24, 0] }, { duration: 0.6, ease: EASE, delay: stagger(0.08) });
  }, [inView, reduce, animate, scope]);

  return (
    <Tag ref={scope} data-reveal="stagger" className={className} {...rest}>
      {children}
    </Tag>
  );
}

const SCRAMBLE = "ABCDEFGHKMNOPRSTUVYZ0123456789#%&";

/** Text that "decodes" into place when it comes into view (~0.7 s). Screen readers get the real text. */
export function ScrambleText({ text, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (!inView || reduce) return;
    const started = performance.now();
    let frame = 0;
    const step = (now) => {
      const progress = Math.min(1, (now - started) / 700);
      const settled = Math.floor(progress * text.length);
      setShown(
        [...text]
          .map((char, i) => (i < settled || char === " " ? char : SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]))
          .join(""),
      );
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, text]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{shown}</span>
    </span>
  );
}