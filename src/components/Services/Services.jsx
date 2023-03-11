import "./Services.css";

export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__inner">
          <ul className="services__list">
            <li className="services__item">
              <div className="services__box">
                <strong className="services__strong">
                  Yetkazib berish bepul
                </strong>
                100 000 so'mdan ortiq buyurtma berganingizda
              </div>
            </li>
            <li className="services__item">
              <div className="services__box">
                <strong className="services__strong">Tez to'lov</strong>
                100% xavfsiz to'lov
              </div>
            </li>
            <li className="services__item">
              <div className="services__box">
                <strong className="services__strong">Doimiy chegirmalar</strong>
                Ular allaqachon ishlamoqda
              </div>
            </li>
            <li className="services__item">
              <div className="services__box">
                <strong className="services__strong">Onlayn yordam</strong>
                Ish vaqti: 08:00 - 18:00
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
