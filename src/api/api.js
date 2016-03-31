import request from 'superagent'

const apps = [
  {
    "name": "Gmail",
    "popularity": 1,
    "status": 1,
    "outlook": 2,
    "description": "In a surprise move, Google has started moving people over to Inbox, a much less powerful app that was seen as another Google experiment.\n\n Source: [Forbes' Gordon Kelly](http://www.forbes.com/sites/gordonkelly/2015/12/05/google-ending-gmail/)",
    "slug": "Gmail"
  },
  {
    "name": "Search",
    "popularity": 1,
    "status": 1,
    "outlook": 1,
    "description": "About 70% of Google's revenue is still from Search alone.",
    "slug": "Search"
  },
  {
    "name": "Earth",
    "popularity": 1,
    "status": 1,
    "outlook": 2,
    "description": "Mostly replaced by web maps, but lives on as a Pro version for special uses.",
    "slug": "Earth"
  },
  {
    "name": "Youtube",
    "popularity": 1,
    "status": 1,
    "outlook": 1,
    "description": "Youtube was aquired by Google and still works somewhat independently. While nearly unchallenged in video hosting, YouTube has failed to produce revenue in the order Google expected. Multiple efforts have been made to monetize features, such as movie rentals, a music service and Youtube Red, all with so far little uptake.",
    "slug": "Youtube"
  },
  {
    "name": "Android",
    "popularity": 1,
    "status": 1,
    "outlook": 1,
    "description": "While despised by many, Android is installed on too many devices for anyone to ignore, especially Google.",
    "slug": "Android"
  },
  {
    "name": "Blogger",
    "popularity": 2,
    "status": 1,
    "outlook": 2,
    "description": "This outmoded Google service was redesigned fairly recently, suggesting it'll be kept alive. But so did Reader before it was shuttered.",
    "slug": "Blogger"
  },
  {
    "name": "Drive",
    "popularity": 2,
    "status": 1,
    "outlook": 1,
    "description": "This iCloud-like service replaced Google Docs, so is probably doing OK.",
    "slug": "Drive"
  },
  {
    "name": "Glass",
    "popularity": 2,
    "status": 2,
    "outlook": 3,
    "description": "Glass is hard to pin down. It never really left the beta. Google moved the project elsewhere, saying it 'graduated', but most press reported this as a closure.",
    "slug": "Glass"
  },
  {
    "name": "Buzz",
    "popularity": 2,
    "status": 3,
    "outlook": 3,
    "description": "Buzz was one of Google's first experiments in 'bundling', AKA forcing services on people without permission. Google shut it down the following year after unanimous criticism.",
    "slug": "Buzz"
  },
  {
    "name": "Wave",
    "popularity": 2,
    "status": 3,
    "outlook": 3,
    "description": "Despite enormous applause during it's reveal, and feverish pursuit of the beta invites, Wave got little love from Google itself and shut it down after just 15 months.",
    "slug": "Wave"
  },
  {
    "name": "Quickoffice",
    "popularity": 2,
    "status": 3,
    "outlook": 3,
    "description": "Apparently rolled into Docs\/Drive.",
    "slug": "Quickoffice"
  },
  {
    "name": "Plus",
    "popularity": 2,
    "status": 2,
    "outlook": 2,
    "description": "Another social app forced on many Google users and to a lot of criticism. Plus features are gradually being stripped as the service is talked about less and less by Google.",
    "slug": "Plus"
  },
  {
    "name": "Inbox",
    "popularity": 2,
    "status": 1,
    "outlook": 1,
    "description": "This somewhat lacking email app is the new replacement for Gmail.",
    "slug": "Inbox"
  },
  {
    "name": "Sparrow",
    "popularity": 3,
    "status": 3,
    "outlook": 3,
    "description": "Sparrow was an email app for iOS and Mac that Google bought in 2012 and shut down in early 2015.",
    "slug": "Sparrow"
  },
  {
    "name": "Picasa",
    "popularity": 2,
    "status": 2,
    "outlook": 3,
    "description": "Google announced February 12th that it is shutting down Picasa. \n\n Source: [Times of India](http://timesofindia.indiatimes.com/tech/tech-news/Google-is-shutting-down-Picasa/articleshow/50972397.cms), [Google](http://googlephotos.blogspot.com/2016/02/moving-on-from-picasa.html)",
    "slug": "Picasa"
  },
  {
    "name": "Picasa Web Albums",
    "popularity": 2,
    "status": 2,
    "outlook": 3,
    "description": "Main page now redirects to Google Plus, copyright date and site design haven't changed since 2011.",
    "slug": "Picasa-Web-Albums"
  },
  {
    "name": "Panoramio",
    "popularity": 2,
    "status": 2,
    "outlook": 3,
    "description": "To be merged with Google Maps at an unspecified date.",
    "slug": "Panoramio"
  },
  {
    "name": "Goo.gl",
    "popularity": 2,
    "status": 1,
    "outlook": 2,
    "description": "Google's URL shortening service. Interface has not been updated to new Plus\/Material design and still uses Google's old serif logo.",
    "slug": "Googl"
  },
  {
    "name": "Sites",
    "popularity": 2,
    "status": 1,
    "outlook": 2,
    "description": "A website creation tool, formerly known as JotSpot. Popularity has been declining recently due to blogging platforms such as Tumblr and WordPress.",
    "slug": "Sites"
  },
  {
    "name": "Project Ara",
    "popularity": 3,
    "status": 2,
    "outlook": 2,
    "description": "Ara is Google's modular phone project. Shown in 2014 and given a deadline of 2015, Ara was instead delayed until 2016. The original design used magnets but Google said they scrapped that design because it did not pass a drop test. Similar phones have already been brought to market by others.",
    "slug": "Project-Ara"
  },
  {
    "name": "Google TV",
    "popularity": 2,
    "status": 2,
    "outlook": 3,
    "description": "This platform used by Sony and Logitech saw little movement after it's launch in 2010 and Google now has 2 other TV platforms to look after: Android TV and Chromecast.",
    "slug": "Google-TV"
  },
  {
    "name": "Nexus Q",
    "popularity": 3,
    "status": 3,
    "outlook": 3,
    "description": "Another of Google's in-home devices, which lasted only 5 months. Also evidence of just how poorly they manage the Nexus brand name.",
    "slug": "Nexus-Q"
  },
  {
    "name": "Chrome OS",
    "popularity": 3,
    "status": 2,
    "outlook": 3,
    "description": "Despite a high, often-touted Amazon sales rank, this web-based OS has only grabbed 0.1% of U.S. web traffic. Google has announced Chrome OS efforts will be applied towrds Android, with the press considering this a shut down.",
    "slug": "Chrome-OS"
  },
  {
    "name": "Dodgeball",
    "popularity": 3,
    "status": 3,
    "outlook": 3,
    "description": "This precursor to Foursquare somehow failed to grow at Google but did well on it's own.",
    "slug": "Dodgeball"
  },
  {
    "name": "Currents",
    "popularity": 3,
    "status": 3,
    "outlook": 3,
    "description": "RIP.",
    "slug": "Currents"
  },
  {
    "name": "Orkut",
    "popularity": 3,
    "status": 3,
    "outlook": 3,
    "description": "This Facebook clone was quite popular in India, but shut down around the time of Google Plus.",
    "slug": "Orkut"
  },
  {
    "name": "Open ID 2.0",
    "popularity": 3,
    "status": 2,
    "outlook": 3,
    "description": "Google is ending its Open ID service to trick people into using Google Plus.",
    "slug": "Open-ID-20"
  },
  {
    "name": "Fonts",
    "popularity": 3,
    "status": 1,
    "outlook": 1,
    "description": "If you ever notice a web page that loads, but for a few seconds doesn't display text, that's because the site probably uses Google Fonts. The service is filled with thousands of fonts, all of which are available to use for free by any budding web designer. However, very few fonts offered are attractive, let alone designed for use on computer screens.",
    "slug": "Fonts"
  },
  {
    "name": "Google Helpouts",
    "popularity": 3,
    "status": 3,
    "outlook": 3,
    "description": "A person-to-person help servie shut down on 4\/20 2015.",
    "slug": "Google-Helpouts"
  },
  {
    "name": "Code",
    "popularity": 3,
    "status": 2,
    "outlook": 3,
    "description": "Google suggests people migrate to Github.",
    "slug": "Code"
  },
  {
    "name": "Verily",
    "popularity": 3,
    "status": 2,
    "outlook": 2,
    "description": "Verily is Google's life sciences division. At one point they boasted they wanted to solve aging. Now though, most employees have quit because working with CEO Andrew Conrad is so toxic.\n\n http://www.statnews.com/2016/03/28/google-life-sciences-exodus/",
    "slug": "Verily"
  },
  {
    "name": "Boston Dynamics",
    "popularity": 3,
    "status": 3,
    "outlook": 3,
    "description": "Boston Dynamics was purchased to make up Google's robotics effort. However, leaked emails show that after BD developed humanoid-looking robots, Google put BD back up for sale to avoid questsions about robots replacing humans and taking human jobs. Was the Boston Dynamics purchase just a way to get press?\n \n http://www.bloomberg.com/news/articles/2016-03-17/google-is-said-to-put-boston-dynamics-robotics-unit-up-for-sale",
    "slug": "Boston-Dynamics"
  },
  {
    "name": "Nest",
    "popularity": 2,
    "status": 2,
    "outlook": 2,
    "description": "Nest was a team of former-Apple employees who set out to make connected home devices. After being bought by Google, Nest has released little to no new products. There are reports of mass exodus back to Apple, infighting and another toxic leader, Tony Fadell.\n \n https://www.theinformation.com/inside-tony-fadells-struggle-to-build-nest?unlock=b218ed",
    "slug": "Nest"
  }
]

export function getApps () {
  return new Promise( (resolve) => {
    return resolve({
      apps: apps
    })
  })
}

export function getDetails (slug) {
  return new Promise( ( resolve, reject ) => {
    if (!slug) reject( new Error("That app wasn't found.") )

    const details = apps.filter( a => {
      if (a.slug.toLowerCase() === slug.toLowerCase()) {
        return a
      }
    })

    if (typeof app === undefined ) reject( new Error("That app wasn't found.") )

    return resolve({
      details: details[0]
    })
  })
}

export const login = (credentials) => (
  new Promise( (resolve, reject) => {
    request
      .post(process.env.API_URL + '/api/users/login')
      .set('Accept', 'application/json')
      .send({
        email: credentials.email,
        password: credentials.password
      })
      .then( (response, error) => {
        if (error) reject(error)

        resolve({
          user: {
            ...response.body
          }
        })
      })
  })
)

export const postUser = (credentials) => (
  new Promise( (resolve, reject) => {
    request
      .post(process.env.API_URL + '/api/users/signup')
      .set('Accept', 'application/json')
      .send({
        email: credentials.email,
        password: credentials.password,
        name: credentials.name
      })
      .then( (response, error) => {
        if (error) reject(error)

        resolve({
          user: {
            ...response.body
          }
        })
      })
  })
)

export const getUser = () => (
  new Promise( (resolve, reject) => {
    request
      .get( process.env.API_URL + '/api/users/user')
      .set('token', window.localStorage.token)
      .send()
      .then( (response, error) => {
        if (error) reject(error)

        resolve({
          user: response.body
        })
      })
  })
)

export const getComments = (slug) => (
  new Promise( (resolve, reject) => {
    request
      .get( process.env.API_URL + '/api/threads/' + slug.toLowerCase() )
      .set('Accept', 'application/JSON')
      .send()
      .then( (response, error) => {
        if (error) reject(error)

        resolve({
          comments: response.body
        })
      })
  })
)

export const postThread = (data, slug) => (
  new Promise( (resolve, reject) => {
    request
      .post( process.env.API_URL + '/api/thread/' + slug.toLowerCase() )
      .set('token', window.localStorage.token)
      .send({
        body: data.body,
        title: data.title
      })
      .then( (response, error) => {
        if (error) reject(error)

        resolve()
      })
  })
)

export const postReply = (data) => (
  new Promise( (resolve, reject) => {
    request
      .post( process.env.API_URL + '/api/reply/' + data.thread )
      .set('token', window.localStorage.token)
      .send({
        body: data.body,
        parent: data.parent,
        thread: data.thread
      })
      .then( (response, error) => {
        if (error) reject(error)

        resolve(response)
      })
  })
)

export const postUserEvent = (data) => (
  new Promise( (resolve, reject) => {
    request
      .post( process.env.API_URL + '/api/user/event/' + data.user.slug )
      .set('token', window.localStorage.token)
      .send({
        body: data.body,
        type: data.type,
        active: data.active
      })
      .then( (response, error) => {
        if (error) return reject(error)

        resolve(response)
      })
  })
)
