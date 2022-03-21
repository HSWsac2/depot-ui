import FinalizeCreateDepot from "./FinalizeCreateDepot";
import { render, screen, fireEvent } from '@testing-library/react';

describe("FinalizeCreateDepot", () => {
    it ("is rendered without error", () => {
        render(
            <FinalizeCreateDepot />
        )

        expect(screen.getByText("Finalisieren Sie die Erstellung Ihres Depots durch Vergeben eines Namens")).toBeInTheDocument();
    });

    it ("calls setter when depotName changes", () => {
       
        const setDepotName = jest.fn();

        render(
            <FinalizeCreateDepot setDepotName={setDepotName}/>
        )

        expect(screen.getByText("Finalisieren Sie die Erstellung Ihres Depots durch Vergeben eines Namens")).toBeInTheDocument();

        const input = screen.getByLabelText("Depotname")
        fireEvent.change(input, {target: {value: 'Neuer Depot-Name'}})
        
        expect(setDepotName).toHaveBeenCalledWith('Neuer Depot-Name')

    })
})