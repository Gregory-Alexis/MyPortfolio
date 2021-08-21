const ToggleNavbar = () => {
	return (
		<div>
			<nav
				/* "animate-right-to-left" le déroulement vers la gauche de la NavBar lors d'un click sur le toggle button via Smartphone. 
            Petit soucis, le déroulement inverse ne se fait pas. (voir le fichier tailwind.config.js) */
				className="fixed right-0 top-0 flex h-screen items-center w-64 z-10 animate-right-to-left "
				style={{ color: "#ccd6f6", backgroundColor: "#1e0045" }}
			>
				<ul className=" flex flex-col mt-2  md:flex-row text-2xl  w-screen">
					<div
						// "green-bg-link" le style des liens (Acceuil, Infos, Projet, Exp)  sur petit écran (voir fichier index.css)
						className="blue-bg-link "
					>
						<li className=" my-5 md:mr-4 ">
							<span>Acceuil</span>
						</li>
					</div>
					<div className="blue-bg-link">
						<li className="my-5 md:mr-4">
							<span>À propos de moi</span>
						</li>
					</div>
					<div className="blue-bg-link">
						<li className="my-5 md:mr-4">
							<span href="projets">Projets</span>
						</li>
					</div>
					<div className="blue-bg-link">
						<li className="my-5">
							<a href="expèriences">Expériences</a>
						</li>
					</div>
				</ul>
			</nav>
		</div>
	)
}

export default ToggleNavbar
