import { tss } from 'tss-react';

export const useStyles = tss.create({
    inner: {
        maxWidth: 1152,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.625rem',
        padding: '0.75rem 1.5rem',
    },
    icon: {
        flexShrink: 0,
        marginTop: 2,
    },
});
