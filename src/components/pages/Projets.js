import GoogleFont from "../../assets/GoogleFont.png"

const Projets = () => {
	return (
		<article
			className="lg:px-96 lg:py-32 flex justify-center"
			id="projets"
			style={{
				fontFamily: "Heebo",
				color: "#8892b0",
			}}
		>
			<div class=" w-full flex flex-wrap justify-center items-center gap-3 py-5 ">
				<div class="md:w-1/4 rounded p-3 text-grey   bg-lightgrey">
					<div class="mb-3 pb-3 border-b border-1 border-grey">
						<h3 class="text-xl font-semibold text-shadow">Alyra Google Font</h3>
					</div>
					<a
						href="https://google-font.netlify.app/"
						alt="image projet google font"
					>
						<img
							src={GoogleFont}
							alt="image1"
							class="w-full h-48 object-cover mb-2 "
						/>
						<p class="mb-3 tracking-wide text-base text-shadow">Projet</p>
						<button class="backdrop  border  px-3 py-1.5 rounded  text-lg">
							Detail
						</button>
					</a>
				</div>
			</div>
		</article>
	)
}

export default Projets
