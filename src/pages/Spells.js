import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "./Spells.css";

const Spells = () => {
  const [displaySpell, setDisplaySpell] = useState("");
  const [inputValue, setInputValue] = useState("");
  const url = "https://hp-api.onrender.com/api/spells";
  const [currentSpell, setCurrentSpell] = useState({
    name: "Spell",
    description: "description",
  });

  const getSpell = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();

    const filteredSpells = data.filter((spell) =>
      spell.name.toLowerCase().includes(displaySpell.toLowerCase())
    );

    if (filteredSpells.length > 0) {
      const finalSpell = filteredSpells[0];
      setCurrentSpell(finalSpell);
    } else {
      setCurrentSpell({
        name: "Incantation not found",
        description: "",
      });
    }
  }, [displaySpell]);

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setDisplaySpell(inputValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (inputValue.trim() !== "") {
        await getSpell();
      } else {
        setCurrentSpell({
          name: "",
          description: "",
        });
      }
    };

    fetchData();
  }, [getSpell, inputValue]);

  return (
    <section className="spells-wrapper">
      <div className="input-container">
        <h1>Enter incantation</h1>

        <input
          type="text"
          value={inputValue}
          onChange={(event) => onChangeHandler(event)}
        />
      </div>
      {inputValue.trim() !== "" && (
        <div className="result-spell-container">
          <h1>{currentSpell.name}</h1>
          <p>{currentSpell.description}</p>
        </div>
      )}
      <ul>
        <li>
          <Link to="/">Back to Hogwarts</Link>
        </li>
      </ul>
    </section>
  );
};

export default Spells;
