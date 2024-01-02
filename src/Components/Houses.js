import "./Houses.css";
import Gryffindor from "../images/Gryffindor.png";
import Hufflepuff from "../images/Hufflepuff.png";
import Ravenclaw from "../images/Ravenclaw.png";
import Slytherin from "../images/Slytherin.png";

const Houses = () => {
  return (
    <section className="houses-wrapper">
      <div className="all-houses">
        <h1>Hogwarts Houses</h1>
        <div className="grid-container">
          <div className="house-container">
            <img src={Gryffindor} alt="" />
            <h2>Gryffindor</h2>
            <p>Founder: Godric Gryffindor </p>
          </div>
          <div className="house-container">
            <img src={Hufflepuff} alt="" />
            <h2>Hufflepuff</h2>
            <p>Founder: Helga Hufflepuff</p>
          </div>
          <div className="house-container">
            <img src={Ravenclaw} alt="" />
            <h2>Ravenclaw</h2>
            <p>Founder: Rowena Ravenclaw</p>
          </div>
          <div className="house-container">
            <img src={Slytherin} alt="" />
            <h2>Slytherin</h2>
            <p>Founder: Salazar Slytherin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Houses;
