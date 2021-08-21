module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				white: "0 2px 5px 2px rgba(255, 255, 255)",
			},
			backgroundColor: (theme) => ({
				lightblue: "#00e1ff",
				purplerain: "#1e0045",
			}),

			textColor: {
				lightblue: "#00e1ff",
				purplerain: "#1e0045",
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
