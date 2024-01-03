module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                darkBlue: "#315DA8",
                darkGray: "#D2D2D2",
                textLightBlue: "#0098CC",
                textDarkGrey: "#71706F",
                lightGray: "#F5F5F5",
                lightBlue: "#9DD6EA",
                orange: '#E34211',
                yellow: "#fcd404"
            },
        },
        screens: {
            sm: "690px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    darkMode: "media", // or remove this line if not needed
    variants: {
        extend: {},
    },
    plugins: [],
};
