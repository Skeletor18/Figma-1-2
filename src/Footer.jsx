import counter from "./footer_counter.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_text">
        <img src={counter} alt="false" />
        <div>
          <a href="2" className="footer_a">
            Партнерам
          </a>
        </div>
        <div>
          <a href="2" className="footer_a">
            Разработчикам
          </a>
        </div>
        <div>
          <a href="2" className="footer_a">
            Вакансии
          </a>
        </div>
      </div>
      <div>ООО “интукод”, 2020г.</div>
    </footer>
  );
};

export default Footer;
