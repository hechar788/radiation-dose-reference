import { tss } from 'tss-react';

export const useStyles = tss.create({
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    searchWrapper: {
        position: 'relative',
        maxWidth: 420,
    },
    searchIcon: {
        position: 'absolute',
        left: '0.75rem',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
    },
    tables: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    },
    emptyState: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '2rem 0',
    },
});
