import { render, screen, act } from '@testing-library/react';
import DepotOverview from './DepotOverview';
import { DepotContext } from "../../../context/DepotContext";
import axios from 'axios';

describe("DepotOverview", () => {

    it("should render without error", async () => {

        mockAdapter.onGet(`${process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE}depots/positionId/positionSubId/currentStocks`).reply(200, [])
        mockAdapter.onGet(`${process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE}depots/history/positionId/positionSubId`).reply(200, [])

        await act(async () => render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId", position_sub_id: "positionSubId" } }}>
                <DepotOverview />
            </DepotContext.Provider>
        ));

        expect(screen.getByText("Einzelpositionen")).toBeInTheDocument();

    });

    it("should call backend for generating table", async () => {

        mockAdapter.onGet(`${process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE}depots/positionId/positionSubId/currentStocks`).reply(200, [])
        mockAdapter.onGet(`${process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE}depots/history/positionId/positionSubId`).reply(200, [])
        
        let spy = jest.spyOn(axios, "get");

        await act(async () => render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId", position_sub_id: "positionSubId" } }}>
                <DepotOverview />
            </DepotContext.Provider>
        ));

        expect(screen.getByText("Einzelpositionen")).toBeInTheDocument();
        expect(spy).toHaveBeenCalled();

    });
})