import React from "react"

const Projets = () => {
	return (
		<article
			className="font-bold p-8"
			style={{
				fontFamily: "Fira code",
				color: "#8892b0",
			}}
		>
			<div className="justify-center flex flex-col text-sm md:text-base pb-24">
				<h1
					className="text-center text-lg border-b-2 border-lightgreen text-lightgreen md:text-2xl"
					style={{
						fontFamily: "Inter",
					}}
				>
					Mes Projets
				</h1>
				<br />
				<p className="text-center">COMING SOON</p>
			</div>
		</article>
	)
}

export default Projets
