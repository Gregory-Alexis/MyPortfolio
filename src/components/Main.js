import Infos from "./pages/Infos"
import Intro from "./pages/Intro"
import Projets from "./pages/Projets"

const Main = () => {
	return (
		<section style={{ backgroundColor: "#1e0045" }}>
			<Intro />
			<Infos />
			<Projets />
		</section>
	)
}

export default Main
