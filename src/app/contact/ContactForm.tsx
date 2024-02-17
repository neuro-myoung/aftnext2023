'use client'
import styles from './contact.module.css'

type Data = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {

    async function handleSubmit(event: any) {
        event.preventDefault();

        
        const data:Data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            subject: String(event.target.subject.value),
            message: String(event.target.message.value),
        }

        const response = await fetch ("api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            console.log("Message sent successfully")
        }
        if(!response.ok) {
            console.log("Error sending message")
        }
    }

    return (
        <form className={styles.formBox} onSubmit={handleSubmit}>
            <div className={styles.formElement}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"  autoComplete="off" required/>
            </div>

            <div className={styles.formElement}>
                <label htmlFor="e-mail">E-mail</label>
                <input type="email" id="email"  autoComplete="off" required/>
            </div>

            <div className={styles.formElement}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject"  autoComplete="off"/>
            </div>

            <div className={styles.formElement}>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows={5} placeholder="Type your inquiry in here" required/>
                
            </div>
            <button type="submit" className={styles.sendButton}>Send Message</button>
        </form>

    )
}