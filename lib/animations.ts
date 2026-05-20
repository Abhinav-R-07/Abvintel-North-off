// Framer Motion Animation Variants

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 28,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: -28,
    transition: {
      duration: 0.3,
    },
  },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const navScroll = {
  initial: { backgroundColor: "rgba(8, 8, 8, 0)" },
  scrolled: { backgroundColor: "rgba(8, 8, 8, 0.8)" },
};

export const cardHover = {
  initial: { scaleX: 0 },
  whileHover: { scaleX: 1, transition: { duration: 0.4 } },
};

export const modalSlide = {
  initial: { x: 480, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { x: 480, opacity: 0, transition: { duration: 0.3 } },
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(200, 169, 110, 0.7)",
      "0 0 0 10px rgba(200, 169, 110, 0)",
    ],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};

export const marqueeMove = {
  animate: {
    x: [0, -1000],
  },
  transition: {
    x: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  },
};
