export const size = {
    mobileL: '650px',
    tablet: '850px',
    laptop: '1074px',
    desktop: '1170px',

}

export const device = {
    mobile: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`
};

export interface StyleClosetTheme {
    colors: { [key in keyof typeof colors]: string };
    breakpoints: { [key in keyof typeof breakpoints]: string };
}

const colors = {
    primary: '#14756c',
    secondary: '#5ea0a0',
};

const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1025px',
};


export const theme = {
    breakpoints,
    colors: {
        ...colors,
        borderColor: '#72acae',
        colorWhite: '#fff',
        titleColor: '#5ea0a0',
        defaultColor: '#939f9f',
    },
    measures: {
        gap: '2rem',
        borderMinRadius: '3px',
        borderRadius: '5px',
        borderMaxRadius: '8px',
    }
};
