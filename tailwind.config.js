import scrollbarHide from 'tailwind-scrollbar-hide';

export const theme = {
  extend: {
    fontFamily: {
      caveat: ["Caveat", "cursive"],
    },
    fontWeight: {
      semibold: 600,
    },
  },
};

export default {
  theme,
  plugins: [scrollbarHide],
};
