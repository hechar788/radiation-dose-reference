import { tss } from 'tss-react';

export const CARD_HEIGHT = 240;

export const useStyles = tss.create({
    root: {
        height: CARD_HEIGHT,
    },
    face: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        textAlign: 'center',
        padding: '1.25rem',
    },
});
