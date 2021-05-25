import React from 'react';
import { MenuItems } from "../MenuItems.js";
import logo from "../images/pizza-haket-logo01.png"
import $ from 'jquery';
class Header extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState( {clicked: !this.state.clicked})
  }

  componentDidMount() { 
    $(function() {
      let withScroll = $(".noscroll");
      $(window).scroll(function() {
          let scroll = $(window).scrollTop();
          if (scroll >= 200) {
              withScroll.removeClass('noscroll').addClass("withscroll");
          } else  {
              withScroll.removeClass("withscroll").addClass('noscroll');
          }
      });
  });
  }
  render () {
    return ( 
    <>
    <div id="home"></div>
    <header className="header">
      <nav className="NavbarItems noscroll">
      <img href="/#home" className="navbar-logo" src={logo} alt="pizza-haket-logo" />
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
    </>
  );
}
}

export default Header;