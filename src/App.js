
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="profile">
        <img src={require('./images/photo.JPG')} alt="James Ishaku photo" id="profile__img"/>
        <h3 id="twitter">James🎯</h3>
        <p id="slack">js_nerd</p>
      </header>
      <main>
          <a href="https://twitter.com/js_nerd">Twitter Link</a>
          <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
          <a href="https://books.zuri.team" id="books">Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=js_nerd" id="book__python">Python Book</a>
          <a href="https://background.zuri.team" id="pitch">Background Check for Coders</a>
          <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>
      </main>
      <section className="social-section">
      <img src={require("./images/slack.png")} alt="slack icon"/>
      <img src={require("./images/github.png")} alt="github icon"/>
      </section>
      <footer>
        <h4>Zuri<span>.</span>Internship</h4>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={require("./images/I4G.png")} alt="I4G logo"/>
      </footer>
    </div>
  );
}

export default App;
