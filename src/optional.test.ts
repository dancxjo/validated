import { getValidParameters, optionally, stringParameter } from ".";

describe("optionally", () => {
  it("should provide optional parameters when they are undefined", () => {
    const parameterMap = {
      text: stringParameter(),
      optionalText: optionally(stringParameter()),
    };

    const { text, optionalText } = getValidParameters(parameterMap, {
      text: 'am here'
    });

    expect(text).toBe("am here");
    expect(optionalText).toBe(undefined);
  });

  it("should provide optional parameters when they are defined", () => {
    const parameterMap = {
      text: stringParameter(),
      optionalText: optionally(stringParameter()),
    };

    const { text, optionalText } = getValidParameters(parameterMap, {
      text: 'am here',
      optionalText: 'am here too'
    });

    expect(text).toBe("am here");
    expect(optionalText).toBe("am here too");
  });
});
