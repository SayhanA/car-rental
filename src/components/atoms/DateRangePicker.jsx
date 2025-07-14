// components/DateRangePicker.js
import { addDays, format, isWithinInterval } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// ✅ Multiple booked date ranges
const bookedDateRanges = [
  {
    startDate: new Date(2025, 6, 15),
    endDate: new Date(2025, 6, 17),
  },
  {
    startDate: new Date(2025, 6, 20),
    endDate: new Date(2025, 6, 22),
  },
];

const isDateBooked = (date) => {
  return bookedDateRanges.some((range) =>
    isWithinInterval(date, {
      start: range.startDate,
      end: range.endDate,
    }),
  );
};

const DateRangePicker = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const [selectedRange, setSelectedRange] = useState({ startDate: new Date() });

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
      alert("Selected range overlaps with a booked range.");
    } else {
      setRange([selected]);
      setSelectedRange({
        start: format(selected.startDate, "yyyy-MM-dd"),
        end: format(selected.endDate, "yyyy-MM-dd"),
      });
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
