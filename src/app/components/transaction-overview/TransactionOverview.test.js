import { render, screen } from '@testing-library/react';
import DepotOverview from './DepotOverview';

describe("TransactionOverview", () => {

    it('renders without crashing', () => {
        render(<TransactionOverview />);

        const dialogTitle = screen.getByText('TransactionOverviewTest');
        expect(dialogTitle).toBeInTheDocument();
    });

})