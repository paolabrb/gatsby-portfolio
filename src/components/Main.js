import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'


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

    let cardStyle = {
      backgroundColor: 'transparent', 
      textAlign: 'center', 
      border: 'transparent' 
    }


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
          <Accordion>
            <Card style={ cardStyle }>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="accordion-button">
                  Le Wagon Berlin
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{borderTop: '0.5px solid rgba(255,255,255,.3)'}}>
                <p style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Teaching Assistant | Berlin (DE) | Jan 2020 -</p>
                <p>Support the learning process of Le Wagon students, explaining new concepts and coding challenges.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={ cardStyle }>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1"  className="accordion-button">
                  Roland Berger GmbH
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body style={{borderTop: '0.5px solid rgba(255,255,255,.3)'}}>
                <p style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Team Personal Assistant | Berlin (DE) | Oct 2018 - Jul 2019</p>
                <p>High-level executive support for partners, principals and consultants in the financial services department.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={ cardStyle }>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2" className="accordion-button">
                  McDermott Will & Emery
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body style={{borderTop: '0.5px solid rgba(255,255,255,.3)'}}>
                  <p style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Executive Assistant | Milan (IT) | Feb 2016 - Sep 2017</p>
                  <p>High level executive support for partners and associate lawyers.</p>  
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
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
