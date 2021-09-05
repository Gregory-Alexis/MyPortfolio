import GoogleFont from "../../../assets/GoogleFont.png"
import React, { useState } from "react"

const GoogleFontProject = () => {
	const [detailsGoogleFront, setDetailsGoogleFront] = useState(false)

	const handleDetailsGoogleFront = () => {
		setDetailsGoogleFront(!detailsGoogleFront)
	}
	return (
		<div className="text-sm md:text-base lg:text-lg ">
			<div className="rounded-lg p-3 text-grey bg-lightgrey duration-300 transform hover:shadow-grey hover:scale-105 xl:w-5/6 xl:m-auto">
				<div className="mb-3 pb-3 border-b border-1 border-grey flex justify-between">
					<h3 className="text-xl">Google Fonts Project</h3>
					<a
						href="https://github.com/Westindiess/google-font-project"
						rel="noopener noreferrer"
						target="_blank"
					>
						<svg
							className=" w-8 h-8 stroke-current hover:stroke-lightblue"
							fill="#ccd6f6"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
							width="64px"
							height="64px"
						>
							<path d="M 31 2 C 15.011719 2 2 15.011719 2 31 C 2 43.648438 10.144531 54.425781 21.457031 58.378906 C 21.617188 58.492188 21.808594 58.5625 22.011719 58.566406 C 24.839844 59.492188 27.863281 60 31 60 C 46.988281 60 60 46.988281 60 31 C 60 15.011719 46.988281 2 31 2 Z M 31 4 C 45.886719 4 58 16.113281 58 31 C 58 42.660156 50.570313 52.613281 40.199219 56.386719 C 40.089844 56.0625 40 55.582031 40 55.253906 L 40 50 C 40 47.90625 38.976563 45.625 37.96875 44.09375 C 43.519531 43.15625 49.863281 40.277344 49.863281 29.53125 C 49.863281 26.585938 48.941406 23.988281 47.125 21.800781 C 47.523438 20.488281 48.015625 17.71875 46.640625 14.242188 C 46.53125 13.964844 46.300781 13.75 46.015625 13.65625 C 45.734375 13.570313 43.167969 12.902344 37.839844 16.398438 C 35.671875 15.839844 33.378906 15.550781 31 15.542969 C 28.632813 15.550781 26.335938 15.839844 24.175781 16.398438 C 18.847656 12.898438 16.273438 13.566406 15.996094 13.65625 C 15.710938 13.75 15.480469 13.964844 15.371094 14.242188 C 13.992188 17.722656 14.484375 20.488281 14.890625 21.800781 C 13.066406 23.988281 12.144531 26.585938 12.144531 29.53125 C 12.144531 40.179688 18.375 43.113281 23.878906 44.089844 C 23.1875 44.964844 22.460938 46.097656 22.140625 47.25 C 20.71875 47.644531 17.804688 47.65625 15.847656 44.304688 C 15.777344 44.175781 14.066406 41.136719 10.691406 40.902344 C 10.15625 40.90625 8.796875 40.992188 8.46875 42.03125 C 8.105469 43.183594 9.378906 44.058594 9.925781 44.429688 C 9.960938 44.453125 10.015625 44.484375 10.050781 44.503906 C 10.113281 44.535156 11.570313 45.300781 12.65625 48.035156 C 12.882813 48.75 14.871094 54.136719 22.007813 53.1875 C 22.011719 53.976563 22.007813 54.375 22 54.691406 L 22 55.25 C 22 55.574219 21.902344 56.0625 21.792969 56.378906 C 11.421875 52.605469 4 42.652344 4 31 C 4 16.113281 16.113281 4 31 4 Z M 30.757813 7.003906 C 26.859375 7.046875 23.003906 8.074219 19.609375 10.015625 C 19.128906 10.285156 18.960938 10.898438 19.234375 11.375 C 19.417969 11.699219 19.753906 11.882813 20.105469 11.882813 C 20.273438 11.882813 20.441406 11.839844 20.597656 11.75 C 24.734375 9.390625 29.617188 8.507813 34.339844 9.265625 C 34.882813 9.355469 35.394531 8.984375 35.484375 8.4375 C 35.570313 7.890625 35.199219 7.378906 34.65625 7.289063 C 33.363281 7.082031 32.058594 6.988281 30.757813 7.003906 Z M 38.65625 8.386719 C 38.269531 8.402344 37.90625 8.648438 37.765625 9.035156 C 37.570313 9.554688 37.832031 10.128906 38.351563 10.324219 C 39.0625 10.589844 39.765625 10.894531 40.453125 11.238281 C 40.597656 11.3125 40.75 11.347656 40.902344 11.347656 C 41.265625 11.347656 41.617188 11.148438 41.796875 10.796875 C 42.042969 10.308594 41.84375 9.703125 41.351563 9.453125 C 40.605469 9.078125 39.828125 8.738281 39.050781 8.449219 C 38.921875 8.402344 38.789063 8.382813 38.65625 8.386719 Z M 44.984375 15.546875 C 46.058594 18.707031 45.324219 20.996094 45.058594 21.644531 C 44.914063 22.003906 44.988281 22.414063 45.25 22.699219 C 46.980469 24.59375 47.859375 26.890625 47.859375 29.53125 C 47.859375 39.667969 41.851563 41.703125 35.96875 42.355469 C 35.574219 42.398438 35.242188 42.671875 35.125 43.050781 C 35.003906 43.429688 35.125 43.84375 35.425781 44.105469 C 36.214844 44.78125 38 47.714844 38 50 L 38 55.253906 C 38 55.273438 38.003906 56.144531 38.289063 56.992188 C 35.96875 57.644531 33.527344 58 31 58 C 28.46875 58 26.023438 57.640625 23.699219 56.988281 C 23.988281 56.136719 23.996094 55.265625 23.996094 55.25 L 24 54.714844 C 24.003906 54.261719 24.011719 53.648438 24 51.996094 C 23.996094 51.691406 23.859375 51.410156 23.625 51.21875 C 23.390625 51.03125 23.082031 50.960938 22.785156 51.023438 C 16.070313 52.488281 14.617188 47.640625 14.5625 47.4375 C 14.550781 47.402344 14.539063 47.371094 14.527344 47.335938 C 13.566406 44.898438 12.300781 43.65625 11.546875 43.09375 C 13.175781 43.667969 14.085938 45.257813 14.109375 45.292969 C 16.753906 49.820313 21.121094 49.9375 23.40625 48.914063 C 23.722656 48.773438 23.941406 48.480469 23.988281 48.140625 C 24.191406 46.710938 25.761719 44.820313 26.554688 44.125 C 26.851563 43.863281 26.96875 43.449219 26.847656 43.074219 C 26.730469 42.695313 26.402344 42.421875 26.011719 42.378906 C 20.144531 41.710938 14.144531 39.660156 14.144531 29.53125 C 14.144531 26.894531 15.023438 24.59375 16.761719 22.699219 C 17.023438 22.414063 17.097656 22.003906 16.949219 21.644531 C 16.683594 20.996094 15.945313 18.714844 17.015625 15.550781 C 17.867188 15.578125 19.941406 15.941406 23.433594 18.3125 C 23.675781 18.476563 23.984375 18.527344 24.265625 18.449219 C 26.355469 17.867188 28.6875 17.554688 31 17.542969 C 33.320313 17.554688 35.652344 17.867188 37.746094 18.449219 C 38.027344 18.527344 38.332031 18.476563 38.574219 18.3125 C 42.085938 15.929688 44.160156 15.574219 44.984375 15.546875 Z M 21.375 34.394531 C 20.984375 34.347656 20.589844 34.527344 20.386719 34.886719 L 19.386719 36.617188 C 19.109375 37.097656 19.273438 37.707031 19.75 37.984375 C 19.90625 38.074219 20.078125 38.117188 20.25 38.117188 C 20.59375 38.117188 20.929688 37.9375 21.113281 37.617188 L 22.113281 35.886719 C 22.390625 35.410156 22.230469 34.796875 21.75 34.519531 C 21.628906 34.453125 21.503906 34.410156 21.375 34.394531 Z M 40.625 34.394531 C 40.496094 34.410156 40.367188 34.453125 40.25 34.519531 C 39.769531 34.796875 39.609375 35.410156 39.886719 35.890625 L 40.886719 37.621094 C 41.070313 37.941406 41.40625 38.121094 41.75 38.121094 C 41.921875 38.121094 42.09375 38.074219 42.25 37.984375 C 42.730469 37.707031 42.890625 37.097656 42.613281 36.621094 L 41.613281 34.890625 C 41.40625 34.53125 41.011719 34.347656 40.625 34.394531 Z M 36.1875 36.34375 C 36.058594 36.324219 35.921875 36.332031 35.785156 36.371094 C 35.253906 36.511719 34.9375 37.058594 35.078125 37.59375 L 35.597656 39.527344 C 35.71875 39.972656 36.121094 40.265625 36.5625 40.265625 C 36.652344 40.265625 36.738281 40.253906 36.824219 40.234375 C 37.355469 40.089844 37.675781 39.542969 37.53125 39.007813 L 37.015625 37.078125 C 36.90625 36.675781 36.570313 36.398438 36.1875 36.34375 Z M 25.816406 36.34375 C 25.429688 36.398438 25.09375 36.675781 24.984375 37.078125 L 24.46875 39.011719 C 24.324219 39.542969 24.644531 40.089844 25.175781 40.234375 C 25.261719 40.257813 25.347656 40.265625 25.4375 40.265625 C 25.875 40.265625 26.28125 39.972656 26.402344 39.527344 L 26.921875 37.59375 C 27.0625 37.0625 26.746094 36.511719 26.214844 36.371094 C 26.078125 36.332031 25.945313 36.328125 25.816406 36.34375 Z M 31 37 C 30.445313 37 30 37.445313 30 38 L 30 40 C 30 40.554688 30.445313 41 31 41 C 31.554688 41 32 40.554688 32 40 L 32 38 C 32 37.445313 31.554688 37 31 37 Z" />
						</svg>
					</a>
				</div>
				<a
					href="https://google-font.netlify.app/"
					alt="image projet google font"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						src={GoogleFont}
						alt="google font project"
						className="h-48 object-cover mb-2 rounded-lg xl:h-full"
					/>
				</a>
				<div className="pt-2 ">
					<button
						className="border rounded-md p-1 font-bold hover:text-lightblue"
						onClick={handleDetailsGoogleFront}
					>
						Détails
					</button>
					{detailsGoogleFront && (
						<p className="pt-4">
							<small>
								Projet réalisé en formation. Les objectifs étaient de:
								<br />- Récupérer les données via l'API google font.
								<br />- Les Afficher dans des cartes avec le nom de la police,
								de son variant, de sa catégorie, l'aperçu et le lien direct vers
								la police sélectionnée.
								<br />
								- D'ajouter un filtre permettant de choisir entre les 10 polices
								les plus populaires, les plus récentes et les plus tendances.
								<br />- Pouvoir changer de texte dans la section 'Tapez votre
								text' et qu'il s'actualise en même temps dans les cartes.
								<br />- Intégrer une barre "range" qui augmente ou diminue la
								taille de la police.
							</small>
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default GoogleFontProject
