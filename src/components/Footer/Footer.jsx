import logo_f from "./images/LOGO-f.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
import telegram from "./images/telegram.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import App_Store from "./images/App-Store.svg";
import Google_Play from "./images/Google-Play.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="site-footer-top">
        <div className="container">
          <div className="site-footer__inner">
            <Link to={"/"} className="logo_f">
              <img src={logo_f} alt="footer logo" width="91" height="39" />
            </Link>
            <ul className="site-footer__list footer__list">
              <li className="site-footer__item">
                <p className="footer__text">
                  Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar
                </p>
                <p className="footer__text">
                  Ish vaqti: Har kuni 8:00 dan 18:00 gacha
                </p>
                <ul className="site-footer__link footer__list">
                  <li>
                    <img src={facebook} alt="facebook" width="32" height="32" />
                  </li>
                  <li>
                    <img
                      src={instagram}
                      alt="instagram"
                      width="32"
                      height="32"
                    />
                  </li>
                  <li>
                    <img src={telegram} alt="telegram" width="32" height="32" />
                  </li>
                  <li>
                    <img src={youtube} alt="youtube" width="32" height="32" />
                  </li>
                </ul>
              </li>
              <li className="site-footer__item footer-item">Huquqiy</li>
              <li className="site-footer__item footer-img">
                Ilovani yuklab olish
                <img
                  src={Google_Play}
                  alt="Google_Play"
                  width="162"
                  height="48"
                />
                <img src={App_Store} alt="App_Store" width="162" height="48" />
              </li>
            </ul>
            <div className="footer-bottom footer__list">
              <ul className="footer__list footer-email">
                <li className="footer-email-item">E-mail</li>
                <li className="footer-email-item">
                  <Link
                    to={"mailto:info@mehrigiyo.uz"}
                    className="footer-email-link"
                  >
                    info@mehrigiyo.uz
                  </Link>
                </li>
              </ul>
              <ul className="footer__list footer-email">
                <li className="footer-email-item">Bizga qo'ng'iroq qiling</li>
                <li className="footer-email-item">
                  <Link
                    to={"tel:info@mehrigiyo.uz"}
                    className="footer-email-link"
                  >
                    +99898 125 31 03
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="container">
          <div className="site-footer-bottom-inner">
            <small className="small">
              © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. <br/> Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish
              majburiy.
            </small>
            <ul className="footer__list footer-bottom-li">
              <li><Link to={"#"} className="us">Bosh sahifa</Link></li>
              <li><Link to={"#"} className="us">Biz haqimizda</Link></li>
              <li><Link to={"#"} className="us">Yangiliklar</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
