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


// exports.newCandidatetDetails = functions.auth.user().onCreate((user) => {
//   const ref = admin.firestore().collection('users').doc(user.uid)
//   try {
//     ref.set({
//       email: user.email,
//       candidate_id: regIdGenerator(),
     
//     })
//   } catch (error) {
//     console.log(error.message)
//   }

//   return ref
// })



exports.candidateDeleted = functions.auth.user().onDelete((user) => {
  const doc = admin.firestore().collection('users').doc(user.uid)
  try {
    return doc.delete()
  } catch (error) {
    console.log(error.message)
  }
})
let generatedId = null
function regIdGenerator() {
  // Generate Applicant Random Id
  let text = 'ECHST-'
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  generatedId = text
  return text
}

exports.autoSendEmail = functions.firestore
  .document('users/{id}')
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `info@echst.com`,
      to: snap.data().email,
      subject: `2021/2022 Undergraduate Online Application Form`,
      html: `<h1>Egbian College of Science and Technology, Minna, Niger State, Nigeria </h1>
       <p>Candidate's Application Number: ${generatedId}</p>
        <a href='https://project-egbiancohst.web.app/admission/registration' target="_blank">
        Click Here to Login </a>`,
    }

    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error)
        return
      }
      console.log('Sent!')
    })
  })
