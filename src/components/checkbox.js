import React from "react";

function Checkbox(props) {
	return (
		<div>
			<div class="form-check mb-3">
				<input
					class="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault1"
					checked={props.checked}
					onChange={() => props.onChange(props.selectedType)}
				/>
				<label class="form-check-label" for="flexRadioDefault1">
					{props.label}
				</label>&nbsp;&nbsp;
			</div>
		</div>
	);
}

export default Checkbox;
