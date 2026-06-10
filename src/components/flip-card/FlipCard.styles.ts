import { tss } from 'tss-react';

export const useStyles = tss.withNestedSelectors<'inner'>().create(({ classes }) => ({
    root: {
        perspective: 1200,
        outline: 'none',
        [`&:hover .${classes.inner}, &:focus-visible .${classes.inner}`]: {
            transform: 'rotateY(180deg)',
        },
    },
    inner: {
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease',
        transformStyle: 'preserve-3d',
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
    },
    face: {
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        overflow: 'hidden',
    },
    back: {
        transform: 'rotateY(180deg)',
    },
}));
