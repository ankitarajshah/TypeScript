import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
