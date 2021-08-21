import ReactIllu from "../../assets/react.svg"

const Infos = () => {
	return (
		<article
			className="font-bold min-h-screen p-8 lg:grid lg:grid-cols-2 lg:p-32 "
			style={{
				fontFamily: "Fira code",
			}}
		>
			<div className=" text-sm md:text-base xl:text-2xl " data-aos="flip-right">
				<h1
					className="text-center text-lg border-b-2  p-5 md:text-2xl lg:text-2xl xl:text-4xl"
					style={{
						fontFamily: "Inter",
					}}
				>
					À propos de moi
				</h1>

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
					<span className="text-yellow-500">HTML</span>,
					<span className="text-blue-600"> CSS</span> et{" "}
					<span className="text-yellow-300">Javascript</span>) via différentes
					plateformes comme (
					<a
						href="https://www.codecademy.com/"
						className="text-blue-800 underline hover:text-blue-300"
					>
						Codecademy
					</a>
					,{" "}
					<a
						href="https://openclassrooms.com/fr/"
						className="text-blue-800 underline hover:text-blue-300"
					>
						OpenClassRoom
					</a>
					,{" "}
					<a
						href="https://www.freecodecamp.org/"
						className="text-blue-800 underline hover:text-blue-300"
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
						className="text-blue-800 underline hover:text-blue-300"
					>
						Alyra
					</a>
					. Ce fut une magnifique expérience. Suite à cela, j'ai décidé de me
					lancer pleinement dans une carrière de développeur front-end React.
				</p>
			</div>
			<div data-aos="flip-down" className="pt-8  m-auto md:w-3/4 lg:w-auto  ">
				<img src={ReactIllu} alt="logo react" />
			</div>
		</article>
	)
}

export default Infos
