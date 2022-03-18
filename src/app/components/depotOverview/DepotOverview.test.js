import { render, screen } from '@testing-library/react';
import DepotOverview from './DepotOverview';

describe("DepotOverview", () => {

    it('renders without crashing', () => {
        render(<DepotOverview />);

        const dialogTitle = screen.getByText('DepotOverviewText');
        expect(dialogTitle).toBeInTheDocument();
    });

})