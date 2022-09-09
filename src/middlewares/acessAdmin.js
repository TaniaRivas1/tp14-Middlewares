const admin = ['greta', 'ada', 'tin', 'vim'];
const access = (req, res, next) => {

    if(!req.query.user){
        return res.redirect('/login')
    }

    if (admin.includes(req.query.user.toLowerCase())) {
        next()
    }
    return res.redirect('/no-entry')
}
module.exports = access