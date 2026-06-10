import { getDoseLevel } from './dose-level';

describe('getDoseLevel', () => {
    it('bands the extremes of the dataset', () => {
        expect(getDoseLevel(0.0005)).toBe('minimal'); // Extremity X-ray sort key for "<0.001"
        expect(getDoseLevel(22.7)).toBe('higher'); // PET/CT Whole Body
    });

    it.each([
        [0.099, 'minimal'],
        [0.1, 'low'],
        [0.999, 'low'],
        [1, 'moderate'],
        [9.999, 'moderate'],
        [10, 'higher'],
    ])('bands a dose of %s mSv as %s', (aedMsv, expectedLevel) => {
        expect(getDoseLevel(aedMsv)).toBe(expectedLevel);
    });
});
