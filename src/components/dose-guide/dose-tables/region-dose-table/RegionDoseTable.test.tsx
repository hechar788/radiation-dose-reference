import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { Region } from 'src/data';
import { renderWithProviders } from 'src/utils/test-utils';

import { RegionDoseTable } from './RegionDoseTable';

const bone: Region = {
    id: 'bone',
    name: 'Bone',
    procedures: [
        {
            id: 'lumbar-spine',
            name: 'Lumbar Spine',
            aed: { display: '1.4', value: 1.4 },
            comparableBackground: '6 months',
        },
        {
            id: 'extremity-x-ray',
            name: 'Extremity X-ray',
            aed: { display: '<0.001', value: 0.0005 },
            comparableBackground: '<3 hours',
        },
    ],
};

const chest: Region = {
    id: 'chest',
    name: 'Chest',
    procedures: [
        {
            id: 'ct-chest',
            name: 'CT Chest',
            aed: { display: '6.1', value: 6.1 },
            comparableBackground: '2 years',
        },
        {
            id: 'ct-lung-cancer-screening',
            name: 'CT Lung Cancer Screening',
            aed: { display: '1.5', value: 1.5 },
            comparableBackground: '6 months',
        },
        {
            id: 'chest-x-ray',
            name: 'Chest X-ray',
            aed: { display: '0.1', value: 0.1 },
            comparableBackground: '10 days',
        },
    ],
};

const getBodyRowTexts = () => {
    const [tableBody] = screen.getAllByRole('rowgroup').slice(-1);
    return within(tableBody)
        .getAllByRole('row')
        .map((row) => within(row).getAllByRole('cell')[0].textContent);
};

describe('RegionDoseTable', () => {
    it('sorts by A.E.D. from highest to lowest by default', () => {
        renderWithProviders(<RegionDoseTable region={bone} procedures={bone.procedures} />);

        expect(getBodyRowTexts()).toEqual(['Lumbar Spine', 'Extremity X-ray']);
    });

    it('keeps the printed "<0.001" display while sorting it as a number', async () => {
        const user = userEvent.setup();
        renderWithProviders(<RegionDoseTable region={bone} procedures={bone.procedures} />);

        expect(screen.getByText('<0.001')).toBeInTheDocument();

        // Ascending puts the sub-millisievert value first, proving the numeric sort key is used.
        await user.click(screen.getByRole('button', { name: 'Sort by A.E.D. (mSv)' }));
        expect(getBodyRowTexts()).toEqual(['Extremity X-ray', 'Lumbar Spine']);
    });

    it('sorts the background radiation column by dose value, not alphabetically', async () => {
        const user = userEvent.setup();
        renderWithProviders(<RegionDoseTable region={chest} procedures={chest.procedures} />);

        await user.click(screen.getByRole('button', { name: 'Sort by Comparable Background Radiation' }));

        // Alphabetical ordering would give: 10 days, 2 years, 6 months.
        expect(getBodyRowTexts()).toEqual(['Chest X-ray', 'CT Lung Cancer Screening', 'CT Chest']);
    });
});
