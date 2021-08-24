const NavBar = () => {
	return (
		<nav>
			<ul className="flex flex-col mt-2 md:flex-row md:mx-4 ">
				{/* "size-link-nav" style des îcones (insta, linkedin, git) sur la page d'acceuil (voir le fichier index.css) */}
				<li className="size-link-nav">
					<a href="" className="text-grey hover:text-lightblue">
						Acceuil
					</a>
				</li>
				<li className="size-link-nav">
					<a href="" className="text-grey hover:text-lightblue">
						À propos de moi
					</a>
				</li>
				<li className="size-link-nav">
					<a href="" className="text-grey hover:text-lightblue">
						Projets
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
