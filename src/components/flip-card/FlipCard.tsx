import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { useStyles } from './FlipCard.styles';

type FlipCardProps = {
    front: ReactNode;
    back: ReactNode;
    /** Sets the card dimensions, e.g. a Tailwind height class. The faces fill the root element. */
    className?: string;
    'aria-label'?: string;
};

/**
 * Card that flips on hover or keyboard focus to reveal its back face.
 * The element is focusable so keyboard users can flip it with Tab.
 */
export const FlipCard = ({ front, back, className, 'aria-label': ariaLabel }: FlipCardProps) => {
    const { classes } = useStyles();

    return (
        <div className={cn(classes.root, className)} tabIndex={0} aria-label={ariaLabel}>
            <div className={classes.inner}>
                <div className={classes.face}>{front}</div>
                <div className={cn(classes.face, classes.back)}>{back}</div>
            </div>
        </div>
    );
};
