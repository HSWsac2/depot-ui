import { render, screen } from '@testing-library/react';

describe("TransactionOverview", () => {

    xit('renders without crashing', () => {
        render(<TransactionOverview />);

        const dialogTitle = screen.getByText('TransactionOverviewTest');
        expect(dialogTitle).toBeInTheDocument();
    });

})