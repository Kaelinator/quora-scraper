# Quora Scraper
[![Build Status](https://travis-ci.org/Kaelinator/quora-scraper.svg?branch=master)](https://travis-ci.org/Kaelinator/quora-scraper)

Scrape Quora for a user's statistics and information!
I will try my best to keep up to date on Quora's ever-changing UI!

## Usage
```js
quora('Kael-Kirk')
	.then(console.log)
	.catch((err) => console.log('User not found!'))
```

#### yields
```js
{ 
  user: 'Kael Kirk',
  picture: 'https://qph.fs.quoracdn.net/main-thumb-110323423-200-xoeyjvjqbxviswiovjvldtobhaywqydo.jpeg',
  credential: '/kāl/ - Runner, developer, creator',
  answers: 73,
  questions: 22,
  posts: 6,
  blogs: 2,
  followers: 62,
  following: 38,
  topics: 74,
  edits: 757,
  knowsAbout:
   [ { topic: 'Computer Programming', answers: '13' },
     { topic: 'The High School Experience', answers: '12' },
     { topic: 'Coping with and Overcoming Fear', answers: '4' },
     { topic: 'Minecraft (video game)', answers: '3' },
     { topic: 'Attitude', answers: '3' } ],
  totalViews: 82000,
  monthlyViews: 1800 
}
```

## Development
```
NODE_ENVIRONMENT=dev node --trace-warnings index.js
```