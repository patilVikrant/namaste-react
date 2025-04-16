import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})


it("Should load Restaurant Menu Component", async () => {

    await act(async () => render(
    <BrowserRouter>    
        <Provider store={appStore}>
            <Header /> 
            <RestaurantMenu />
        </Provider>
    </BrowserRouter>
))

    const accordionHeader = screen.getByText("Smash Burgers (4)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(4);

    const addBtns = screen.getAllByRole("button", {name: "ADD"})
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(6);    

    expect(screen.getByText("Cart is Empty")).toBeInTheDocument();

})