import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <ul>
            <li><NavLink class="active" to="/">Home</NavLink></li>
            <li><NavLink to="/users">User</NavLink></li>
            <li><NavLink to="/book">Book</NavLink></li>

        </ul>

    )

}
export default Header