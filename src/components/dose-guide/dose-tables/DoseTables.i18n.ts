const prefix = 'dose-tables';

export const i18n = {
    heading: {
        id: `${prefix}.heading`,
        defaultMessage: 'Explore doses by body area',
    },
    subheading: {
        id: `${prefix}.subheading`,
        defaultMessage:
            'Each table covers one body area from the reference guide, with the highest doses first. Click a column heading to re-sort, or search across every area at once.',
    },
    searchPlaceholder: {
        id: `${prefix}.searchPlaceholder`,
        defaultMessage: 'Search by procedure or body area, e.g. chest',
    },
    searchLabel: {
        id: `${prefix}.searchLabel`,
        defaultMessage: 'Search by procedure or body area',
    },
    noResults: {
        id: `${prefix}.noResults`,
        defaultMessage: 'No procedures or body areas match "{query}".',
    },
    clearSearch: {
        id: `${prefix}.clearSearch`,
        defaultMessage: 'Clear search',
    },
} as const;
