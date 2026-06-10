import { Gauge, Radiation, Scale, SlidersHorizontal, Stethoscope } from 'lucide-react';
import type { ReactNode } from 'react';
import type { MessageDescriptor } from 'react-intl';
import { useIntl } from 'react-intl';

import { ProcessStepCard } from './process-step-card/ProcessStepCard';
import { i18n } from './ProcessSteps.i18n';
import { useStyles } from './ProcessSteps.styles';

type ProcessStep = {
    key: string;
    title: MessageDescriptor;
    description: MessageDescriptor;
    icon: ReactNode;
};

const STEPS: ProcessStep[] = [
    {
        key: 'referral',
        title: i18n.referralTitle,
        description: i18n.referralDescription,
        icon: <Stethoscope aria-hidden className="size-8" />,
    },
    {
        key: 'radiation',
        title: i18n.radiationTitle,
        description: i18n.radiationDescription,
        icon: <Radiation aria-hidden className="size-8" />,
    },
    {
        key: 'measurement',
        title: i18n.measurementTitle,
        description: i18n.measurementDescription,
        icon: <Gauge aria-hidden className="size-8" />,
    },
    {
        key: 'comparison',
        title: i18n.comparisonTitle,
        description: i18n.comparisonDescription,
        icon: <Scale aria-hidden className="size-8" />,
    },
    {
        key: 'variation',
        title: i18n.variationTitle,
        description: i18n.variationDescription,
        icon: <SlidersHorizontal aria-hidden className="size-8" />,
    },
];

export const ProcessSteps = () => {
    const intl = useIntl();
    const { classes } = useStyles();

    return (
        <section className={classes.section} aria-label={intl.formatMessage(i18n.heading)}>
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">{intl.formatMessage(i18n.heading)}</h2>
                <p className="mt-1 text-muted-foreground">{intl.formatMessage(i18n.subheading)}</p>
            </div>
            <div className={classes.grid}>
                {STEPS.map((step) => (
                    <ProcessStepCard
                        key={step.key}
                        title={intl.formatMessage(step.title)}
                        description={intl.formatMessage(step.description)}
                        icon={step.icon}
                    />
                ))}
            </div>
        </section>
    );
};
