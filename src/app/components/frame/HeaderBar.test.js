import { render, screen } from '@testing-library/react';
import HeaderBar from './HeaderBar';
import { UserContextProvider } from "../../../context/UserContext";
import { BrowserRouter } from "react-router-dom";


describe("HeaderBar", () => {

    it("should render without error", () => {
        render(
            <BrowserRouter>
            <UserContextProvider value={{currentUser:{client_id:"23"}}}>
                <HeaderBar />
            </UserContextProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Depotverwaltung")).toBeInTheDocument();

    });
})