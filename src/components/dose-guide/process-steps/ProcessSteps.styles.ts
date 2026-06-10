import { tss } from 'tss-react';

export const useStyles = tss.create({
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    grid: {
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        '@media (min-width: 640px)': {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
        '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        },
        '@media (min-width: 1280px)': {
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        },
    },
});
