import React from "react";
import DatePicker from "react-datepicker";

interface DatePickerInputProps {
  label: string;
  selected: Date;
  onChange: (date: Date | null) => void;
}
const DatePickerInput: React.FC<DatePickerInputProps> = ({
  label,
  selected,
  onChange,
}) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <DatePicker selected={selected} onChange={onChange} />
      </div>
    </>
  );
};

export default DatePickerInput;
