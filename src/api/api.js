const apps = [
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
    "outlook": 2,
    "description": "Google's attempt at a minimal email client for shakers and movers. Its in the midst of an existential crisis as email powerusers find it lacking.",
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
