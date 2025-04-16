import {  fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        jest: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search Res list for burger text input", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = sreen.getByTestId(searchInput);

    fireEvent.change(searchInput, {target: {value: "burger"}})

    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(4);
    
})

it("Should filter top rated Restaurant", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(5);
    
})