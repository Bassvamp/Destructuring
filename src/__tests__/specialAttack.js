import specialAttack from "../js/specialAttack.js";

test("test character special attack description", () => {
  const character = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defense: 10,
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };

  specialAttack(character);
  let characterSpecial = [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      description: "Описание недоступно",
    },
  ];
  expect(character.special).toEqual(characterSpecial);
});
