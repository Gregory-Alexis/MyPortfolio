const NavBar = () => {
	return (
		<nav>
			<ul className="flex flex-col mt-2 md:flex-row md:mx-4 ">
				{/* "size-link-nav" style des îcones (insta, linkedin, git) sur la page d'acceuil (voir le fichier index.css) */}
				<li className="size-link-nav colorful-3 ">
					<span style={{ color: "#ccd6f6" }}>Acceuil</span>
				</li>
				<li className="size-link-nav colorful-3">
					<span style={{ color: "#ccd6f6" }}>À propos de moi</span>
				</li>
				<li className="size-link-nav colorful-3">
					<span style={{ color: "#ccd6f6" }}>Projets</span>
				</li>
				<li className="size-link-nav colorful-3">
					<span style={{ color: "#ccd6f6" }}>Expériences</span>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
