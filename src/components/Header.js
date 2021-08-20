import "./Header.css"
import Hero from "./Hero"
import NavBar from "./NavBar"
import ToggleButton from "./ToggleButton"
import ToggleNavbar from "./ToggleNavbar"

const Header = ({ handleToggleButton, width, toggle }) => {
	return (
		<header className="flex px-4 py-5  justify-between shadow-md md:flex">
			<Hero />
			<ToggleButton
				handleToggleButton={handleToggleButton}
				width={width}
				toggle={toggle}
			/>
			{width > 768 && <NavBar />}
			{toggle && <ToggleNavbar toggle={toggle} />}
		</header>
	)
}

export default Header
