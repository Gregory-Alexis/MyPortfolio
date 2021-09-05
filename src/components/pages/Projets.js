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
			className="py-48"
		>
			<h2
				className="pb-5 text-center text-xl border-b-2 text-lightblue md:text-3xl md:w-96 md:m-auto"
				style={{
					fontFamily: "Heebo",
					borderBottomColor: "#8892b0",
				}}
			>
				Mes projets
			</h2>
			<div className="pt-5  space-y-5 gap-5 md:pt-16 md:space-y-0  md:grid md:grid-cols-2 lg:px-10 xl:w-3/4 xl:m-auto">
				<GoogleFontProject />
				<StarWarsEathProject />
				<GradientsProject />
			</div>
		</article>
	)
}

export default Projets
