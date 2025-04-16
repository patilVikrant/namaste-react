import {render, screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test case", () => {
    it("Should load contact us component", () => {

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
    
    it("Should load button in contact us component", () => {
    
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    
    });
    
    
    it("Should load input name in contact us component", () => {
    
        render(<Contact />);
    
        const placeholderText = screen.getByPlaceholderText("name");
    
        expect(placeholderText).toBeInTheDocument();
    
    });
    
    it("Should load two input boxes in contact us component", () => {
    
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    
    });
    

})


