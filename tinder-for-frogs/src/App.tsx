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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-50 -50 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="none"
                  d="
            M -15 0
            A 15 15 0 1 0 0 -15
          "
                />
                <path
                  d="
            M 0 -15
            L 0 -22
            L -10 -15
            L 0 -8
            z
          "
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-50 -50 100 90"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="
            M 0 15
            L -15 0
            A 10 10 0 1 1 0 -10
            A 10 10 0 1 1 15 0
            L 15 0
            z
          "
                />
              </svg>
            </button>
            <button className="control control--small control--superlike">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-50 -50 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="
            M 0.000 10.000
            L 11.756 16.180
            L 9.511 3.090
            L 19.021 -6.180
            L 5.878 -8.090
            L 0.000 -20.000
            L -5.878 -8.090
            L -19.021 -6.180
            L -9.511 3.090
            L -11.756 16.1805
            z
          "
                />
              </svg>
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
