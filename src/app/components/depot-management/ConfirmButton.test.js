import ConfirmButton from "./ConfirmButton";
import { render, screen } from '@testing-library/react';

describe("ConfirmButton", () => {

    it('renders without crashing', () => {
        render(<ConfirmButton
            buttonText="customButtonText"
            acceptCallback={jest.fn()}
            dialogTitle="customDialogTitle"
            dialogBody="customDialogBody"
        />);

        const dialogTitle = screen.getByText('customButtonText');
        expect(dialogTitle).toBeInTheDocument();
    });

    it("opens on click", () => {

    })

})