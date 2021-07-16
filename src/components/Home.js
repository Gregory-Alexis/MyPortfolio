import Instalogo from "../assets/insta.png"
import Linkelogo from "../assets/linkedin.png"
import Gitlogo from "../assets/github.png"

const Home = () => {
	return (
		<main className=" mx-8  flex items-start flex-col">
			<h1
				className="text-normal mb-3 ml-1 md:text-lg"
				style={{
					fontFamily: "Inter",
					color: "#a569ff",
				}}
			>
				Bonjour, je m'appelle
			</h1>

			<div
				className=" text-4xl font-bold mb-3 md:text-6xl"
				style={{ fontFamily: "Poppins", color: "#ccd6f6" }}
			>
				<p>Grégory Alexis.</p>
			</div>
			<div
				className="text-4xl font-bold mb-4 md:text-6xl"
				style={{ fontFamily: "Poppins", color: "#8892b0" }}
			>
				<p>Développeur junior React.</p>
			</div>
			<div
				className="text-1xl font-bold mb-3 md:text-2xl"
				style={{
					fontFamily: "Fira code",
					color: "#8892b0",
				}}
			>
				<p className="tracking-wider">
					Passioné par le développement Front-End
				</p>
			</div>
			<div className="flex mt-2">
				<a href="https://www.instagram.com/westindies_9712/?hl=fr">
					<img
						src={Instalogo}
						alt="instagram "
						className="w-9 md:w-auto hover:relative bottom-2"
					/>
				</a>
				<a href="https://www.linkedin.com/in/gr%C3%A9gory-alexis-57a21a202/">
					<img
						src={Linkelogo}
						alt="linkedin"
						className="ml-4 w-9 md:w-auto hover:relative bottom-2"
					/>
				</a>
				<a href="https://github.com/Westindiess">
					<img
						src={Gitlogo}
						alt="github"
						className="ml-4 w-9 md:w-auto hover:relative bottom-2"
					/>
				</a>
			</div>

			<div>
				<button
					type="button"
					className=" border-2 flex justify-start mt-8 text-sm rounded-lg md:text-base hover:bg-blue-700 hover:bg-opacity-25 transition duration-500 ease-out p-2"
					style={{ color: "#a569ff", borderColor: "#a569ff" }}
				>
					<a
						href="mailto:gregoryalexiss@gmail.com"
						className="no-underline p-2 font-bold "
						style={{
							color: "#a569ff",
							letterSpacing: "2px",
							fontFamily: "Inter",
						}}
					>
						Contactez Moi
					</a>
				</button>
			</div>
		</main>
	)
}

export default Home
