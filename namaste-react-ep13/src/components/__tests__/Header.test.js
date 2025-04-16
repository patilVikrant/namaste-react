import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";


it("Should load header component with a login button", () => {
    
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");



    expect(loginButton).toBeInTheDocument();

});

it("Should load header component with a Cart Items 0", () => {
    
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();

});

it("Should load header component with a Cart", () => {
    
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();

});

it("Should Change Login Button to Logout on Click", () => {
    
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();

});
