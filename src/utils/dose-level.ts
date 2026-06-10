/**
 * Relative dose bands used purely for visual grouping within this guide.
 * Thresholds are relative to the range of values in the dataset (0.0005 to 22.7 mSv)
 * and carry no clinical meaning.
 */
export type DoseLevel = 'minimal' | 'low' | 'moderate' | 'higher';

export const getDoseLevel = (aedMsv: number): DoseLevel => {
    if (aedMsv < 0.1) {
        return 'minimal';
    }
    if (aedMsv < 1) {
        return 'low';
    }
    if (aedMsv < 10) {
        return 'moderate';
    }
    return 'higher';
};
