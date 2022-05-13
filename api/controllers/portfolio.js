const portfolioData = require('../models/portfolio')

function getPortfolio(num) {
	return portfolioData.find(portfolio => portfolio.id === parseInt(num))	
}

module.exports = getPortfolio
