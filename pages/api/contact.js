import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) => {

    const {name, email, subject, message} = req.body

    const data = {
        name, email, subject, message
    }

    const transporter = nodemaler.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: process.env.user,
            pass: process.env.pass,
        }
    })

    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Could not send the email. Your message was not sent.",
        })
    }

    return res.status(200).json({message: "success"})
}