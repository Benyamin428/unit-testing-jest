import { expect, it } from "@jest/globals";
import { translate } from "./translate";

// valid inputs (positive tests)
it("should translate hello to bonjour", () => {
  const result = translate("hello", "french");
  expect(result).toBe("bonjour");
});

it("should translate bye to au revoir", () => {
    const result = translate("bye", "french");
    expect(result).toBe("au revoir");
})

it("should translate food to aliments", () => {
    const result = translate("food", "french");
    expect(result).toBe("aliments");
})

it("should translate car to auto", () => {
    const result = translate("car", "french");
    expect(result).toBe("auto");
})

// invalid inputs (negative tests)
it("should translate asdfghfj to 'unavailable'", () => {
    const result = translate("asdfghfj", "french");
    expect(result).toBe(undefined);
});

it("should translate 6a8hdj to 'unavailable'", () => {
    const result = translate("6a8hdj", "french");
    expect(result).toBe(undefined);
});

it("should translate bbbbb to 'unavailable'", () => {
    const result = translate("bbbbb", "french");
    expect(result).toBe(undefined);
});

it("should translate ::::::: to 'unavailable'", () => {
    const result = translate(":::::::", "french");
    expect(result).toBe(undefined);
});

// undefined inputs (negative tests)
it("should translate undefined inputs to 'unavailable'", () => {
    const result = translate("", "french");
    expect(result).toBe(undefined);
});

it("should translate undefined inputs to 'unavailable'", () => {
    const result = translate("undefined", "french");
    expect(result).toBe(undefined);
});


