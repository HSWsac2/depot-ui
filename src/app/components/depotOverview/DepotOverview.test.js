import { render, screen } from '@testing-library/react';
import DepotOverview from './DepotOverview';
import { DepotContext } from "../../../context/DepotContext";

describe("DepotOverview", () => {

    it("should render without error", () => {
        render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId" } }}>
                <DepotOverview />
            </DepotContext.Provider>
        );

        expect(screen.getByText(/Einzelpositionen/)).toBeInTheDocument();

    });

    it("should call backend for generating table", () => {
        var mockAdapter = new MockAdapter(axios);

        mockAdapter.onGet(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
            `depots/${currentDepot.position_id}/${currentDepot.position_sub_id}`).reply(200, {}) // fixme
        let spy = jest.spyOn(axios, "get");
            
        
        render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId" } }}>
                <DepotOverview />
            </DepotContext.Provider>
        );
        
        expect(screen.getByText("Einzelpositionen")).toBeInTheDocument(); 
        expect(spy).toHaveBeenCalled();

    });

    it("should call backend for generating chart", () => {
        var mockAdapter = new MockAdapter(axios);

        mockAdapter.onGet(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
            `depots/${currentDepot.position_id}/${currentDepot.position_sub_id}`).reply(200, {}) // fixme
        let spy = jest.spyOn(axios, "get");
            
        
        render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId" } }}>
                <DepotOverview />
            </DepotContext.Provider>
        );
        
        expect(screen.getByText("Depotwert")).toBeInTheDocument(); //TODO
        expect(spy).toHaveBeenCalled();

    });
})