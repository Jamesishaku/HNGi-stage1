import {Link} from 'react-router-dom'
import Header from "./Header"
export default function Home(props) {
    return (
        <>
            <Header name={props.name} />
            <main>
            <div className='link_container'><a href="https://twitter.com/js_nerd">Twitter Link</a></div>
            <div className='link_container'><a href="https://books.zuri.team" id="books">Zuri Books</a></div>
            <div className='link_container'><a href="https://books.zuri.team/python-for-beginners?ref_id=js_nerd" id="book__python">Python Book</a></div>
            <div className='link_container'><a href="https://background.zuri.team" id="pitch">Background Check for Coders</a></div>
            <div className='link_container'><a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a></div>
            <div className='link_container'><Link to="/contact" id="contact">Contact Me</Link></div>
            </main>
            <section className="social-section">
            <img src={require("../images/slack.png")} alt="slack icon"/>
            <img src={require("../images/github.png")} alt="github icon"/>
            </section>
        </>
    )
}