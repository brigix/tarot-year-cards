import React from 'react'


const CardsServices = (cardNumber) => {
    const majorArcana = {
        0: "Fool",
        1: "Magician",
        2: "High Priestess",
        3: "Empress",
        4: "Emporor",
        5: "Hierophant",
        6: "Lovers",
        7: "Chariot",
        8: "Strength",
        9: "Hermit",
        10: "Wheel of Fortune",
        11: "Justice",
        12: "Hanged man",
        13: "Death",
        14: "Temperance",
        15: "Devil",
        16: "Tower",
        17: "Star",
        18: "Moon",
        19: "Sun",
        20: "Judgement",
        21: "World",
        22: "Fool"
    }
  return majorArcana[cardNumber] ?? "card not found";
}

export default CardsServices