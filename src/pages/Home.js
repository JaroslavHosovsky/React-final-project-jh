import { Link } from "react-router-dom";
import Statements from "../Components/Statements";
import Houses from "../Components/Houses";
import HouseDescription from "../Components/HouseDescription";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <header>
        <div className="header-wrapper">
          <h1>Welcome to Hogwarts</h1>
          <p>School of Witchcraft and Wizardry</p>
          <Statements />
        </div>
      </header>

      <Houses />
      <HouseDescription />

      <footer className="footer-wrapper">
        <ul>
          <li>
            <Link to="/spells">List of incantations</Link>
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default Home;
