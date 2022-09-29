import counter from "./counter.jpg";
const Header = () => {
  return (
    <header>
      <div className="image">
        <img src={counter} alt="false" />
      </div>
      <div className="header_a">
        <a href="2" className="a">
          Главное
        </a>
        <a href="2" className="a">
          О нас
        </a>
        <a href="2" className="a">
          Контакты
        </a>
      </div>
    </header>
  );
};

export default Header;
