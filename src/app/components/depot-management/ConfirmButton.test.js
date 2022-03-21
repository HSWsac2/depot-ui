import ConfirmButton from "./ConfirmButton";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe("ConfirmButton", () => {

    it('is closed in default state', () => {
        render(<ConfirmButton
            buttonText="customButtonText"
            acceptCallback={jest.fn()}
            dialogTitle="customDialogTitle"
            dialogBody="customDialogBody"
        />);

        const dialogTitle = screen.getByText('customButtonText');
        expect(dialogTitle).toBeInTheDocument();
        expect(screen.queryByText("customDialogTitle")).not.toBeInTheDocument();
        expect(screen.queryByText("customDialogBody")).not.toBeInTheDocument();

    });

    it("calls callback function on confirmation", async () => {
        const acceptCallback = jest.fn();
        render(<ConfirmButton
            buttonText="customButtonText"
            acceptCallback={acceptCallback}
            dialogTitle="customDialogTitle"
            dialogBody="customDialogBody"
        />);

        const button = screen.getByRole('button', {
            name: /customButtonText/i
        });

        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText("customDialogTitle")).toBeInTheDocument();
            expect(screen.getByText("customDialogBody")).toBeInTheDocument();
        });


        const confirm = screen.getByRole('button', {
            name: /Akzeptieren/i
        });

        userEvent.click(confirm);

        await waitFor(() => {
            expect(screen.queryByText("customDialogTitle")).not.toBeInTheDocument();
            expect(screen.queryByText("customDialogBody")).not.toBeInTheDocument();
        });

        expect(acceptCallback).toHaveBeenCalled();
        
    })
    it("does not call callback function on cancel", async () => {
        const acceptCallback = jest.fn();
        render(<ConfirmButton
            buttonText="customButtonText"
            acceptCallback={acceptCallback}
            dialogTitle="customDialogTitle"
            dialogBody="customDialogBody"
        />);

        const button = screen.getByRole('button', {
            name: /customButtonText/i
        });

        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText("customDialogTitle")).toBeInTheDocument();
            expect(screen.getByText("customDialogBody")).toBeInTheDocument();
        });


        const confirm = screen.getByRole('button', {
            name: /Abbrechen/i
        });

        userEvent.click(confirm);

        await waitFor(() => {
            expect(screen.queryByText("customDialogTitle")).not.toBeInTheDocument();
            expect(screen.queryByText("customDialogBody")).not.toBeInTheDocument();
        });

        expect(acceptCallback).not.toHaveBeenCalled();
        
    })
})