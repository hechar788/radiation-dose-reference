import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from 'src/utils/test-utils';

import { DoseTables } from './DoseTables';

const getSearchInput = () => screen.getByRole('searchbox', { name: 'Search by procedure or body area' });

describe('DoseTables', () => {
    it('shows every body area from the dataset by default', () => {
        renderWithProviders(<DoseTables />);

        expect(screen.getByText('Abdominal Region')).toBeInTheDocument();
        expect(screen.getByText('Nuclear Medicine')).toBeInTheDocument();
        expect(screen.getByText("Women's Imaging")).toBeInTheDocument();
    });

    it('filters procedures across every table when searching by procedure name', async () => {
        const user = userEvent.setup();
        renderWithProviders(<DoseTables />);

        await user.type(getSearchInput(), 'mammo');

        expect(screen.getByText("Women's Imaging")).toBeInTheDocument();
        expect(screen.getByText('Screening Digital Mammography')).toBeInTheDocument();
        expect(screen.getByText('3D Mammogram')).toBeInTheDocument();
        // Non-matching procedures and regions disappear, including DEXA within the same region.
        expect(screen.queryByText('DEXA')).not.toBeInTheDocument();
        expect(screen.queryByText('Chest')).not.toBeInTheDocument();
    });

    it('keeps a whole table when the query matches its body area name', async () => {
        const user = userEvent.setup();
        renderWithProviders(<DoseTables />);

        await user.type(getSearchInput(), 'heart');

        // No procedure under Heart contains "heart", the region name match keeps them all.
        expect(screen.getByText('Heart')).toBeInTheDocument();
        expect(screen.getByText('Coronary CTA')).toBeInTheDocument();
        expect(screen.getByText('Cardiac CT Calcium Scoring')).toBeInTheDocument();
        expect(screen.getByText('Non Cardiac CTA')).toBeInTheDocument();
        expect(screen.queryByText('Dental')).not.toBeInTheDocument();
    });

    it('shows an empty state with a working clear button for a query with no matches', async () => {
        const user = userEvent.setup();
        renderWithProviders(<DoseTables />);

        await user.type(getSearchInput(), 'ultrasound');

        expect(screen.getByText('No procedures or body areas match "ultrasound".')).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Clear search' }));

        expect(getSearchInput()).toHaveValue('');
        expect(screen.getByText('Abdominal Region')).toBeInTheDocument();
    });
});
