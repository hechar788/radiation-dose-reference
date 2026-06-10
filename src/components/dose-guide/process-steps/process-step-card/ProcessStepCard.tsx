import type { ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FlipCard } from 'src/components/flip-card';

import { i18n } from '../ProcessSteps.i18n';
import { useStyles } from './ProcessStepCard.styles';

type ProcessStepCardProps = {
    title: string;
    description: string;
    icon: ReactNode;
};

export const ProcessStepCard = ({ title, description, icon }: ProcessStepCardProps) => {
    const intl = useIntl();
    const { classes } = useStyles();

    return (
        <FlipCard
            className={classes.root}
            aria-label={title}
            front={
                <Card className={cn(classes.face, 'gap-3 py-0')}>
                    <span className="text-primary">{icon}</span>
                    <span className="font-medium leading-snug">{title}</span>
                    <span className="text-xs text-muted-foreground">{intl.formatMessage(i18n.flipHint)}</span>
                </Card>
            }
            back={
                <Card className={cn(classes.face, 'gap-3 border-primary bg-primary py-0 text-primary-foreground')}>
                    <span className="text-sm font-semibold">{title}</span>
                    <span className="text-sm leading-relaxed">{description}</span>
                </Card>
            }
        />
    );
};
