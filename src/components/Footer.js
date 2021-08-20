import React from "react"
import JSlogo from "../assets/javascript.png"
import Reactlogo from "../assets/react.png"

const Footer = () => {
	return (
		<footer
			className="text-white text-center p-5 "
			style={{ backgroundColor: "#0a192f" }}
		>
			<h4>
				Ceci est la version 1.0 du site et est toujours en cours de
				développement
			</h4>
			<p className="mb-5">Vous pouvez consulter le code source ici</p>
			<p>
				Pour toute remarque, suggèstion n'hésitez pas à me contacter via Email
				ou Github
			</p>
		</footer>
	)
}

export default Footer
