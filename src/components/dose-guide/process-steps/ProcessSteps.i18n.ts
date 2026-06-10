const prefix = 'process-steps';

export const i18n = {
    heading: {
        id: `${prefix}.heading`,
        defaultMessage: 'What happens when you have a scan?',
    },
    subheading: {
        id: `${prefix}.subheading`,
        defaultMessage: 'Hover over a card to learn more.',
    },
    flipHint: {
        id: `${prefix}.flipHint`,
        defaultMessage: 'Hover to learn more',
    },
    referralTitle: {
        id: `${prefix}.referralTitle`,
        defaultMessage: 'You are referred for a scan',
    },
    referralDescription: {
        id: `${prefix}.referralDescription`,
        defaultMessage:
            'Your clinician requests a diagnostic imaging procedure, such as an X-ray or CT scan, to help answer a question about your health.',
    },
    radiationTitle: {
        id: `${prefix}.radiationTitle`,
        defaultMessage: 'The scan uses a small amount of radiation',
    },
    radiationDescription: {
        id: `${prefix}.radiationDescription`,
        defaultMessage:
            'Many imaging procedures use ionising radiation to create detailed pictures of the inside of your body. The overall amount your body receives is called the effective dose.',
    },
    measurementTitle: {
        id: `${prefix}.measurementTitle`,
        defaultMessage: 'The dose is measured in millisieverts',
    },
    measurementDescription: {
        id: `${prefix}.measurementDescription`,
        defaultMessage:
            'Effective dose is measured in millisieverts (mSv) and estimates the overall impact of radiation exposure on the body. A.E.D. stands for Approximate Effective Dose.',
    },
    comparisonTitle: {
        id: `${prefix}.comparisonTitle`,
        defaultMessage: 'It is compared with background radiation',
    },
    comparisonDescription: {
        id: `${prefix}.comparisonDescription`,
        defaultMessage:
            'Everyone is exposed to natural background radiation every day. Each dose below is translated into an equivalent period of background exposure, for example a chest X-ray is about 10 days.',
    },
    variationTitle: {
        id: `${prefix}.variationTitle`,
        defaultMessage: 'Your actual dose may vary',
    },
    variationDescription: {
        id: `${prefix}.variationDescription`,
        defaultMessage:
            'Actual radiation doses vary depending on patient size, imaging equipment, and examination protocols. The values in this guide are approximate.',
    },
} as const;
