import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import netlifyIdentity from 'netlify-identity-widget'


import logoIcon from '../images/my-logo.png'


const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navlink' }
} 

const NavLink = props => <Link getProps={isActive} {...props} />

class Header extends React.Component {

  componentDidMount(){
    netlifyIdentity.init()
  }

  render() {

    const { siteTitle } = this.props

      return (
          <header
            style={{
              background: `rebeccapurple`,
              marginBottom: `1.45rem`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: `0 auto`,
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
                  <NavLink to="/">
                    {siteTitle}
                  </NavLink>
                </h1>
              </div>

              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/products">Store</NavLink>

              {/* Identity Netlify */}

              <div data-netlify-identity-menu />

              {/* Shopping Cart Summary */}
              <div style={{
                      color: 'white',
                      cursor: 'pointer'
                    }} 
                    className="snipcart-summary snipcart-checkout">
                <div><strong>My Cart</strong></div>
                <div>
                  <span style={{
                    fontWeight: 'bold'
                  }} className="snipcart-total-items">

                  </span>{" "}Items in Cart
                </div>
                <div>Total Price{' '}
                  <span style={{
                    fontWeight: 'bold'
                  }} className="snipcart-total-price"></span></div>
              </div>
            </div>
          </header>
          )
      }}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
