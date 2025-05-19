import { LOGO_URL } from "../utils/constant";
const Header = () => (
  <div className='header'>
    <img className='logo-contain' src={LOGO_URL}></img>
    <div className='navigation'>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>

  </div>
)
export default Header;