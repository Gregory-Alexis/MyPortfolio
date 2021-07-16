import "./Header.css"
import Logo from "../assets/Hero.svg"

import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header>
			<nav className=" p-3 shadow-md">
				<div className="flex justify-between ">
					<Link to="/">
						<img
							src={Logo}
							alt="logo"
							style={{ height: "50px" }}
							className="rounded mr-5"
						/>
					</Link>

					<ul className="nav flex items-center ">
						<li className="nav-item colorful-3 mr-8 ">
							<Link>
								<a className="nav-link" href="/" style={{ color: "#b8b8b8" }}>
									<span
										style={{ color: "#64ffda", fontFamily: "Fira code" }}
										className="mr-1 "
									>
										01.
									</span>
									Acceuil
								</a>
							</Link>
						</li>
						<li className="nav-item colorful-3  mr-8 ">
							<Link>
								<a
									className="nav-link"
									href="/about"
									style={{ color: "#b8b8b8" }}
								>
									<span
										style={{ color: "#64ffda", fontFamily: "Fira code" }}
										className="mr-1 "
									>
										02.
									</span>
									About
								</a>
							</Link>
						</li>
						<li className="nav-item colorful-3  mr-8">
							<a
								className="nav-link"
								href="projets"
								style={{ color: "#c7c7c7" }}
							>
								<span
									style={{ color: "#64ffda", fontFamily: "Fira code" }}
									className="mr-1 "
								>
									03.
								</span>
								Projets
							</a>
						</li>
						<li className="nav-item colorful-3 mr-8">
							<a
								className="nav-link "
								href="expèriences"
								style={{ color: "#c7c7c7" }}
							>
								<span
									style={{ color: "#64ffda", fontFamily: "Fira code" }}
									className="mr-1 "
								>
									04.
								</span>
								Expèriences
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
