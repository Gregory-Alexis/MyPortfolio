import { BsListNested } from "react-icons/bs"
import { CgClose } from "react-icons/cg"

const ToggleButton = ({ width, handleToggleButton, toggle }) => {
	return (
		<div className="flex ml-auto z-20">
			{width < 768 && (
				<button
					type="button"
					onClick={handleToggleButton}
					style={{ color: "#64ffda", fontSize: "40px" }}
					// "toggle-rotate" permet la rotation du toggle boutton lors d'un click sur Smartphone
					className={
						toggle
							? "transform transition duration-200 -rotate-90 "
							: "transform transition duration-200 rotate-0 "
					}
				>
					{toggle ? <CgClose /> : <BsListNested />}
				</button>
			)}
		</div>
	)
}

export default ToggleButton
