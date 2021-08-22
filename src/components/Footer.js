const Footer = () => {
	return (
		<footer
			className="text-black text-center p-5 "
			style={{ backgroundColor: "#8892b0" }}
		>
			<div className=" shadow-white p-3 rounded-lg inline-block mb-5">
				<p>
					Ceci est la version 1.0 du site et il est toujours en cours de
					développement.
				</p>
				<br />
				<p>
					Vous pouvez consulter le code source{" "}
					<a
						href="https://github.com/Westindiess/MyPortfolio"
						className="underline hover:text-blue-300 "
					>
						ici
					</a>
					.
				</p>
			</div>
			<br />
			<p>
				Pour toute remarque ou suggèstion n'hésitez pas à me contacter via{" "}
				<a
					href="mailto:gregoryalexiss@gmail.com"
					className="underline hover:text-blue-300"
				>
					Email
				</a>{" "}
				ou{" "}
				<a
					href="https://github.com/Westindiess"
					className="underline hover:text-blue-300"
				>
					Github
				</a>
			</p>
			.
		</footer>
	)
}

export default Footer
