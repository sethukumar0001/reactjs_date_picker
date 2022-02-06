import React from "react";
import moment from "moment";
import "moment-timezone";

function View(props) {
	const { currentMonth, today, currentYear } = props;
	return (
		<div>
			<div className="mt-5">
				<p className="mt-3">MM-DD-YYYY</p>
				<p className="mt-3">
					{currentMonth + " - " + today + " - " + currentYear}
				</p>
				<p className="mt-3">
					{moment(
						new Date(currentMonth + "-" + today + "-" + currentYear)
					).format("MMM DD YYYY")}
				</p>
				<p className="mt-3">
					{" "}
					Asia/Kolkata (Time zone) -
					{JSON.stringify(
						moment.tz(
							currentMonth + "-" + today + "-" + currentYear,
							"Asia/Kolkata"
						)
					)}
				</p>
			</div>
		</div>
	);
}

export default View;
