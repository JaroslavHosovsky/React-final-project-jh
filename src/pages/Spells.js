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

/* 





*/

// Kód bez useCallback a submit buttonu

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./Spells.css";

// const Spells = () => {
//   const [displaySpell, setDisplaySpell] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(true);
//   const url = "https://hp-api.onrender.com/api/spells";
//   const [currentSpell, setCurrentSpell] = useState({
//     name: "Spell",
//     description: "description",
//   });

//   const formSubmit = (event) => {
//     event.preventDefault();
//     console.log("formulář odeslán");
//     const inputValue = event.target.value;
//     console.log(inputValue);
//     // setInputValue(inputValue);
//     // setDisplaySpell(inputValue);
//     fetchData();
//   };

//   const fetchData = async () => {
//     setLoading(true);
//     if (inputValue.trim() !== "") {
//       const response = await fetch(url);
//       const data = await response.json();

//       const filteredSpells = data.filter((spell) =>
//         spell.name.toLowerCase().includes(displaySpell.toLowerCase())
//       );

//       if (filteredSpells.length > 0) {
//         const finalSpell = filteredSpells[0];
//         setCurrentSpell(finalSpell);
//       } else {
//         setCurrentSpell({
//           name: "Incantation not found",
//           description: "",
//         });
//       }
//     } else {
//       setCurrentSpell({
//         name: "",
//         description: "",
//       });
//     }
//     setLoading(false);
//   };

//   const onChangeHandler = (event) => {
//     const inputValue = event.target.value;
//     setInputValue(inputValue);
//     setDisplaySpell(inputValue);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [inputValue]);

//   return (
//     <section className="spells-wrapper">
//       <form onSubmit={formSubmit} className="input-container">
//         <h1>Enter incantation</h1>

//         <input
//           type="text"
//           value={inputValue}
//           onChange={(event) => onChangeHandler(event)}
//         />
//       </form>
//       <div className="result-spell-container">
//         {!loading && (
//           <div>
//             <h1>{currentSpell.name}</h1>
//             <p>{currentSpell.description}</p>
//           </div>
//         )}
//       </div>

//       <ul>
//         <li>
//           <Link to="/">Back to Hogwarts</Link>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Spells;
/* 









*/

// Kód s useCallback

// import { Link } from "react-router-dom";
// import { useState, useEffect, useCallback } from "react";
// import "./Spells.css";

// const Spells = () => {
//   const [displaySpell, setDisplaySpell] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(true);
//   const url = "https://hp-api.onrender.com/api/spells";
//   const [currentSpell, setCurrentSpell] = useState({
//     name: "Spell",
//     description: "description",
//   });

//   const formSubmit = (event) => {
//     event.preventDefault();
//     console.log("formulář odeslán");
//     const inputValue = event.target.value;
//     console.log(inputValue);
//     // setInputValue(inputValue);
//     // setDisplaySpell(inputValue);
//   };

//   const getSpell = useCallback(async () => {
//     const response = await fetch(url);
//     const data = await response.json();

//     const filteredSpells = data.filter((spell) =>
//       spell.name.toLowerCase().includes(displaySpell.toLowerCase())
//     );

//     if (filteredSpells.length > 0) {
//       const finalSpell = filteredSpells[0];
//       setCurrentSpell(finalSpell);
//     } else {
//       setCurrentSpell({
//         name: "Incantation not found",
//         description: "",
//       });
//     }
//     setLoading(false);
//   }, [displaySpell]);

//   const onChangeHandler = (event) => {
//     const inputValue = event.target.value;
//     setInputValue(inputValue);
//     setDisplaySpell(inputValue);
//   };

//   useEffect(() => {
//     setLoading(true);
//     const fetchData = async () => {
//       if (inputValue.trim() !== "") {
//         getSpell();
//       } else {
//         setCurrentSpell({
//           name: "",
//           description: "",
//         });
//       }
//     };

//     fetchData();
//   }, [getSpell, inputValue]);

//   return (
//     <section className="spells-wrapper">
//       <form onSubmit={formSubmit} className="input-container">
//         <h1>Enter incantation</h1>

//         <input
//           type="text"
//           value={inputValue}
//           onChange={(event) => onChangeHandler(event)}
//         />

//         <button>Find spell</button>
//       </form>
//       <div className="result-spell-container">
//         {!loading && (
//           <div>
//             <h1>{currentSpell.name}</h1>
//             <p>{currentSpell.description}</p>
//           </div>
//         )}
//       </div>

//       <ul>
//         <li>
//           <Link to="/">Back to Hogwarts</Link>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Spells;
