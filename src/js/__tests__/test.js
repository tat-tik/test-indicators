import healthIndicator from "../app";

test.each([
    [{ name: "Маг", health: 80 }, "healthy"],
    [{ name: "Лучник", health: 40 }, "wounded"],
    [{ name: "Мечник", health: 10 }, "critical"],
])("player health indicators", (player, expected) => {
    const result = healthIndicator(player);

    expect(result).toBe(expected);
});
