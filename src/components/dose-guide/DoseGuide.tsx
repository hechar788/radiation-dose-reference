import { useIntl } from 'react-intl';

import { radiationDoseReference } from 'src/data';

import { i18n } from './DoseGuide.i18n';
import { useStyles } from './DoseGuide.styles';
import { DoseTables } from './dose-tables/DoseTables';
import { ProcessSteps } from './process-steps/ProcessSteps';

export const DoseGuide = () => {
    const intl = useIntl();
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.hero}>
                <h2 className="text-3xl font-bold tracking-tight">{intl.formatMessage(i18n.heroTitle)}</h2>
                <p className="leading-relaxed text-muted-foreground">{radiationDoseReference.guide.intro}</p>
            </div>
            <ProcessSteps />
            <DoseTables />
        </div>
    );
};
