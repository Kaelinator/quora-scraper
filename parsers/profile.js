'use strict'
const cheerio = require('cheerio')

const echo        = label => data => console.log(label, data) || data
const getData     = tag => ((tag.html()) ? childData(tag[0]) : null)
const isSpan      = tag => tag.name == 'span'
const childData   = tag => tag.children[0].data
const splitify    = data => data.split(' ')[0]

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

		user: getData($('span.user')),
		picture: $('img.profile_photo_img')[0].attribs.src || null,
		credential: getData($('span.UserCredential.IdentityCredential')),
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
			.filter(isSpan)
			.map(childData)
			// .map(echo('Pre split:'))
			.map(splitify)
			.map(unabbreviate)

		profile['totalViews'] = metrics[0]
		profile['monthlyViews'] = metrics[1]
	} else {

		profile['totalViews'] = null
		profile['monthlyViews'] = null
	}

	return profile
}
