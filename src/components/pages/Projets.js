import GoogleFontProject from "./Projets/GoogleFontProject"
import GradientsProject from "./Projets/GradientsProject"
import StarWarsEathProject from "./Projets/StarWarsEathProject"

const Projets = () => {
	return (
		<article
			id="projets"
			style={{
				fontFamily: "Heebo",
				color: "#8892b0",
			}}
			className="pt-24"
		>
			<h2
				className="text-center text-xl border-b-2 p-5 text-lightblue md:text-3xl"
				style={{
					fontFamily: "Heebo",
					borderBottomColor: "#8892b0",
				}}
			>
				Mes projets
			</h2>
			<div className="pt-5 space-y-5 md:space-y-0 gap-5 md:grid md:grid-cols-2">
				<GoogleFontProject />
				<StarWarsEathProject />
				<GradientsProject />
			</div>
		</article>
	)
}

export default Projets
