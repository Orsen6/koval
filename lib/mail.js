import mailer from 'nodemailer';


const smtpTransport = mailer.createTransport({
    service: 'gmail',
    port: 8000,
    secure: false,
    auth: {
        user: 'orsenkul@gmail.com',
        pass: 'umpgawgquaumxyxh'
    },
    tls: {rejectUnauthorized: false},
}, {
    from: 'Cowork <orsenkul@gmail.com>'
});

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function(error, info) {
        if(error){
            console.log(error)
        } else {
            console.log('succesfuly', info)
        }
        smtpTransport.close()
    })
}

export default sendEmail;