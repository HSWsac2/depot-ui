import { render, screen } from '@testing-library/react';
import DepotCreated from './DepotCreated';

describe("DepotCreated", () => {

    it ("is rendered without error", () => {
        render(
            <DepotCreated />
        )

        expect(screen.getByText("Depot wird erstellt. Sie werden in Kürze weitergeleitet.")).toBeInTheDocument();
    })
})