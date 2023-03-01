export const navBarAnimation = {
  hidden: { y: -100 },
  show: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

export const logoAnimation = {
  hidden: { scale: 0.4 },
  show: {
    rotate: 360,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 - 200}px at 10vw 2.5rem)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 90vw 2.5rem)',
    transition: {
      delay: 0,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};