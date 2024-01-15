module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                darkBlue: "#3380a5",
                darkGray: "#D2D2D2",
                textLightBlue: "#0098CC",
                textDarkGrey: "#71706F",
                lightGray: "#F5F5F5",
                lightBlue: "#76bbeb",
                orange: '#E34211',
                yellow: "#fcd404",
                pink: "#f374f5",
                purple: "#6d50b3",
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
