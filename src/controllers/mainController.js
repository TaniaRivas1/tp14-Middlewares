module.exports = {
    index: (req, res) =>{
        res.render('index')
    },
    about: (req, res) =>{
        res.render('about')
    },
    login: (req, res) =>{
        res.render('login')
    },
    admin: (req, res) =>{
        return res.render('admin', {admin: req.query.user})
    },
    contact: (req, res) =>{
        res.render('contact')
    },
    noEntry: (req, res) =>{
        res.render('noEntry')
    }
}