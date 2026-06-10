import { TriangleAlert } from 'lucide-react';
import { useIntl } from 'react-intl';

import { i18n } from './DisclaimerBanner.i18n';
import { useStyles } from './DisclaimerBanner.styles';

export const DisclaimerBanner = () => {
    const intl = useIntl();
    const { classes } = useStyles();

    return (
        <aside role="note" className="border-b border-amber-200 bg-amber-50 text-amber-900">
            <div className={classes.inner}>
                <TriangleAlert aria-hidden className={`${classes.icon} size-4`} />
                <p className="text-sm">{intl.formatMessage(i18n.disclaimer)}</p>
            </div>
        </aside>
    );
};
