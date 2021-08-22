import ReactIllu from "../../assets/react.svg"

const Infos = () => {
	return (
		<article
			className="font-bold min-h-screen p-8 lg:grid lg:grid-cols-2 lg:p-32"
			style={{
				fontFamily: "Fira code",
			}}
		>
			<div
				className="text-sm md:text-base lg:text-lg"
				data-aos="flip-right"
				style={{ color: "#8892b0" }}
			>
				<h2
					className="text-center text-xl border-b-2 p-5 text-lightblue md:text-2xl lg:text-2xl xl:text-3xl"
					style={{
						fontFamily: "Inter",
					}}
				>
					À propos de moi
				</h2>

				<br />

				<p>
					Bonjour!, Je m'appelle Grégory et je suis passionné depuis plus d'un
					an maintenant par le développement front-end. Après avoir passé ma vie
					à travailler dans différents domaines (Logistique, Hôtellerie,
					Animation...), j'étais à la recherche d'un nouveau challenge, quelque
					chose qui me passionne.
				</p>
				<br />
				<p>
					C'est au début de l'année 2020 que j'ai découvert le développement web
					et j'ai donc décidé commencé cette aventure en apprenant les bases (
					<span>HTML</span>,<span> CSS</span> et <span>Javascript</span>) via
					différentes plateformes comme (
					<a
						href="https://www.codecademy.com/"
						className="text-lightblue  underline hover:text-red"
						rel="noopener noreferrer"
						target="_blank"
					>
						Codecademy
					</a>
					,{" "}
					<a
						href="https://openclassrooms.com/fr/"
						className="text-lightblue  underline hover:text-red"
						rel="noopener noreferrer"
						target="_blank"
					>
						OpenClassRoom
					</a>
					,{" "}
					<a
						href="https://www.freecodecamp.org/"
						className="text-lightblue  underline hover:text-red"
						rel="noopener noreferrer"
						target="_blank"
					>
						FreeCodeCamp
					</a>
					...).
				</p>
				<br />
				<p>
					Après plusieurs mois, je me suis senti prêt pour intégrer une
					formation dans le but d'aller plus loin dans mon apprentissage, et
					c'est ainsi, qu'à démarré mon aventure au sein de la formation{" "}
					<a
						href="https://alyra.fr/"
						className=" underline text-lightblue hover:text-red"
						rel="noopener noreferrer"
						target="_blank"
					>
						Alyra
					</a>
					. Ce fut une magnifique expérience. Suite à cela, j'ai décidé de me
					lancer pleinement dans une carrière de développeur front-end React.
				</p>
			</div>
			<div data-aos="flip-down" className="pt-8  m-auto md:w-3/4 md:h-3/4   ">
				<img src={ReactIllu} alt="logo react" width="900" height="900" />
			</div>
		</article>
	)
}

export default Infos
