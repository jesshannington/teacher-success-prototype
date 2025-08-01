//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const flash = require('connect-flash')
router.use(flash())

router.all('*', (req, res, next) => {
  res.locals.flash = req.flash('success') // pass through 'success' messages only
  next()
})


// Add your routes here



//cookies submit
router.post('/footer/cookies', (req, res) => {
    req.flash('success', 'Cookies preferences saved')
    res.redirect('/footer/cookies')
})

//give feedback submit
router.post('/footer/feedback', (req, res) => {
    req.flash('success', {
        title: 'Feedback submitted',
        detail: 'Your feedback will be used to improve this service.'
    })
    res.redirect('/footer/feedback')
})

//get support submit
router.post('/footer/support', (req, res) => {
    req.flash('success', {
        title: 'Support request submitted',
        detail: 'Your request for support has been submitted to our technical team. We will work to resolve your issue as soon as we can.'
    })
    res.redirect('/footer/support')
})
