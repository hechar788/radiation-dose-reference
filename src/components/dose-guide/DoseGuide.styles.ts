import { tss } from 'tss-react';

export const useStyles = tss.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
    },
    hero: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        maxWidth: 820,
    },
});
