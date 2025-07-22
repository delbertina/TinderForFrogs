import "./App.css";
import FrogCarousel from "./components/frog-carousel";
import FrogDetails from "./components/frog-details";
import FrogItem from "./components/frog-item";

function App() {
  return (
    <>
      <main className="tinderforfrogs">
        <section className="view view--swipelist">
          <header>
            <p>Tinder for Frogs</p>
            <p className="copyright">
              Forked from <a href="https://twitter.com/DasSurma">Surma</a> by{" "}
              <a href="https://github.com/delbertina">delbertina</a>, Code on{" "}
              <a href="https://github.com/delbertina/TinderForFrogs.com">
                GitHub
              </a>
            </p>
          </header>
          <FrogItem className="item item--next hidden" inmovable></FrogItem>
          <FrogItem className="item item--top"></FrogItem>
          <nav className="view--swipelist__controls">
            <button className="control control--small control--undo">
              <img src="/assets/left-arrow.svg" alt="left arrow" />
            </button>
            <button className="control control--big control--nope">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-50 -50 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <line x1="-15" y1="-15" x2="15" y2="15" />
                <line x1="15" y1="-15" x2="-15" y2="15" />
              </svg>
            </button>
            <button className="control control--big control--like">
              <img src="/assets/heart.svg" alt="heart" />
            </button>
            <button className="control control--small control--superlike">
              <img src="/assets/star.svg" alt="star" />
            </button>
          </nav>
        </section>
        <section className="view view--details hidden">
          <FrogDetails>
            <FrogCarousel></FrogCarousel>
            <section className="item__details">
              <span className="item__details__name"></span>,
              <span className="item__details__age"></span>
              <span className="item__details__job"></span>
              <span className="item__details__distance"></span>
            </section>
            <section className="description"></section>
          </FrogDetails>
          <nav className="view--details__controls">
            <button className="control control--big control--nope control--inverted"></button>
            <button className="control control--big control--superlike control--inverted"></button>
            <button className="control control--big control--like control--inverted"></button>
          </nav>
        </section>
      </main>
    </>
  );
}

export default App;
