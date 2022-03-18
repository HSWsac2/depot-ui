import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ShallowRenderer from 'react-test-renderer/shallow';
import { DepotContext } from "../../../context/DepotContext";
import DepotManagement from "./DepotManagement";

const shallowRenderer = new ShallowRenderer();

beforeEach(() => {
});
afterEach(() => {
});

describe("DepotManagement", () => {

    it("should render without error", () => {
        render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId" } }}>
                <DepotManagement />
            </DepotContext.Provider>
        );

        expect(screen.getByText(/Mit Betätigung dieses Buttons löschen Sie ihr Depot/)).toBeInTheDocument();

    });

    it("should call backend on click", () => {
        //setup
        realUseContext = React.useContext;
        useContextMock = React.useContext = jest.fn();

        shallowRenderer.render(
            <DepotManagement />
        );

        const button = screen.getByRole('button', {
            name: /Depot löschen/i
        });
        userEvent.click(button);


        expect(screen.getByText(/Mit Betätigung dieses Buttons löschen Sie ihr Depot/)).toBeInTheDocument();
        expect(useContextMock).toHaveBeenCalled();
        //cleanup
        React.useContext = realUseContext;

    });

})
