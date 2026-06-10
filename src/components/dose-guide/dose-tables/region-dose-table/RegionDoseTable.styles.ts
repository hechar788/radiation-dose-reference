import { tss } from 'tss-react';

export const useStyles = tss.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
    },
    aedCell: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
});
