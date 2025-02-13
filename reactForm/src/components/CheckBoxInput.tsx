import React from "react";

interface CheckboxInputProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxInput: React.FC<CheckboxInputProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;
