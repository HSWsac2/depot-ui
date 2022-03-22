import { render, screen } from '@testing-library/react';
import DepotOverview from './DepotOverview';
import { DepotContext } from "../../../context/DepotContext";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe("DepotOverview", () => {

    let mockAdapter;

    beforeAll(() => {
        mockAdapter = new MockAdapter(axios);
    });
    
    it("should render without error", () => {

        mockAdapter.onGet(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
            `depots/positionId/positionSubId/currentStocks}`).reply(200, {})

        render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId", position_sub_id: "positionSubId" } }}>
                <DepotOverview />
            </DepotContext.Provider>
        );

        expect(screen.getByText("Einzelpositionen")).toBeInTheDocument();

    });

    it("should call backend for generating table", () => {

        mockAdapter.onGet(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
            `depots/positionId/positionSubId/currentStocks}`).reply(200, {})
        let spy = jest.spyOn(axios, "get");
            
        
        render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId", position_sub_id: "positionSubId" } }}>
                <DepotOverview />
            </DepotContext.Provider>
        );
        
        expect(screen.getByText("Einzelpositionen")).toBeInTheDocument(); 
        expect(spy).toHaveBeenCalled();

    });

    it("should call backend for generating chart", () => {
        var mockAdapter = new MockAdapter(axios, { onNoMatch: "throwException" });

        mockAdapter.onGet(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
            `depots/positionId}/positionSubId}`).reply(200, {resp: ["some element"]})
        let spy = jest.spyOn(axios, "get");
            
        
        render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId", position_sub_id: "positionSubId" } }}>
                <DepotOverview />
            </DepotContext.Provider>
        );
        
        expect(spy).toHaveBeenCalled();

    });
})