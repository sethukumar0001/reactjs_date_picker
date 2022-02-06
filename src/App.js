import "./App.css";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";
function App() {
	/* -------------------------------------------------------------------------- */
	/*                               Use State section                            */
	/* -------------------------------------------------------------------------- */

	const [today, setToDay] = useState(moment().format("DD"));
	const [currentMonth, setCurrentMonth] = useState(moment().format("MM"));
	const [currentYear, setCurrentYear] = useState(moment().format("YYYY"));
	const [currentMonthDays, setCurrentMonthDays] = useState(
		moment("02", "MM").daysInMonth()
	);
	const [months] = useState([
		{ label: "January", value: "01" },
		{ label: "February", value: "02" },
		{ label: "March", value: "03" },
		{ label: "April", value: "04" },
		{ label: "May", value: "05" },
		{ label: "June", value: "06" },
		{ label: "July", value: "07" },
		{ label: "August", value: "08" },
		{ label: "September", value: "09" },
		{ label: "October", value: "10" },
		{ label: "November", value: "11" },
		{ label: "December", value: "12" },
	]);

	const [daysOptions, setDaysOptions] = useState([]);
	const [yearOptions, setYearOptions] = useState([]);

	/* -------------------------------------------------------------------------- */
	/*                               Use effect section                           */
	/* -------------------------------------------------------------------------- */

	useEffect(() => {
		findDays(moment(moment().format("MM"), "MM").daysInMonth());
		findYears(parseInt(moment().format("YYYY")) - 80, moment().format("YYYY"));
	}, []);

	/* -------------------------------------------------------------------------- */
	/*                               Onchange section                             */
	/* -------------------------------------------------------------------------- */

	const handleChangeDay = (e) => {
		setToDay(e.target.value);
	};

	const handleChangeMonth = (e) => {
		setCurrentMonth(e.target.value);
		setCurrentMonthDays(moment(e.target.value, "MM").daysInMonth());
		findDays(moment(e.target.value, "MM").daysInMonth());
	};

	const handleChangeYear = (e) => {
		setCurrentYear(e.target.value);
	};

	/* ------ function to find current month days ------ */

	const findDays = (value) => {
		let days = [];
		let length = value + 1;
		for (let i = 1; i < length; i++) {
			let stringLength = i.toString().length;
			days.push({
				value: stringLength === 1 ? "0" + i.toString() : i.toString(),
				label: stringLength === 1 ? "0" + i.toString() : i.toString(),
			});
		}
		setDaysOptions(days);
	};

	/* ------ function to find years ------ */

	const findYears = (minYear, maxYear) => {
		let years = [];
		for (let i = minYear; i < parseInt(maxYear) + 1; i++) {
			years.push({
				value: i,
				label: i,
			});
		}
		setYearOptions(years);
	};

	return (
		<div className="App">
			<header className="App-header">
				<div className="d-flex justify-content-between">
					<div>
						<label>Month - {currentMonth}</label>
						<select
							onChange={(e) => handleChangeMonth(e)}
							className="form-select"
						>
							{months.map((item) => {
								return (
									<option
										value={item.value}
										selected={item.value === currentMonth}
									>
										{item.label}
									</option>
								);
							})}
						</select>{" "}
					</div>
					&nbsp;&nbsp;
					<div>
						<label>Days - {currentMonthDays}</label>
						<select
							onChange={(e) => handleChangeDay(e)}
							className="form-select"
						>
							{daysOptions.map((item, index) => {
								return (
									<option value={item.value} selected={item.value === today}>
										{item.label}
									</option>
								);
							})}
						</select>{" "}
					</div>
					&nbsp;&nbsp;
					<div>
						<label>Years</label>
						<select
							onChange={(e) => handleChangeYear(e)}
							className="form-select"
						>
							{yearOptions.map((item, index) => {
								return (
									<option
										value={item.value}
										selected={item.value === parseInt(currentYear)}
									>
										{item.label}
									</option>
								);
							})}{" "}
						</select>
					</div>
				</div>
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
			</header>
		</div>
	);
}

export default App;

// https://stackoverflow.com/questions/35117787/momentjs-shows-evaluate-one-day-less#:~:text=When%20you%20give%20Moment%20an,on%20Jan%203rd%20in%20UTC.
