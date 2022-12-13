import sendEmail from "../../lib/mail";

export default async function handler (req, res) {
    const message = {
        to: 'oleksandra.ukr2016@gmail.com',
        subject: 'Лист з коворкінгу',
        text: `Ім'я: ${req.body.name}
        Телефон: ${req.body.mail}`
    };
    sendEmail(message);
    console.log(message);
    res.send('Thank you');
}