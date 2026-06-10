export type ApproximateEffectiveDose = {
    /** Value as printed in the source guide, e.g. "<0.001". */
    display: string;
    /** Numeric value in mSv used for sorting and comparisons. */
    value: number;
};

export type Procedure = {
    id: string;
    name: string;
    aed: ApproximateEffectiveDose;
    /** Equivalent period of natural background radiation exposure, e.g. "2.6 years". */
    comparableBackground: string;
};

export type Region = {
    id: string;
    name: string;
    procedures: Procedure[];
};

export type RadiationDoseReference = {
    guide: {
        title: string;
        intro: string;
    };
    regions: Region[];
};
