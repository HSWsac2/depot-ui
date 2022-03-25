import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {

    it.only("should render without error", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        expect(screen.getByText("HSW-Hameln")).toBeInTheDocument();

    });
})