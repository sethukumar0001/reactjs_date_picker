import React from "react";

function Select(props) {
	return (
		<div>
			<div>
				<label className='label'>{props.label}</label>&nbsp;&nbsp;
				<select onChange={(e) => props.onChange(e)} className="form-select">
					{props.options.map((item) => {
						return (
							<option
								value={item.value}
								selected={item.value === props.selectedOption}
							>
								{item.label}
							</option>
						);
					})}
				</select>{" "}
			</div>
		</div>
	);
}

export default Select;
