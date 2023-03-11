import "./Questions.css"
import Accordion from "./Accordion";

export const Questions = () => {
  return (
    <section className="questions">
      <div className="container">
        <div className="questions__inner">
          <h2 className="questions__title">Ko’p so'raladigan savollar</h2>
          <div className="questions__heading">
            <p className="questions__text">
              Qo'shimcha ma'lumot uchun biz bilan bog'laning
            </p>
          </div>
          <div className="question__content">
            <button className="question__btn">Batafsil</button>
            <div className="questions__list">
              <Accordion/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
