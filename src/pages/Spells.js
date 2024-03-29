import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Spells.css";

const App = () => {
  const [formValue, setFormValue] = useState("");
  const [spells, setSpells] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [noSpell, setNoSpell] = useState("");

  const fetchSpells = async () => {
    const url = `https://harry-potter-api-en.onrender.com/db`;
    const response = await fetch(url);
    const data = await response.json();
    const spellsData = data.spells;

    setSpells(spellsData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredSpells = spells.filter((spell) =>
      spell.spell.toLowerCase().includes(formValue.toLowerCase())
    );

    if (filteredSpells.length > 0) {
      setSelectedSpell(filteredSpells[0]);
      setFormValue("");
      setNoSpell("");
    } else {
      setNoSpell("Spell not found");
      setSelectedSpell("");
      setFormValue("");
    }

    if (formValue.trim() === "") {
      setSelectedSpell("");
      setNoSpell("The spell was not entered");
    }
  };

  useEffect(() => {
    fetchSpells();
  }, [formValue]);

  return (
    <section className="spells-wrapper">
      <form onSubmit={handleFormSubmit} className="input-container">
        <h1>Enter incantation</h1>

        <input
          type="text"
          value={formValue}
          onChange={(event) => setFormValue(event.target.value)}
        />
        <button>Find spell</button>
      </form>

      <div className="result-spell-container">
        {selectedSpell && (
          <div key={selectedSpell.id}>
            <h1>{selectedSpell.spell}</h1>
            <p>{selectedSpell.use}</p>
          </div>
        )}
        <p>{noSpell}</p>
      </div>

      <ul>
        <li>
          <Link to="/">Back to Hogwarts</Link>
        </li>
      </ul>
    </section>
  );
};

export default App;
