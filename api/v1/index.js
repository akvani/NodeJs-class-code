// Export all Modules
// Users
// Contact

const router= require('express').Router();


router.use('/user', require('./users'))
// router.use('/contact', require('./contact'))

module.exports= router;