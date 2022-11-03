import Header from "./Header"
export default function Home() {
    return (
        <>
            <Header/>
            <main>
            <div><a href="https://twitter.com/js_nerd">Twitter Link</a></div>
            <div><a href="https://books.zuri.team" id="books">Zuri Books</a></div>
            <div><a href="https://books.zuri.team/python-for-beginners?ref_id=js_nerd" id="book__python">Python Book</a></div>
            <div><a href="https://background.zuri.team" id="pitch">Background Check for Coders</a></div>
            <div><a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a></div>
            <div><a href="" id="contact">Contact Me</a></div>
            </main>
            <section className="social-section">
            <img src={require("../images/slack.png")} alt="slack icon"/>
            <img src={require("../images/github.png")} alt="github icon"/>
            </section>
        </>
    )
}