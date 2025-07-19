import './App.css'

function App() {

  return (
    <>
      <main class="tinderforfrogs">
  <section class="view view--swipelist">
    <header>
      <p>Tinder for Frogs</p>
      <p class="copyright">Forked from <a href="https://twitter.com/DasSurma">Surma</a> by <a href="https://github.com/delbertina">delbertina</a>, Code on <a href="https://github.com/delbertina/TinderForFrogs.com">GitHub</a></p>
    </header>
    <tinderforfrogs-item class="item item--next hidden" inmovable>
      <picture>
      </picture>
      <div class="item__details">
        <span class="item__details__name"></span>,
        <span class="item__details__age"></span>
        <span class="item__details__job"></span>
      </div>
    </tinderforfrogs-item>
    <tinderforfrogs-item class="item item--top">
      <picture>
        <div class="action action--nope">Nope</div>
        <div class="action action--like">Like</div>
        <div class="action action--superlike">Super<br>Like</div>
      </picture>
      <div class="item__details">
        <span class="item__details__name"></span>,
        <span class="item__details__age"></span>
        <span class="item__details__job"></span>
      </div>
    </tinderforfrogs-item>
    <nav class="view--swipelist__controls">
      <button class="control control--small control--undo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet">
          <path fill="none" d="
            M -15 0
            A 15 15 0 1 0 0 -15
          " />
          <path d="
            M 0 -15
            L 0 -22
            L -10 -15
            L 0 -8
            z
          " />
        </svg>
      </button>
      <button class="control control--big control--nope">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet">
          <line x1="-15" y1="-15" x2="15" y2="15" />
          <line x1="15" y1="-15" x2="-15" y2="15" />
        </svg>
      </button>
      <button class="control control--big control--like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 90" preserveAspectRatio="xMidYMid meet">
          <path d="
            M 0 15
            L -15 0
            A 10 10 0 1 1 0 -10
            A 10 10 0 1 1 15 0
            L 15 0
            z
          " />
        </svg>
      </button>
      <button class="control control--small control--superlike">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet">
          <path  d="
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
          " />
        </svg>
      </button>
    </nav>
  </section>
  <section class="view view--details hidden">
    <tinderforfrogs-details>
      <tinderforfrogs-carousel>
      </tinderforfrogs-carousel>
      <section class="item__details">
        <span class="item__details__name"></span>,
        <span class="item__details__age"></span>
        <span class="item__details__job"></span>
        <span class="item__details__distance"></span>
      </section>
      <section class="description">
      </section>
    </tinderforfrogs-details>
    <nav class="view--details__controls">
        <button class="control control--big control--nope control--inverted">
        </button>
        <button class="control control--big control--superlike control--inverted">
        </button>
        <button class="control control--big control--like control--inverted">
        </button>
      </nav>
  </section>
</main>
    </>
  )
}

export default App
