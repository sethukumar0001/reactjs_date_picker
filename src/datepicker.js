import "./App.css";
import "moment-timezone";
import { months } from "./common/month_list";
import Select from "./components/select";
import Checkbox from "./components/checkbox";
import View from "./components/view";
function DatePicker(props) {
	const {
        today,
        currentMonth,
        currentYear,
        currentMonthDays,
        selectedType,
        daysOptions,
        yearOptions,
        expiryYearOption,
        handleChangeDay,
        handleChangeMonth,
        handleChangeYear,
        handleChangeType,
    } = props;
	return (
		<div className="App">
			<header className="App-header">
				<div className="d-flex justify-content-between">
					<Checkbox
						label={"Adult"}
						onChange={handleChangeType}
						checked={selectedType === "adult"}
						selectedType={"adult"}
					/>
					<Checkbox
						label={"Child"}
						onChange={handleChangeType}
						checked={selectedType === "child"}
						selectedType={"child"}
					/>
					<Checkbox
						label={"Infant"}
						onChange={handleChangeType}
						checked={selectedType === "infant"}
						selectedType={"infant"}
					/>
				</div>
				<h2 className="color">Date of Birth</h2>
				<div className="d-flex justify-content-between">
					<Select
						label={`Month - ${currentMonth}`}
						options={months}
						selectedOption={currentMonth}
						onChange={handleChangeMonth}
					/>
					<Select
						label={`Days - ${currentMonthDays}`}
						options={daysOptions}
						selectedOption={today}
						onChange={handleChangeDay}
					/>
					<Select
						label={`Years - ${yearOptions.length - 1}`}
						options={yearOptions}
						selectedOption={parseInt(currentYear)}
						onChange={handleChangeYear}
					/>
				</div>

				<h2 className="color mt-5">Passport Expiry Date</h2>
				<div className="d-flex justify-content-between">
					<Select
						label={`Month - ${currentMonth}`}
						options={months}
						selectedOption={currentMonth}
						onChange={handleChangeMonth}
					/>
					<Select
						label={`Days - ${currentMonthDays}`}
						options={daysOptions}
						selectedOption={today}
						onChange={handleChangeDay}
					/>
					<Select
						label={`Years + ${expiryYearOption.length - 1}`}
						options={expiryYearOption}
						selectedOption={parseInt(currentYear)}
						onChange={handleChangeYear}
					/>
				</div>
				<View
					currentMonth={currentMonth}
					today={today}
					currentYear={currentYear}
				/>
			</header>
		</div>
	);
}

export default DatePicker;

// https://stackoverflow.com/questions/35117787/momentjs-shows-evaluate-one-day-less#:~:text=When%20you%20give%20Moment%20an,on%20Jan%203rd%20in%20UTC.
