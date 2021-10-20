import BreakingBadProject from "./Projets/BreakingBadProject"
import GoogleFontProject from "./Projets/GoogleFontProject"
import GradientsProject from "./Projets/GradientsProject"
import MovieProject from "./Projets/MovieProject"
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
			{/* "project-section-style" mise en forme global de la section "projet" */}
			<section className="project-section-style">
				<GoogleFontProject />
				<StarWarsEathProject />
				<GradientsProject />
				<MovieProject />
				<BreakingBadProject />
			</section>
		</article>
	)
}

export default Projets
