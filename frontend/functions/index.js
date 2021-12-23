/* eslint-disable */

const functions = require('firebase-functions')
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin')
admin.initializeApp()
const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'soliualley@gmail.com',
    pass: 'twxtzvnisdelgwug',
  },
})
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const regIdGenerator = () => {
  // Generate Applicant Random Id
  let text = 'ECHST-'
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}
exports.candidateDeleted = functions.auth.user().onDelete((user) => {
  const doc = admin.firestore().collection('users').doc(user.uid)
  try {
    return doc.delete()
  } catch (error) {
    console.log(error.message)
  }
})

// exports.autoSendEmail = functions.auth.user().onCreate((user) => {
//   // const doc = admin.firestore().collection('users').doc(user.uid)
//   const autoGeneratedID = regIdGenerator()
//   // doc.add({
//   //   regId: autoGeneratedID,
//   // })
//   const mailOptions = {
//     from: `info@echst.com`,
//     to: user.email,
//     subject: `2021/2022 Undergraduate Online Application Form`,
//     html: `<h3>Egbian College of Science and Technology, Minna, Niger State, Nigeria </h3>
//      <p>Candidate's Application Number: ${autoGeneratedID}</p>
//       <a href='https://project-egbiancohst.web.app/admission/registration' target="_blank">
//       Click Here to Login </a>`,
//   }

//   return transporter.sendMail(mailOptions, (error, data) => {
//     if (error) {
//       console.log(error)
//       return
//     }
//     console.log('Sent!')
//   })
// })
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {

const doc = admin.firestore().collection('users').doc(user.uid)
  const autoGeneratedID = regIdGenerator()
doc.update({
    regId: autoGeneratedID,
  })
 
  const mailOptions = {
    from: `info@echst.com`,
    to: user.email,
    subject: `2021/2022 Undergraduate Online Application Form`,
    html: `<h3>Egbian College of Science and Technology, Minna, Niger State, Nigeria </h3>
     <p>Candidate's Application Number: ${autoGeneratedID}</p>
      <a href='https://project-egbiancohst.web.app/admission/login' target="_blank">
      Click Here to Login </a>`,
  }

  return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log(error)
      return
    }
    console.log('Sent!')
  })

});