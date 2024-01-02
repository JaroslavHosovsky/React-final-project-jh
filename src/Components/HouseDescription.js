import "./HouseDescription.css";
import { useState } from "react";

const HouseDescription = () => {
  const houses = [
    {
      id: 1,
      name: "Gryffindor",
      description:
        "Gryffindor house is renowned for hosting the most courageous and daring students, symbolized by the brave lion. The house features scarlet and gold colors, its common room situated in Gryffindor Tower, and is led by Professor Minerva McGonagall. Those sorted into Gryffindor demonstrate qualities such as courage, bravery, and determination, with notable members including Harry Potter and Albus Dumbledore. Gryffindor students are often characterized as individuals who stand up for the underdog, challenge authority, act impulsively, possess a sense of humor, and approach board games with utmost seriousness.",
    },
    {
      id: 2,
      name: "Hufflepuff",
      description:
        "Hufflepuff is home to the most trustworthy and hardworking students, boasting the fewest dark witches and wizards among all the houses. Represented by the badger, with yellow and black as its colors, Hufflepuff is led by Professor Pomona Sprout, and its common room is situated near the Hogwarts kitchens.Contrary to the misconception that Hufflepuffs are the least clever, they are, in fact, characterized by their humility. Hufflepuffs don't feel the need to boast about their achievements like students from other houses.",
    },
    {
      id: 3,
      name: "Ravenclaw",
      description:
        "Ravenclaw is the go-to house for the brainiest students, exceptions aside (such as Hermione Granger). Adorned in blue and bronze, with an eagle emblem, Ravenclaw is overseen by Professor Filius Flitwick, and its common room resides at the top of Ravenclaw Tower, secured by an enchanted knocker.The Sorting Hat selects individuals for Ravenclaw based on demonstrated wisdom, wit, and a keen aptitude for learning. Ravenclaws are often characterized as eccentric, with the house producing many of the wizarding world's prominent inventors and innovators.",
    },
    {
      id: 4,
      name: "Slytherin",
      description:
        "Despite its notoriety, Slytherin boasts admirable qualities sought by the Sorting Hat, with even Merlin himself belonging to this misunderstood house. Adorned in silver and emerald green, and represented by a serpent emblem, Slytherin is overseen by Professor Severus Snape, and its common room is situated in the dungeons beneath the lake, adding to its air of mystery.If the Sorting Hat deemed you a fit for Slytherin, you likely possess ambition, shrewdness, and potential for greatness. Imaginably, you are someone who stays ahead of the curve, appreciates dark humor, values reputation, takes pride in appearance, and guards their softer side from public view.",
    },
  ];

  const [typeOfHouse, setTypeOfHouse] = useState("Gryffindor");
  const [selectedButton, setSelectedButton] = useState("Gryffindor");

  const handleButtonClick = (name) => {
    setTypeOfHouse(name);
    setSelectedButton(name);
  };

  return (
    <section className="description-wrapper">
      <div className="description-container">
        <div className="button-handler">
          {houses.map((oneHouse) => {
            const { id, name } = oneHouse;
            const buttonStyle = {
              backgroundColor: selectedButton === name ? "#0d262c" : "#16404c",
              color: selectedButton === name ? "white" : "#75878c",
            };
            return (
              <div key={id}>
                <button
                  style={buttonStyle}
                  onClick={() => handleButtonClick(name)}
                >
                  {name}
                </button>
              </div>
            );
          })}
        </div>

        <div className="description-text-wrapper">
          <h2>{typeOfHouse}</h2>
          <p>
            {
              houses.find((oneHouse) => oneHouse.name === typeOfHouse)
                ?.description
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default HouseDescription;
