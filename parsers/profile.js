'use strict'
const cheerio = require('cheerio')

const getData = (tag) => ((tag.html()) ? tag[0].children[0].data : null)

const abbreviations = {

	'k': 1000,
	'm': 1000000,
	'b': 1000000000,
	't': 1000000000000
}

const unabbreviate = (num) => {

	const suffix = Object.keys(abbreviations)
		.filter((abbr) => (num.substr(-1) === abbr))

	return (suffix) ? parseFloat(num) * abbreviations[suffix] : parseInt(num)
}

exports.profile = (body) => {

	const $ = cheerio.load(body)

	const profile = {

		user: getData($('span.user')) || null,
		picture: $('img.profile_photo_img')[0].attribs.src || null,
		credential: getData($('span.UserCredential.IdentityCredential')) || null
	}

	/* Feeds */
	$('.list_count').toArray()
		.forEach((x) => {

			const key = x.prev.data.trim().toLowerCase()
			const value = parseInt(x.children[0].data.replace(',', ''))

			profile[key] = value
		})

	/* Credentials & Highlights */
	const views = $('div.AnswerViewsAboutListItem.AboutListItem')
	if (views.html()) {

		const metrics = views[0].children
			.filter((tag) => tag.name == 'span')
			.map((tag) => tag.children[0].data)
			.map((data) => data.split(' ')[0])
			.map(unabbreviate)

		profile['totalViews'] = metrics[0]
		profile['monthlyViews'] = metrics[1]
	} else {

		profile['totalViews'] = null
		profile['monthlyViews'] = null
	}

	return profile
}
