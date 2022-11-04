// import 'semantic-ui-css/semantic.min.css'
import { Form, Button} from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export default function Contact(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        alert("Message sent successfully!")
    }
    return (
        <main className="contact_page">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind.</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group multiple">
                    <div className="input-group">
                        <Form.Field>
                            <label htmlFor="first_name">First name</label>
                            <input type="text" placeholder="Enter your first name" id="first_name" {...register("firstName", { required: true})}/>
                        </Form.Field>
                        {errors.firstName && <p>Please enter first name</p>}
                    </div>
                    <div className="input-group">
                        <Form.Field>
                            <label htmlFor="last_name">Last name</label>
                            <input type="text" placeholder="Enter your last name" id="last_name" {...register("lastName", { required: true})}/>
                        </Form.Field>
                        {errors.lastName && <p>Please enter last name</p>}
                    </div>
                </div>
                <div className="form-group">
                    <Form.Field>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="yourname@email.com" id="email" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
                    </Form.Field>
                    {errors.email && <p>Please enter email</p>}
                </div>
                <div className="form-group">
                    <Form.Field>
                        <label htmlFor="message">Message</label>
                        <textarea placeholder="Send me a message and I'll reply you as soon as possible... " id="message" {...register("message", { required: true})}></textarea>
                    </Form.Field>
                    {errors.message && <p>Please enter a message</p>}
                </div>
                <div className="form-group">
                    <Form.Field>
                        <input type="checkbox" id="agreement" {...register("agreement", { required: true})}/> <label htmlFor="agreement" className="agreement"> &nbsp; You agree to providing your data to {props.name} who may contact you.</label>
                    </Form.Field>
                    {errors.agreement && <p>Please tick the box</p>}
                </div>
                <div className="form-group">
                    <Button type="submit" id="btn__submit">Send message</Button>
                </div>
            </Form>
        </main>
    )
}