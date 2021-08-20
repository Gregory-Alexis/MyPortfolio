module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: (theme) => ({
				lightgreen: "#64FFDA",
			}),
			textColor: {
				nightblue: "#0a192f",
				lightgreen: "#64FFDA",
			},
			keyframes: {
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(50px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
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
				"fade-in-down": "fade-in-down 1s ease-out",
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
