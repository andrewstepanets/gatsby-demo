import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import logoIcon from '../images/my-logo.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    {/* Title / Logo area */}
      <div style={{ 
        display: 'flex',
         alignItems: 'center'
         }}>
        <img src={logoIcon} alt="My logo" style={{ width: '50px', margin: '0 20px 0 0' }}/>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
