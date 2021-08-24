import Hero from "./Hero"
import NavBar from "./NavBar"
import ToggleButton from "./ToggleButton"
import ToggleNavbar from "./ToggleNavbar"

export const Header = ({ handleToggleButton, width, toggle }) => {
	return (
		<header className="flex top px-4 py-5 justify-between shadow-md md:flex">
			<Hero />
			<ToggleButton
				handleToggleButton={handleToggleButton}
				width={width}
				toggle={toggle}
			/>
			{width > 768 && <NavBar />}
			{toggle && <ToggleNavbar handleToggleButton={handleToggleButton} />}
		</header>
	)
}

export default Header
