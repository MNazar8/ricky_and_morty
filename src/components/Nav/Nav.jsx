import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from './Nav.module.css'

const Nav = ({ onSearch, setAccess }) => {
    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <button className={styles.aboutButton}>
                <NavLink to='/about'>About</NavLink>
            </button>

            <button className={styles.homeButton}>
                <NavLink to='/home'>Home</NavLink>
            </button>
            <button>
                <NavLink to='/favorites'>Favorite</NavLink>
            </button>
            <button onClick={handleLogOut}>LOG OUT</button>
        </nav>
    )
}

export default Nav;