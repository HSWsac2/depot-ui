import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { DepotContext } from "../../../context/DepotContext";
import DepotManagement from "./DepotManagement";

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
        var mockAdapter = new MockAdapter(axios);

        mockAdapter.onDelete(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
            `depots/${currentDepot.position_id}/${currentDepot.position_sub_id}`).reply(200, {})
        let spy = jest.spyOn(axios, "delete");
            
        
        render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId" } }}>
                <DepotManagement />
            </DepotContext.Provider>
        );
        
        const deleteButton = screen.getByRole('button', {
            name: /Depot löschen/i
        });
        userEvent.click(deleteButton);
        
        
        expect(screen.getByText("Wollen Sie Ihr Depot wirklich unwiderruflich löschen?")).toBeInTheDocument();
        
        const confirmButton = screen.getByRole('button', {
            name: /Unwiderruflich löschen/i
        });
        userEvent.click(confirmButton);
        
        expect(screen.getByText("Depot erfolgreich gelöscht... jetzt ist es wirklich weg, schade aber auch")).toBeInTheDocument();
        expect(spy).toHaveBeenCalled();

    });

})
