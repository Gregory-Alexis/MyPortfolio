module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			borderColor: (theme) => ({
				purplerain: "#0c0036",
				lightblue: "#00e1ff",
			}),
			boxShadow: {
				white: "0 1px 3px 1px rgba(255, 255, 255)",
			},
			backgroundColor: (theme) => ({
				lightblue: "#00e1ff",
				purplerain: "#0c0036",
				pink: "##9e004a",
				grey: "#ccd6f6",
			}),

			textColor: {
				lightblue: "#00e1ff",
				purplerain: "#0c0036",
				red: "#ff0000",
				blue: "#001dbf",
				grey: "#ccd6f6",
				pink: "##9e004a",
			},
			keyframes: {
				"right-to-left": {
					"0%": {
						transform: "translateX(200px)",
					},
				},
				"left-to-right": {
					"100%": {
						transform: "translateX(-200px)",
					},
				},
			},
			animation: {
				"right-to-left": "right-to-left 0.2s ease",
				"left-to-right": "left-to-right 0.3s ease",
			},
		},
	},
	variants: {
		extend: {
			position: [`hover`],
		},
	},
	plugins: [],
}
