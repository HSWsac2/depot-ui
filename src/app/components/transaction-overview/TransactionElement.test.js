import { render, screen } from '@testing-library/react';

describe("TransactionElement", () => {

    xit('renders without crashing', () => {
        render(<TransactionElement 
        key='1'
        transaction='adfa'
        isLast='false'
        />);

        const dialogTitle = screen.getByText('TransactionElementText');
        expect(dialogTitle).toBeInTheDocument();
    });

})