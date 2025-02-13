import React from "react";
interface Hobby {
  name: string;
}
interface HobbiesInputProps {
  hobbies: Hobby[];
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  addHobby: () => void;
  removeHobby: (index: number) => void;
  errors?: { name?: string }[];
}
const HobbiesInput: React.FC<HobbiesInputProps> = ({
  hobbies,
  onChange,
  addHobby,
  removeHobby,
  errors,
}) => {
  return (
    <>
      <label>Hobbies</label>
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <input
            name="name"
            value={hobby.name}
            onChange={(e) => onChange(index, e)}
            placeholder="Hobby Name"
          />
          {hobbies.length > 1 && (
            <button type="button" onClick={() => removeHobby(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addHobby}>
        Add Hobby
      </button>
    </>
  );
};

export default HobbiesInput;
