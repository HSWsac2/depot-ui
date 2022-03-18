import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { DepotContext } from "../../../context/DepotContext";
import DepotManagement from "./DepotManagement";

const shallowRenderer = new ShallowRenderer();

beforeEach(() => {
});
afterEach(() => {
});

describe("DepotManagement", () => {

    // xit("should render without error", () => {
    //     render(
    //         <DepotContext.Provider value={{ currentDepot: { position_id: "positionId" } }}>
    //             <DepotManagement />
    //         </DepotContext.Provider>
    //     );

    //     expect(screen.getByText(/Mit Betätigung dieses Buttons löschen Sie ihr Depot/)).toBeInTheDocument();

    // });


})
