import { render, screen } from '@testing-library/react';
import { DepotContextProvider } from '../../../context/DepotContext';
import BuySellDialog from './BuySellDialog';


describe("BuySellDialog", () => {

    it("should render without error", () => {
        render(
            <DepotContextProvider value={{ currentDepot: { position_id: "positionId", position_sub_id: "positionSubId"  }, invalidateAvailableDepots, selectDepot }}>
            <BuySellDialog 
            stock="stock"
            isOpen="true"
            handleClose=""/>
            </DepotContextProvider>
        );
            
        expect(screen.getByText("handeln")).toBeInTheDocument();
    });
})