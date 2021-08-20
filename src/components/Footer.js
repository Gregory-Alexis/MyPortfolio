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
			<p>Pour toute remarque, faite le moi savoir via Email ou Github</p>
			<p>Ce site à été construit avec:</p>
			<div className="flex flex-row ">
				<img src={JSlogo} alt="logo javascript" />
				<img src={Reactlogo} alt="logo react" />
				<svg>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
						fill="#06B6D4"
					></path>
				</svg>
			</div>
		</footer>
	)
}

export default Footer
