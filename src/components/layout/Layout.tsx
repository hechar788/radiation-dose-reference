import { Radiation } from 'lucide-react';
import type { ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { DisclaimerBanner } from 'src/components/disclaimer-banner';
import { i18n as disclaimerI18n } from 'src/components/disclaimer-banner/DisclaimerBanner.i18n';

import { i18n } from './Layout.i18n';
import { useStyles } from './Layout.styles';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    const intl = useIntl();
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <header className="border-b bg-card">
                <div className={classes.headerInner}>
                    <Radiation aria-hidden className="size-7 text-amber-500" />
                    <h1 className="text-xl font-semibold tracking-tight">{intl.formatMessage(i18n.appTitle)}</h1>
                </div>
            </header>
            <DisclaimerBanner />
            <main className={classes.main}>{children}</main>
            <footer className="border-t bg-card">
                <div className={classes.footerInner}>
                    <p className="text-sm text-muted-foreground">{intl.formatMessage(disclaimerI18n.disclaimer)}</p>
                    <p className="text-sm text-muted-foreground">{intl.formatMessage(i18n.footerSource)}</p>
                </div>
            </footer>
        </div>
    );
};
