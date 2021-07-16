import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./index.css"

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route>
					<App exact path="/" />
				</Route>
				<Route></Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
)
