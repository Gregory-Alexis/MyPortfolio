const Footer = () => {
	return (
		<footer className="pt-24 text-center text-sm md:text-base  text-grey">
			<div className="shadow-white p-3 rounded-lg inline-block mb-5">
				<p>
					Ceci est la version 1.0 du site et il est toujours en cours de
					développement.
				</p>
				<br />
				<p>
					Vous pouvez consulter le code source{" "}
					<a
						href="https://github.com/Westindiess/MyPortfolio"
						// "underlinelink" voir fichier app.css
						className="text-lightblue underlinelink"
						rel="noopener noreferrer"
						target="_blank"
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
					href="mailto:gregoryalexis.dev@gmail.com"
					className="text-lightblue underlinelink"
					rel="noopener noreferrer"
					target="_blank"
				>
					Email
				</a>{" "}
				ou{" "}
				<a
					href="https://github.com/Westindiess"
					className="text-lightblue underlinelink"
					rel="noopener noreferrer"
					target="_blank"
				>
					Github
				</a>
			</p>
		</footer>
	)
}

export default Footer
