import Header from "./components/Header"
import "../src/App.css"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
	return (
		<>
			<section style={{ backgroundColor: "#0a192f" }}>
				<Header />
				<div className="flex justify-center items-center min-h-screen block">
					<Home />
				</div>
			</section>

			<Footer />
		</>
	)
}

export default App
