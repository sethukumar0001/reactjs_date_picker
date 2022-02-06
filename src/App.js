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
	const [selectedType, setSelectedType] = useState("adult");
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
	const [expiryYearOption, setExpiryYearOption] = useState([]);

	/* -------------------------------------------------------------------------- */
	/*                               Use effect section                           */
	/* -------------------------------------------------------------------------- */

	useEffect(() => {
		findDays(moment(moment().format("MM"), "MM").daysInMonth());
		findYears(parseInt(moment().format("YYYY")) - 80, moment().format("YYYY"));
		findExpiryYear(
			moment().format("YYYY"),
			parseInt(moment().format("YYYY")) + 20
		);
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

	const handleChangeType = (e) => {
		setSelectedType(e);
		if (e === "adult") {
			findYears(
				parseInt(moment().format("YYYY")) - 80,
				moment().format("YYYY")
			);
		} else if (e === "child") {
			findYears(
				parseInt(moment().format("YYYY")) - 12,
				moment().format("YYYY")
			);
		} else {
			findYears(parseInt(moment().format("YYYY")) - 2, moment().format("YYYY"));
		}
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

	const findExpiryYear = (minYear, maxYear) => {
		let years = [];
		for (let i = minYear; i < parseInt(maxYear) + 1; i++) {
			years.push({
				value: i,
				label: i,
			});
		}
		setExpiryYearOption(years);
	};

	return (
		<div className="App">
			<header className="App-header">
				<div className="d-flex justify-content-between">
					<div class="form-check mb-3">
						<input
							class="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id="flexRadioDefault1"
							checked={selectedType === "adult"}
							onChange={() => handleChangeType("adult")}
						/>
						<label class="form-check-label" for="flexRadioDefault1">
							Adult
						</label>
					</div>
					&nbsp;&nbsp;
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id="flexRadioDefault1"
							checked={selectedType === "child"}
							onChange={() => handleChangeType("child")}
						/>
						<label class="form-check-label" for="flexRadioDefault1">
							Child
						</label>
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id="flexRadioDefault1"
							checked={selectedType === "infant"}
							onChange={() => handleChangeType("infant")}
						/>
						<label class="form-check-label" for="flexRadioDefault1">
							Infant
						</label>
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<h2 className="color">Date of Birth</h2>
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

				<h2 className="color mt-5">Passport Expiry Date</h2>
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
							{expiryYearOption.map((item, index) => {
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
