import "./App.css";
import { useState } from "react";
import moment from "moment";

function App() {
	const [today, setToDay] = useState(moment().format("D"));
	const [currentMonth, setCurrentMonth] = useState(moment().format("M"));
	const [currentYear, setCurrentYear] = useState(moment().format("YYYY"));
	const [minYear] = useState(parseInt(moment().format("YYYY")) - 80);
	const [currentMonthDays, setCurrentMonthDays] = useState(
		moment("02", "MM").daysInMonth()
	);

	const [months] = useState([
		{ name: "January", value: "1" },
		{ name: "February", value: "2" },
		{ name: "March", value: "3" },
		{ name: "April", value: "4" },
		{ name: "May", value: "5" },
		{ name: "June", value: "6" },
		{ name: "July", value: "7" },
		{ name: "August", value: "8" },
		{ name: "September", value: "9" },
		{ name: "October", value: "10" },
		{ name: "November", value: "11" },
		{ name: "December", value: "12" },
	]);

	const handleChangeDay = (e) => {
		setToDay(e.target.value);
	};

	const handleChangeMonth = (e) => {
		setCurrentMonth(e.target.value);
		setCurrentMonthDays(moment(e.target.value, "MM").daysInMonth());
	};

	const handleChangeYear = (e) => {
		console.log(e.target.value);
		setCurrentYear(e.target.value);
	};

	return (
		<div className="App">
			<header className="App-header">
				<div className="d-flex justify-content-between">
					<div>
					<label>Days - {currentMonthDays}</label>&nbsp;&nbsp;
					<select onChange={(e) => handleChangeDay(e)}>
						{Array.from({ length: currentMonthDays + 1 }, (v, k) => k).map(
							(item, index) => {
								if (index !== 0)
									return (
										<option value={item} selected={item == today}>
											{item}
										</option>
									);
							}
						)}
					</select> &nbsp;&nbsp;
					</div>
					<div>
					<label>Month - {currentMonth}</label>&nbsp;&nbsp;
					<select onChange={(e) => handleChangeMonth(e)}>
						{months.map((item) => {
							return (
								<option
									value={item.value}
									selected={item.value == currentMonth}
								>
									{item.name}
								</option>
							);
						})}
					</select>&nbsp;&nbsp;
					</div>
					<div>
					<label>Years</label>&nbsp;&nbsp;
					<select onChange={(e) => handleChangeYear(e)}>
						{Array.from({ length: minYear + 81 }, (v, k) => k).map(
							(item, index) => {
								if (item > minYear)
									return (
										<option value={item} selected={item == currentYear}>
											{item}
										</option>
									);
							}
						)}
					</select>&nbsp;&nbsp;
					</div>
				</div>
				<div>
					<br />
					<br />
					M-D-YYYY
					<br />
					<br />
					{currentMonth + " - " + today + " - " + currentYear}
					<br />
					<br />
					{moment(
						new Date(currentMonth + "-" + today + "-" + currentYear)
					).format("MMM DD YYYY")}
					<br />
					<br />
					{JSON.stringify(
						moment
							.utc(moment(currentMonth + "-" + today + "-" + currentYear))
							.format()
					)}
					</div>
				
			</header>
		</div>
	);
}

export default App;
