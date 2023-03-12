import "./Companies.css";
import grandpharm from "./images/Grandpharm.svg";
import Asklepiy from "./images/Asklepiy.svg";
import Dori_Darmon from "./images/Dori_Darmon.svg";
import Nicofarm from "./images/Nicofarm.svg";
import laxisam from "./images/laxisam.svg";
import jayxun from "./images/jayxun-logo.svg";

export const Companies = () => {
  return (
    <section className="companies">
      <div className="container">
        <div className="companies__inner">
          <ul className="companies__list">
            <li className="companies__item">
              <img
                src={grandpharm}
                alt="logo companies"
                width="218"
                height="50"
              />
            </li>
            <li className="companies__item">
              <img
                src={Asklepiy}
                alt="logo companies"
                width="164"
                height="40"
              />
            </li>
            <li className="companies__item">
              <img
                src={Dori_Darmon}
                alt="logo companies"
                width="105"
                height="73"
              />
            </li>
            <li className="companies__item">
              <img
                src={Nicofarm}
                alt="logo companies"
                width="164"
                height="40"
              />
            </li>
            <li className="companies__item">
              <img src={laxisam} alt="logo companies" width="150" height="50" />
            </li>
            <li className="companies__item">
              <img src={jayxun} alt="logo companies" width="125" height="54" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
