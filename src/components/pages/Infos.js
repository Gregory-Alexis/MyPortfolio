import ReactIllu from "../../assets/react.svg"

const Infos = () => {
	return (
		<article
			className="font-bold min-h-screen p-8  md:p-32 "
			style={{
				fontFamily: "Fira code",
				color: "black",
			}}
		>
			<div
				className="justify-center flex flex-col text-sm "
				data-aos="flip-right"
			>
				<h1 className="text-center text-lg border-b-2 border-lightgreen text-purple ">
					À propos de moi
				</h1>

				<br />

				<p>
					Bonjour!, Je m'appelle Grégory, j'ai 34 ans, et je suis passionné
					depuis plus d'un an maintenant par le développement front-end. Après
					avoir passé ma vie à travailler dans différents domaines (Logistique,
					Hôtellerie, Animation...), j'étais à la recherche d'un nouveau
					challenge, quelque chose qui me passionne.
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
						className="text-purple underline hover:text-red-600"
					>
						Codecademy
					</a>
					,{" "}
					<a
						href="https://openclassrooms.com/fr/"
						className="text-purple underline hover:text-red-600"
					>
						OpenClassRoom
					</a>
					,{" "}
					<a
						href="https://www.freecodecamp.org/"
						className="text-purple underline hover:text-red-600"
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
						className="text-blue-800 underline hover:text-red-600"
					>
						Alyra
					</a>
					. Ce fut une magnifique expérience. Suite à cela, j'ai décidé de me
					lancer pleinement dans une carrière de développeur front-end React.
				</p>
				<div data-aos="flip-down">
					<img src={ReactIllu} alt="logo react" className="mt-12 pb-24" />
				</div>
			</div>
		</article>
	)
}

export default Infos
