export default function Contact() {
    return (
        <main className="contact_page">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind.</p>
            <form>
                <div className="form-group multiple">
                    <div className="input-group">
                        <label htmlFor="first_name">Full name</label>
                        <input type="text" placeholder="Enter your first name" id="first_name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" placeholder="Enter your last name" id="last_name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="yourname@email.com" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Send me a message and I'll reply you as soon as possible... " id="message"></textarea>
                </div>
                <div className="form-group">
                   <input type="checkbox" id="agreement"/> <label htmlFor="agreement" className="agreement"> &nbsp; You agree to providing your data to James Ishaku who may contact you.</label>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send message" id="btn_submit"/>
                </div>
            </form>
        </main>
    )
}