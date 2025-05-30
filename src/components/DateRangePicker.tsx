import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default function DateRangePicker({ value, onChange }: { value: Date[]; onChange: (dates: Date[]) => void }) {
  return (
    <Flatpickr
      className="datepicker px-4 py-2 rounded-lg bg-[#18181b] text-[#f472b6] border border-[#a21caf] focus:outline-none"
      value={value}
      options={{
        mode: "range",
        static: true,
        monthSelectorType: "static",
        dateFormat: "M j, Y",
        defaultDate: value,
      }}
      onChange={onChange}
    />
  );
}