import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <p>
            I have always been a very organized, structured individual. After my language and literature studies I held 
            administrative positions for more than two years, at top-tier professional services companies - I have learned to reliably perform under great pressure, to always strive 
            to deliver the best results, and how to take ownership and show initiative.           
          </p>
          <p>
            Looking for a new challenge, I completed Le Wagon Full Time Web Development Bootcamp in December 2019. The bootcamp confirmed my will to start a 
            new career in tech and taught me how to work with <strong>Ruby on Rails</strong>, <strong>JavaScript</strong>, <strong>HTML/(S)CSS/Bootstrap</strong> - together with <strong>Git/Github</strong> and databases like <strong>PostgreSQL/SQLite</strong>.
            The learning didn't stop with the bootcamp, though: I keep on training my RoR skills and learning more about <strong>React</strong> and <strong>Node.js</strong>. 
          </p>
          <p>
            Interested in some of my <a href="#work">work</a>?
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <div class="accordion" id="faq-accordion">

<h4 id="question-1" class="collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">How did you learn to code?</h4>
<p id="faq1" class="collapse" aria-labelledby="question-1" data-parent="#faq-accordion">I was always interested in programming, but didn't know where to start. I attended Le Wagon's full stack bootcamp in October 2019 in Berlin - that's how my coding journey began!</p>

<h4 id="question-2" class="collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="false" aria-controls="faq2">A bootcamp student? How much programming can you learn in just some weeks?</h4>
<p id="faq2" class="collapse" aria-labelledby="question-2" data-parent="#faq-accordion">I learned <strong>a lot</strong> during the bootcamp. I went from knowing basic css to building functioning apps with Rails in just nine weeks. It was just the beginning - I'm ready to learn more!</p>
<h4 id="question-3" class="collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="false" aria-controls="faq3">Alright - so you live in Germany. Can you speak German?</h4>
<p id="faq3" class="collapse" aria-labelledby="question-3" data-parent="#faq-accordion">My academic background is actually a linguistic one - I have studied German and Russian. I speak fluent German and some other languages, too! More on this in my <strong>CV</strong> 👇</p>
<h4 id="question-4" class="collapsed" data-toggle="collapse" data-target="#faq4" aria-expanded="false" aria-controls="faq4">Apart from code mastery - do you have any further skills?</h4>
<p id="faq4" class="collapse" aria-labelledby="question-4" data-parent="#faq-accordion">In a past professional life I was an Executive Assistant. I am a structured, organized and curious individual. I <strong>will</strong> deliver great results, be it under pressure or time constraints.</p>
</div>
          {close}
        </article>

        <article
          id="portfolio"
          className={`${this.props.article === 'portfolio' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
