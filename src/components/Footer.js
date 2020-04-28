import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Based on <a href="https://github.com/codebushi/gatsby-starter-dimension" target="_blank" rel="noopener noreferrer">Gatsby Starter - Dimension</a>.</p>
        <p className="copyright">Background image © <a href="https://unsplash.com/photos/yACpBcInUos" target="_blank" rel="noopener noreferrer">Gareth Harper</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
