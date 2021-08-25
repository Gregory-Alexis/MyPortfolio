import Instalogo from "../../assets/insta.svg"
import Linkelogo from "../../assets/linkedin.svg"
import Gitlogo from "../../assets/github.svg"

const Intro = () => {
	return (
		// "acceuil" style de la page d'acceuil + filtre blur en arrière plan lors d'un clique sur le toggle boutton sur Smartphone
		<main className="acceuil min-h-screen" id="intro">
			{/* "data-aos" est un plugin permettant certaines animation type fade, zoom (https://michalsnik.github.io/aos/)
			 */}
			<div data-aos="zoom-out">
				<h1
					className="mb-3 md:text-base lg:text-lg xl:text-xl"
					style={{
						fontFamily: "Inter",
						color: "#00e1ff",
					}}
				>
					Bonjour, je m'appelle
				</h1>
				<div
					className=" text-3xl font-bold mb-3 md:text-5xl lg:text-6xl xl:text-7xl"
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
					className=" font-bold mb-6 text-lg md:text-xl lg:text-2xl xl:text-3xl"
					style={{
						fontFamily: "Fira code",
						color: "#8892b0",
					}}
				>
					<p className="tracking-wider">
						Passioné par le développement Front-End
					</p>
				</div>
				<div className="flex mb-6">
					<nav>
						<a
							href="https://www.instagram.com/greg_9712/?hl=fr"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								src={Instalogo}
								alt="instagram"
								className="intro-icons-style"
								width="40"
								height="40"
							/>
						</a>
					</nav>
					<nav>
						<a
							href="https://www.linkedin.com/in/gr%C3%A9gory-alexis-57a21a202/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								src={Linkelogo}
								alt="linkedin"
								// "intro-icons-style" style des icones sur la page d'acceuil (voir fichier index.css)
								className="intro-icons-style ml-4"
								width="40"
								height="40"
							/>
						</a>
					</nav>
					<nav>
						<a
							href="https://github.com/Westindiess"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								src={Gitlogo}
								alt="github"
								className="intro-icons-style ml-4"
								width="40"
								height="40"
							/>
						</a>
					</nav>
				</div>
				<div>
					<button
						type="button"
						// "contact-button" style 'effet de zoom' du boutton 'Contactez Moi'  sur la page d'acceuil lors d'un hover (voir fichier index.css)
						className="contact-button"
						style={{ borderColor: "#00e1ff" }}
					>
						<a
							href="mailto:gregoryalexis.dev@gmail.com"
							className="no-underline lg:px-5 lg:py-1"
							style={{
								color: "#00e1ff",
								fontFamily: "Inter",
							}}
							rel="noopener noreferrer"
							target="_blank"
						>
							Contactez Moi
						</a>
					</button>
				</div>
			</div>
			<div className="absolute bottom-0 animate-bounce text-lightblue">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					className="bi bi-arrow-down"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
					/>
				</svg>
			</div>
		</main>
	)
}

export default Intro
