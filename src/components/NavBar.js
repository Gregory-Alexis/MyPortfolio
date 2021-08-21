const NavBar = () => {
	return (
		<nav>
			<ul className="flex flex-col mt-2 md:flex-row md:mx-4 ">
				<div style={{ borderBottomColor: "#00E4FA" }}>
					{/* "size-link-nav" style des îcones (insta, linkedin, git) sur la page d'acceuil (voir le fichier index.css) */}
					<li className="size-link-nav colorful-3 ">
						<span style={{ color: "#ccd6f6" }}>Acceuil</span>
					</li>
				</div>
				<div style={{ borderBottomColor: "#00E4FA" }}>
					<li className="size-link-nav colorful-3">
						<span style={{ color: "#ccd6f6" }}>À propos de moi</span>
					</li>
				</div>
				<div style={{ borderBottomColor: "#00E4FA" }}>
					<li className="size-link-nav colorful-3">
						<span style={{ color: "#ccd6f6" }}>Projets</span>
					</li>
				</div>
				<div style={{ borderBottomColor: "#00E4FA" }}>
					<li className="size-link-nav colorful-3">
						<span style={{ color: "#ccd6f6" }}>Expériences</span>
					</li>
				</div>
			</ul>
		</nav>
	)
}

export default NavBar
