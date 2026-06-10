import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { radiationDoseReference } from 'src/data';

import { i18n } from './DoseTables.i18n';
import { useStyles } from './DoseTables.styles';
import { RegionDoseTable } from './region-dose-table/RegionDoseTable';

export const DoseTables = () => {
    const intl = useIntl();
    const { classes } = useStyles();
    const [query, setQuery] = useState('');

    const filteredRegions = useMemo(() => {
        const normalisedQuery = query.trim().toLowerCase();

        return radiationDoseReference.regions
            .map((region) => {
                // A query matching the body area keeps its whole table; otherwise filter its procedures.
                if (!normalisedQuery || region.name.toLowerCase().includes(normalisedQuery)) {
                    return { region, procedures: region.procedures };
                }

                return {
                    region,
                    procedures: region.procedures.filter((procedure) =>
                        procedure.name.toLowerCase().includes(normalisedQuery),
                    ),
                };
            })
            .filter(({ procedures }) => procedures.length > 0);
    }, [query]);

    return (
        <section className={classes.section} aria-label={intl.formatMessage(i18n.heading)}>
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">{intl.formatMessage(i18n.heading)}</h2>
                <p className="mt-1 text-muted-foreground">{intl.formatMessage(i18n.subheading)}</p>
            </div>
            <div className={classes.searchWrapper}>
                <Search aria-hidden className={`${classes.searchIcon} size-4 text-muted-foreground`} />
                <Input
                    type="search"
                    className="pl-9"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={intl.formatMessage(i18n.searchPlaceholder)}
                    aria-label={intl.formatMessage(i18n.searchLabel)}
                />
            </div>
            {filteredRegions.length > 0 ? (
                <div className={classes.tables}>
                    {filteredRegions.map(({ region, procedures }) => (
                        <RegionDoseTable key={region.id} region={region} procedures={procedures} />
                    ))}
                </div>
            ) : (
                <div className={classes.emptyState}>
                    <p className="text-muted-foreground">{intl.formatMessage(i18n.noResults, { query })}</p>
                    <Button variant="outline" size="sm" onClick={() => setQuery('')}>
                        {intl.formatMessage(i18n.clearSearch)}
                    </Button>
                </div>
            )}
        </section>
    );
};
