import Instalogo from "../../assets/insta.png"
import Linkelogo from "../../assets/linkedin.png"
import Gitlogo from "../../assets/github.png"

const Intro = () => {
	return (
		// "acceuil" style de la page d'acceuil + filtre blur en arrière plan lors d'un clique sur le toggle boutton sur Smartphone
		<main className= "acceuil ">
			{/* "animate-fade-in-down" style permettant le fade-in de la page d'acceuil lorsque celle-ci est chargé
			 */}
			<div className="animate-fade-in-down">
				<h1
					className="mb-3 ml-1 md:text-base lg:text-lg xl:text-xl"
					style={{
						fontFamily: "Inter",
						color: "#64ffda",
					}}
				>
					Bonjour, je m'appelle
				</h1>
				<div
					className=" text-3xl font-bold mb-3  md:text-5xl lg:text-6xl xl:text-7xl"
					style={{ fontFamily: "Poppins", color: "#ccd6f6" }}
				>
					<p>Grégory Alexis.</p>
				</div>
				<div
					className="text-3xl font-bold mb-4 md:text-5xl lg:text-6xl xl:text-7xl"
					style={{ fontFamily: "Poppins", color: "#8892b0" }}
				>
					<p>Développeur junior React.</p>
				</div>
				<div
					className=" font-bold mb-3 text-lg md:text-xl lg:text-2xl xl:text-3xl"
					style={{
						fontFamily: "Fira code",
						color: "#8892b0",
					}}
				>
					<p className="tracking-wider">
						Passioné par le développement Front-End
					</p>
				</div>
				<div className="flex mt-2">
					<nav>
						<a href="https://www.instagram.com/greg_9712/?hl=fr">
							<img
								src={Instalogo}
								alt="instagram "
								className="w-9 md:w-auto hover:relative bottom-2"
							/>
						</a>
					</nav>
					<nav>
						<a href="https://www.linkedin.com/in/gr%C3%A9gory-alexis-57a21a202/">
							<img
								src={Linkelogo}
								alt="linkedin"
								className="ml-4 w-9 md:w-auto hover:relative bottom-2"
							/>
						</a>
					</nav>
					<nav>
						<a href="https://github.com/Westindiess">
							<img
								src={Gitlogo}
								alt="github"
								className="ml-4 w-9  bottom-2 hover:relative  md:w-auto"
							/>
						</a>
					</nav>
				</div>

				<div>
					<button
						type="button"
						// "contact-button" style 'effet de zoom' du boutton 'Contactez Moi'  sur la page d'acceuil lors d'un hover (voir fichier index.css)
						className="contact-button"
						style={{ color: "00E4FA", borderColor: "#64ffda" }}
					>
						<a
							href="mailto:gregoryalexiss@gmail.com"
							className="no-underline font-bold lg:p-1"
							style={{
								color: "#64ffda",
								letterSpacing: "2px",
								fontFamily: "Inter",
							}}
						>
							Contactez Moi
						</a>
					</button>
				</div>
			</div>
		</main>
	)
}

export default Intro
