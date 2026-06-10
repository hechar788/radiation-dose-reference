const prefix = 'dose-level-badge';

export const i18n = {
    minimal: {
        id: `${prefix}.minimal`,
        defaultMessage: 'Minimal',
    },
    low: {
        id: `${prefix}.low`,
        defaultMessage: 'Low',
    },
    moderate: {
        id: `${prefix}.moderate`,
        defaultMessage: 'Moderate',
    },
    higher: {
        id: `${prefix}.higher`,
        defaultMessage: 'Higher',
    },
    tooltip: {
        id: `${prefix}.tooltip`,
        defaultMessage: 'Relative to the other procedures in this guide. Not a clinical rating.',
    },
} as const;
