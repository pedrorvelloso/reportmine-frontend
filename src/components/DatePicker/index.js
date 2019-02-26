import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Helmet from 'react-helmet';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

const DatePicker = ({ ...props }) => {
	const { from, to, setFrom, setTo } = props;
	const ref = useRef(null);

	useEffect(() => {
		showFromMonth();
	}, [to]);

	const showFromMonth = () => {
		if (!from) {
			return;
		}
		if (moment(to).diff(moment(from), 'months') < 2) {
			ref.current.getDayPicker().showMonth(from);
		}
	};
	const handleFromChange = from => {
		// Change the from date and focus the "to" input field
		setFrom(from);
	};
	const handleToChange = to => {
		setTo(to);
	};
	const modifiers = { start: from, end: to };
	return (
		<center>
			<div className="InputFromTo">
				<DayPickerInput
					value={from}
					placeholder="De"
					format="LL"
					formatDate={formatDate}
					parseDate={parseDate}
					dayPickerProps={{
						selectedDays: [from, { from, to }],
						disabledDays: { after: to },
						toMonth: to,
						modifiers,
						numberOfMonths: 1,
						onDayClick: () => ref.current.getInput().focus()
					}}
					onDayChange={handleFromChange}
				/>{' '}
				<span className="InputFromTo-to">
					<DayPickerInput
						ref={ref}
						value={to}
						placeholder="Até"
						format="LL"
						formatDate={formatDate}
						parseDate={parseDate}
						dayPickerProps={{
							selectedDays: [from, { from, to }],
							disabledDays: { before: from },
							modifiers,
							month: from,
							fromMonth: from,
							numberOfMonths: 1
						}}
						onDayChange={handleToChange}
					/>
				</span>
				<Helmet>
					<style>{`
                        .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                            background-color: #f0f8ff !important;
                            color: #4a90e2;
                        }
                        .InputFromTo .DayPicker-Day {
                            border-radius: 0 !important;
                        }
                        .InputFromTo .DayPicker-Day--start {
                            border-top-left-radius: 50% !important;
                            border-bottom-left-radius: 50% !important;
                        }
                        .InputFromTo .DayPicker-Day--end {
                            border-top-right-radius: 50% !important;
                            border-bottom-right-radius: 50% !important;
                        }
                        .InputFromTo .DayPickerInput-Overlay {
                            width: 275px;
                        }
                        .InputFromTo-to .DayPickerInput-Overlay {
                            margin-left: -198px;
                        }
                        .DayPickerInput input {
                            padding: 8px 0;
                            width: 150px;
                            color: #555;
                            background: #FFF;
                            border: none;
                            border-bottom: 1px solid #555;
                            outline: none;
                            font-size: 18px;
                        }
`}</style>
				</Helmet>
			</div>
		</center>
	);
};

DatePicker.propTypes = {
	to: PropTypes.object,
	from: PropTypes.object,
	setFrom: PropTypes.func.isRequired,
	setTo: PropTypes.func.isRequired
};

export default DatePicker;
