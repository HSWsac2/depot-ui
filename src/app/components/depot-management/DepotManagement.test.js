import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import axios from 'axios';
import { DepotContext } from "../../../context/DepotContext";
import DepotManagement from "./DepotManagement";


describe("DepotManagement", () => {

    it("should render without error", async () => {
        mockAdapter.onGet(`${process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE}depots/positionId/positionSubId/currentStocks`).reply(200, [])

        await act(async () => render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId", position_sub_id: "positionSubId" } }}>
                <DepotManagement />
            </DepotContext.Provider>
        ));
        await waitFor(() =>  expect(screen.getByText(/Mit Betätigung dieses Buttons löschen Sie ihr Depot/)).toBeInTheDocument())

    });

    it("should call backend on click", async () => {
        mockAdapter.onGet(`${process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE}depots/positionId/positionSubId/currentStocks`).reply(200, [])

        mockAdapter.onDelete(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
            `depots/positionId/positionSubId`).reply(200, { resp: "some element" })

        let spy = jest.spyOn(axios, "delete");

        const invalidateAvailableDepots = jest.fn();
        const selectDepot = jest.fn();

        await act(async () => render(
            <DepotContext.Provider value={{ currentDepot: { position_id: "positionId", position_sub_id: "positionSubId" }, invalidateAvailableDepots, selectDepot }}>
                <DepotManagement />
            </DepotContext.Provider>
        ));

        const deleteButton = screen.getByRole('button', {
            name: /Depot löschen/i
        });
        userEvent.click(deleteButton);

        await waitFor(() => expect(screen.getByText("Wollen Sie Ihr Depot wirklich unwiderruflich löschen?")).toBeInTheDocument())

        const confirmButton = screen.getByRole('button', {
            name: /Unwiderruflich löschen/i
        });
        userEvent.click(confirmButton);

        await waitFor(() => expect(screen.queryByText("Wollen Sie Ihr Depot wirklich unwiderruflich löschen?")).not.toBeInTheDocument())

        expect(spy).toHaveBeenCalled();
        expect(invalidateAvailableDepots.toHaveBeenCalled)
        expect(screen.getByText("Depot erfolgreich gelöscht... jetzt ist es wirklich weg, schade aber auch")).toBeInTheDocument()

    });

})
