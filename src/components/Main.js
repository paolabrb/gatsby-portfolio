import PropTypes from 'prop-types'
import React from 'react'
import profilepic from '../images/profile-pic.jpg'
import aim from '../images/AIM.png'
import ll from '../images/LL.png'
import jw from '../images/JW.png'
import covidmaster from '../images/covidmaster.png'

import { Card, Button, Accordion, CardDeck } from 'react-bootstrap'

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
        {/* intro */}

        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={profilepic} alt="" />
          </span>
          <p className="small-description-text">
            Looking for a challenge, I completed Le Wagon Full Time Web Development Bootcamp in December 2019. The bootcamp confirmed my will to start a 
            new career in tech and taught me how to work with:
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="icon fa-angle-double-right"></i></span>Ruby on Rails</li>
              <li><span className="fa-li"><i className="icon fa-angle-double-right"></i></span>JavaScript (ES6)</li>
              <li><span className="fa-li"><i className="icon fa-angle-double-right"></i></span>HTML/(S)CSS/Bootstrap</li>
              <li><span className="fa-li"><i className="icon fa-angle-double-right"></i></span>Git/Github</li>
              <li><span className="fa-li"><i className="icon fa-angle-double-right"></i></span>PostgreSQL/SQLite</li>
            </ul> 
            The learning didn't stop with the bootcamp, though: I keep on training my RoR skills and diving into <strong>React</strong> and <strong>Node.js</strong>.
          </p>
          {close}
        </article>

        {/* previous work */}

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
          <p className="small-description-text">
            I have always been a very organized, structured individual. After my language and literature studies I held 
            administrative positions for more than two years, at top-tier professional services companies - I have learned to reliably perform under great pressure, to always strive 
            to deliver the best results, and how to take ownership and show initiative. Now I work as a <strong>freelance Web Developer</strong> and <strong>Translator/Localizator</strong>.           
          </p>
          <Accordion>
          <Card style={ cardStyle }>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="accordion-button">
                  TechLabs e.V.
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{borderTop: '0.5px solid rgba(255,255,255,.3)'}}>
                <p style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Web Developer | Berlin (DE) | Jul 2020 -</p>
                <p className="small-description-text">Work with the Website Team to improve and add new features to the <a href="https://www.techlabs.org/" target="_blank" rel="noopener noreferrer">TechLabs</a> website.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={ cardStyle }>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="accordion-button">
                  Le Wagon Berlin
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body style={{borderTop: '0.5px solid rgba(255,255,255,.3)'}}>
                <p style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Teaching Assistant | Berlin (DE) | Jan 2020 - Mar 2020</p>
                <p className="small-description-text">Support the learning process of Le Wagon students, explaining new concepts and coding challenges.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={ cardStyle }>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2"  className="accordion-button">
                  Roland Berger GmbH
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body style={{borderTop: '0.5px solid rgba(255,255,255,.3)'}}>
                <p style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Team Personal Assistant | Berlin (DE) | Oct 2018 - Jul 2019</p>
                <p className="small-description-text">High-level executive support for partners, principals and consultants in the financial services department.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={ cardStyle }>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3" className="accordion-button">
                  McDermott Will & Emery
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body style={{borderTop: '0.5px solid rgba(255,255,255,.3)'}}>
                  <p style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Executive Assistant | Milan (IT) | Feb 2016 - Sep 2017</p>
                  <p className="small-description-text">High level executive support for partners and associate lawyers.</p>  
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          {close}
        </article>

        {/* portfolio elements */}

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <CardDeck className="d-flex flex-wrap">
          <Card className="bg-dark text-white proj-card">
              <Card.Img src={jw}  alt="Card image" />
              <Card.ImgOverlay className="portfolio-card">
                <div className="portfolio-card-content">
                  <Card.Title><strong>
                    <a href="https://juliaweidner.netlify.app/" target="_blank" rel="noopener noreferrer">Julia Weidner</a></strong></Card.Title>
                  <Card.Text>
                  Portfolio Website for Julia Weidner, screenwriter based in Munich. Made with <strong>GatsbyJS</strong>, <strong>React</strong>.
                  </Card.Text>
                  {/* <a className="button special" href="https://www.juliaweidner.com/" target="_blank" rel="noopener noreferrer">Visit</a> */}
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white proj-card">
              <Card.Img src={covidmaster}  alt="Card image" />
              <Card.ImgOverlay className="portfolio-card">
                <div className="portfolio-card-content">
                  <Card.Title><strong>
                    <a href="https://covidmaster.netlify.app/" target="_blank" rel="noopener noreferrer">Covid-Master</a></strong></Card.Title>
                  <Card.Text>
                  Final and winner project for the #codeathome Bootcamp (TechLabs). Made with <strong>React</strong>.
                  </Card.Text>
                  {/* <a className="button special" href="https://www.juliaweidner.com/" target="_blank" rel="noopener noreferrer">Visit</a> */}
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white proj-card">
              <Card.Img src={aim}  alt="Card image" />
              <Card.ImgOverlay className="portfolio-card">
                <div className="portfolio-card-content">
                  <Card.Title><strong>
                    <a href="https://aimagency.herokuapp.com/" target="_blank" rel="noopener noreferrer">A I M</a>
                    </strong>
                  </Card.Title>
                  <Card.Text>
                  AIM connects influencers with campaigns for good causes. Final group project for Le Wagon (Batch#322). Made with <strong>Ruby on Rails</strong>, <strong>PostgreSQL</strong>.
                  </Card.Text>
                  {/* <a className="button special" href="https://aimagency.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit</a> */}
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white proj-card">
              <Card.Img src={ll}  alt="Card image" />
              <Card.ImgOverlay className="portfolio-card">
                <div className="portfolio-card-content">
                  <Card.Title><strong>
                    <a href="https://laenderliste.herokuapp.com/" target="_blank" rel="noopener noreferrer">Länderliste</a>
                    </strong>
                  </Card.Title>
                  <Card.Text>
                  Länderliste lets you keep track of your travels and compare your statistics with your family or friends. Made with <strong>Ruby on Rails</strong>, <strong>PostgreSQL</strong>.
                  </Card.Text>  
                  {/* <a className="button special" href="https://laenderliste.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit</a>   */}
                </div>               
              </Card.ImgOverlay>
            </Card>
          </CardDeck>
          {close}
        </article>

        {/* contact form and links  */}

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://getform.io/f/31138ca7-bcb5-4e5f-a028-f6e3cd6b7988">
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
              <a href="https://github.com/paolabrb" className="icon fa-github" target="_blank" rel="noopener noreferrer">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/paolabarboglio" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer">
                <span className="label">LinkedIN</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/paolabrbg/" className="icon fa-instagram" target="_blank" rel="noopener noreferrer">
                <span className="label">Instagram</span>
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
