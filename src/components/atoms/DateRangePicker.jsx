// components/DateRangePicker.js
import { addDays, format, isWithinInterval } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch } from "react-redux";
import { bookedDateRanges } from "../../data/dateRange";
import { showAlert } from "../../store/slices/alertSlice";
import { setDates } from "../../store/slices/bookingSlice";

const isDateBooked = (date) => {
  return bookedDateRanges.some((range) =>
    isWithinInterval(date, {
      start: range.startDate,
      end: range.endDate,
    }),
  );
};

const DateRangePicker = () => {
  const dispatch = useDispatch();

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    const selected = ranges.selection;
    // Check if selected range overlaps any booked range
    const hasConflict = bookedDateRanges.some((booked) => {
      return (
        isWithinInterval(booked.startDate, {
          start: selected.startDate,
          end: selected.endDate,
        }) ||
        isWithinInterval(booked.endDate, {
          start: selected.startDate,
          end: selected.endDate,
        }) ||
        isWithinInterval(selected.startDate, {
          start: booked.startDate,
          end: booked.endDate,
        }) ||
        isWithinInterval(selected.endDate, {
          start: booked.startDate,
          end: booked.endDate,
        })
      );
    });

    if (hasConflict) {
      // alert("Selected range overlaps with a booked range.");
      dispatch(
        showAlert({
          type: "info",
          children: <p>Selected range overlaps with a booked range.</p>,
        }),
      );
    } else {
      setRange([selected]);
      dispatch(
        setDates({
          pickupDate: format(selected.startDate, "yyyy-MM-dd"),
          returnDate: format(selected.endDate, "yyyy-MM-dd"),
        }),
      );

      // You can also send it to API/localStorage here
      console.log("Selected range stored:", selected);
    }
  };

  const customDayContent = (date) => {
    const isBooked = isDateBooked(date);
    return (
      <div
        style={{
          backgroundColor: isBooked ? "" : "transparent",
          color: isBooked ? "red" : "",
          borderRadius: "",
          padding: 2,
        }}
      >
        {date.getDate()}
      </div>
    );
  };

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={range}
        disabledDay={isDateBooked}
        minDate={new Date()}
        dayContentRenderer={customDayContent}
        style={{
          backgroundColor: "var(--background)",
        }}
      />
    </div>
  );
};

export default DateRangePicker;
