import { render, screen } from '@testing-library/react';


describe("CustomerInformation", () => {

    it("should render without error", () => {
        render(
            <UserContextProvider>
                <CustomerInformation />
            </UserContextProvider>
        );

        expect(screen.getByText("name")).toBeInTheDocument();

    });
})