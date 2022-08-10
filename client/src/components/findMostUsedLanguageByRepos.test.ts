import findMostUsedLanguageByRepos from "./findMostUsedLanguageByRepos";

describe("Find Most Used Language By Repos Function", () => {
  test("it should return a number (proportion) if languages found", () => {
    const input = [
      "JavaScript",
      "HTML",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "HCL",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "HTML",
      "HTML",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
    ];
    const output = { JavaScript: 76 };
    expect(findMostUsedLanguageByRepos(input)).toEqual(output);
  });
  
  test("it should return not found and number 0 if languages not found", () => {
    const input: [] = [];
    const output = { "not found": 0 };
    expect(findMostUsedLanguageByRepos(input)).toEqual(output);
  });
});
