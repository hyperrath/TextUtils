import React from "react";
function Alert(props) {
	return (
		props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center"`} role="alert">
			<div>
				{props.alert.message}
			</div>
		</div>
	)
}
export default Alert;