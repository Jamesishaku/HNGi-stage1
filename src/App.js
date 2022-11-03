
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="profile">
        <img src={require('./images/photo.JPG')} alt="James Ishaku" id="profile__img"/>
        <h3 id="twitter">James Ishaku</h3>
        <p id="slack">js_nerd</p>
      </header> */}
      {/* <main>
          <div><a href="https://twitter.com/js_nerd">Twitter Link</a></div>
          <div><a href="https://books.zuri.team" id="books">Zuri Books</a></div>
          <div><a href="https://books.zuri.team/python-for-beginners?ref_id=js_nerd" id="book__python">Python Book</a></div>
          <div><a href="https://background.zuri.team" id="pitch">Background Check for Coders</a></div>
          <div><a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a></div>
          <div><a href="#" id="contact">Contact Me</a></div>
      </main>
      <section className="social-section">
      <img src={require("./images/slack.png")} alt="slack icon"/>
      <img src={require("./images/github.png")} alt="github icon"/>
      </section> */}
      {/* <footer>
        <h3>Zuri<span className="red">.</span>Internship</h3>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={require("./images/I4G.png")} alt="I4G logo"/>
      </footer> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
