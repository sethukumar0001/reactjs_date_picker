import "./App.css";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";
import DatePicker from "./datepicker";
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
	const [daysOptions, setDaysOptions] = useState([]);
	const [yearOptions, setYearOptions] = useState([]);
	const [expiryYearOption, setExpiryYearOption] = useState([]);

	/* -------------------------------------------------------------------------- */
	/*                               Use effect section                           */
	/* -------------------------------------------------------------------------- */

	useEffect(() => {
		findDays(moment(moment().format("MM"), "MM").daysInMonth());
		findYears(parseInt(moment().format("YYYY")) - 100, moment().format("YYYY"));
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
				parseInt(moment().format("YYYY")) - 100,
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

	/* -------------------------------------------------------------------------- */
	/*                           Helper function section                          */
	/* -------------------------------------------------------------------------- */

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
	/* ------ function to find expiry years ------ */

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
		<DatePicker
			// state
			today={today}
			currentMonth={currentMonth}
			currentYear={currentYear}
			currentMonthDays={currentMonthDays}
			selectedType={selectedType}
			daysOptions={daysOptions}
			yearOptions={yearOptions}
			expiryYearOption={expiryYearOption}
			// onchange
			handleChangeDay={handleChangeDay}
			handleChangeMonth={handleChangeMonth}
			handleChangeYear={handleChangeYear}
			handleChangeType={handleChangeType}
		/>
	);
}
export default App;
