import localFont from "next/font/local";

const Gilroy = localFont({
    src: [
        {
            path: "./gilroy/Gilroy-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./gilroy/Gilroy-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./gilroy/Gilroy-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./gilroy/Gilroy-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./gilroy/Gilroy-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./gilroy/Gilroy-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./gilroy/Gilroy-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./gilroy/Gilroy-UltraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./gilroy/Gilroy-Light.ttf",
            weight: "300",
            style: "normal",
        },
    ],
    variable: "--font-gilroy",
});

export { Gilroy };
