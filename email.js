const sendEmail = (emails) => {
        for (let email of emails) {
            console.log(email.email, ' + ', email.message)
        }
    }

module.exports = sendEmail