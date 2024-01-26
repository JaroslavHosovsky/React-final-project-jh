import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Spells.css";

const Spells = () => {
  const [displaySpell, setDisplaySpell] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const url = "https://hp-api.onrender.com/api/spells";
  const [currentSpell, setCurrentSpell] = useState({
    name: "Spell",
    description: "description",
  });

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("formulář odeslán");
    const inputValue = event.target.value;
    console.log(inputValue);
    // setInputValue(inputValue);
    // setDisplaySpell(inputValue);
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    if (inputValue.trim() !== "") {
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
    } else {
      setCurrentSpell({
        name: "",
        description: "",
      });
    }
    setLoading(false);
  };

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setDisplaySpell(inputValue);
  };

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  return (
    <section className="spells-wrapper">
      <form onSubmit={formSubmit} className="input-container">
        <h1>Enter incantation</h1>

        <input
          type="text"
          value={inputValue}
          onChange={(event) => onChangeHandler(event)}
        />
      </form>
      <div className="result-spell-container">
        {!loading && (
          <div>
            <h1>{currentSpell.name}</h1>
            <p>{currentSpell.description}</p>
          </div>
        )}
      </div>

      <ul>
        <li>
          <Link to="/">Back to Hogwarts</Link>
        </li>
      </ul>
    </section>
  );
};

export default Spells;
/* 









*/
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
