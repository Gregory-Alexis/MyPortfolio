import ReactIllu from "../../assets/react.svg"

const Infos = () => {
	return (
		<article
			className="font-bold min-h-screen p-8  md:p-32 "
			style={{
				fontFamily: "Fira code",
				color: "#8892b0",
			}}
		>
			<div
				className="justify-center flex flex-col text-sm"
				data-aos="flip-right"
			>
				<h1 className="text-center text-lg border-b-2 border-lightgreen text-lightgreen ">
					Mes Informations
				</h1>

				<br />

				<p>
					Bonjour!, je m'appelle Grégory, j'ai 34 ans, et je suis passionné
					depuis plus d'un an maintenant par le développement front-end. Après
					avoir passé ma vie à travailler dans différent domaines (Logistique,
					Hôtellerie, Animation...), j'étais à la recherche d'un nouveau
					challenge, quelque chose qui me passionne.
				</p>

				<br />
				<p>
					C'est au début de l'année 2020 que j'ai découvert le développement web
					commencé, ça cette aventure en apprenant les bases (
					<span className="text-yellow-600">HTML</span>,
					<span className="text-blue-500"> CSS</span> et{" "}
					<span className="text-yellow-300">Javascript</span>) via différente
					plateformes comme (
					<a
						href="https://www.codecademy.com/"
						className="text-lightgreen underline hover:text-red-600"
					>
						Codecademy
					</a>
					,{" "}
					<a
						href="https://openclassrooms.com/fr/"
						className="text-lightgreen underline hover:text-red-600"
					>
						OpenClassRoom
					</a>
					,{" "}
					<a
						href="https://www.freecodecamp.org/"
						className="text-lightgreen underline hover:text-red-600"
					>
						FreeCodeCamp
					</a>
					...).
				</p>

				<br />
				<p>
					Après plusieurs mois, je me suis sentis prêt pour intégrer une
					formation dans le but d'aller plus loin dans mon apprentissage, et
					c'est ainsi, qu'a démarré mon aventure au sein de la formation Alyra.
					Ce fut une magnifique expérience et suite à cela, j'ai décidé de me
					lancer pleinement dans une carrière de déveleppeur front-end React.
				</p>
			</div>
			<div data-aos="flip-down">
				<img src={ReactIllu} alt="logo react" className="mt-12" />
			</div>
		</article>
	)
}

export default Infos
