module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'body': ['dm-font', 'sans-serif'],
                'display': ['aclonica', 'sans-serif'],
            },
            fontSize: {
                'xs': '0.85rem',
                sm: '0.9rem',
              },
            colors: {
                'primary': '#F9F8F4',
                'secondary': '#141414',
                'accent': '#171717',
                'light-gray': '#F0F0F0',
                'mid-gray': '#DDDDDD',
                'dark-gray': '#202020',
            }
        }
    },
    safelist: [
        {
            pattern: /^(bg-)/,
          },
      ],
  }