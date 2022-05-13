const portfolioData = require('../models/portfolio')

function getPortfolios() {
	return portfolioData.map(({ id, isActive, title, slide, url, imgURL, bgURL, tags, theme }) => ({
		id,
		isActive, 
		title, 
		slide,
		url,
		imgURL,
		bgURL,
		tags,
		theme
	}))
}

module.exports = getPortfolios
