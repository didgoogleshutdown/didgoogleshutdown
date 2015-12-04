import React from 'react';

export default class About extends React.Component {
  render () {
    return (
    <div className="container">
      <h1>About me.</h1>
      This site is by someone who was a Google fan from 2007 until 2011, but was disatisfied by Google's scatterbrained attention span and frequent product discontinuations.
      <br/><br/>
      Some people will accuse me of "not understanding Google". Actually, I understand the theory. I am looking at the empircal evidence. Does Google's "fail until it works" philosphy actually make things that work?
      <br/><br/>
      The other issue, is what effect does this have on users? Is it respectful of a user's time to release products before they are finished with no commitment to support them?
      <br/><br/>
      It's become my opinion that companies have a responsibility to release only what they intend to support. It's their responsibility to test whether the product is sustainable before launch, not after.
      <br/><br/>
      If you like this site and want more added, or more sites like it, please <a href="https://www.patreon.com/pleasurekevin">donate to my Patreon here</a>.
    </div>
    )
  }
}
