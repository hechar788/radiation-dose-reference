const prefix = 'region-dose-table';

export const i18n = {
    procedureColumn: {
        id: `${prefix}.procedureColumn`,
        defaultMessage: 'Procedure',
    },
    aedColumn: {
        id: `${prefix}.aedColumn`,
        defaultMessage: 'A.E.D. (mSv)',
    },
    backgroundColumn: {
        id: `${prefix}.backgroundColumn`,
        defaultMessage: 'Comparable Background Radiation',
    },
    procedureCount: {
        id: `${prefix}.procedureCount`,
        defaultMessage: '{count, plural, one {# procedure} other {# procedures}}',
    },
    sortButtonLabel: {
        id: `${prefix}.sortButtonLabel`,
        defaultMessage: 'Sort by {column}',
    },
} as const;
