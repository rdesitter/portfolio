const express = require('express')
const router = express.Router()
const getPortfolios = require('../controllers/portfolios')
const getPortfolio = require('../controllers/portfolio')


router.get('/portfolio/', function (req, res) {
	const {id} = req.query
	const portfolioData = getPortfolio(id)
	if (!portfolioData) {
		res.status(400).send('Not found.')
	} else {
		res.send({ portfolioData })
	}

	

	
})

router.get('/portfolios', function (req, res, next) {
	const portfolioItems = getPortfolios()
	res.send({ portfolioItems })
	console.log(res)
})

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Raphael Desitter' })
})

module.exports = router
