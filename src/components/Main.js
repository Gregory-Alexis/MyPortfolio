import Infos from "./pages/Infos"
import Intro from "./pages/Intro"
import Projets from "./pages/Projets"

const Main = () => {
	return (
		<section>
			<div style={{ backgroundColor: "#1e0045" }}>
				<Intro />
			</div>

			<div style={{ backgroundColor: "#8892b0" }}>
				<Infos />
			</div>
			<div style={{ backgroundColor: "#1e0045" }}>
				<Projets />
			</div>
		</section>
	)
}

export default Main
