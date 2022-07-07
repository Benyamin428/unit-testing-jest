import { expect, it } from "@jest/globals";
import { divide, multiply } from "./sums";

// multiply test
it("multiplies 3 and 4 to equal 12", () => {
    const result = multiply(3,4);

    expect(result).toBe(12);
})

// divide test
it("divides 10 and 5 to equal 2", () => {
    const result = divide(10, 5);
    expect(result).toBe(2);
})

it("divides 8 and 2 to equal 4", () => {
    const result = divide(8, 2);
    expect(result).toEqual(4);
})

it("divides 5 by 0 to equal Can't divide by 0", () => {
    const result = divide(5, 0);
    expect(result).toMatch(/Can't divide by 0/);
})