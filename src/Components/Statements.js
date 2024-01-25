import "./Statements.css";
import allStatements from "../dataOfStatements";
import { useState, useLayoutEffect } from "react";

const Statements = () => {
  const [randomStatement, setRandomStatement] = useState(null);

  useLayoutEffect(() => {
    const randomIndex = Math.floor(Math.random() * allStatements.length);
    const statement = allStatements[randomIndex];
    setRandomStatement(statement);
  }, []);

  if (!randomStatement) {
    return <div>Loading...</div>;
  }

  const { id, name, quote } = randomStatement;

  return (
    <section className="statement-wrapper">
      <div key={id}>
        <h4>{name}</h4>
        <p>{quote}</p>
      </div>
    </section>
  );
};

export default Statements;
