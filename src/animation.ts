export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5, // Delay secs of the parent component
            staggerChildren: 0.2, // Delay secs of the each children component
        },
    },
};

export const item = {
    hidden: { y: '100%' },
    show: { y: '0%', transition: { duration: 0.5 } },
};

export const homeItem = {
    hidden: { x: '100%' },
    show: { x: '0%', transition: { duration: 0.5 } },
};
