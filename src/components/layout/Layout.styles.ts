import { tss } from 'tss-react';

const CONTENT_MAX_WIDTH = 1152;

export const useStyles = tss.create({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    headerInner: {
        maxWidth: CONTENT_MAX_WIDTH,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 1.5rem',
    },
    main: {
        flex: 1,
        width: '100%',
        maxWidth: CONTENT_MAX_WIDTH,
        margin: '0 auto',
        padding: '2rem 1.5rem 3rem',
    },
    footerInner: {
        maxWidth: CONTENT_MAX_WIDTH,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        padding: '1.5rem',
    },
});
