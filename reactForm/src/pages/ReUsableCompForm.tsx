/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import simulatedApi from "../api/api";
import { FormData } from "../types";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import CheckBoxInput from "../components/CheckBoxInput";
import DatePickerInput from "../components/DatePickerInput";
import HobbiesInput from "../components/HobbiesInput";

const ReUsableCompForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    age: 18,
    gender: "",
    address: { city: "", state: "" },
    hobbies: [{ name: "" }],
    startDate: new Date(),
    subscribe: false,
    referral: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleHobbyChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setFormData((prev) => {
      const updatedHobbies = [...prev.hobbies];
      updatedHobbies[index].name = value;
      return { ...prev, hobbies: updatedHobbies };
    });
  };

  const addHobby = () => {
    setFormData((prev) => ({
      ...prev,
      hobbies: [...prev.hobbies, { name: "" }],
    }));
  };
  const removeHobby = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((_, i) => i !== index),
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await simulatedApi(formData);
      console.log({ formData });
      console.log("Success!");
    } catch (error: any) {
      setErrors({ root: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-5">
          User Form
        </h2>
        <form>
          <TextInput
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <TextInput
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />

          <TextInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <TextInput
            label="age"
            name="age"
            value={String(formData.age)}
            onChange={handleChange}
            error={errors.ages}
          />

          <SelectInput
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" },
              { label: "Other", value: "other" },
            ]}
            error={errors.gender}
          />

          <CheckBoxInput
            label="Subscribe to Newsletter"
            checked={formData.subscribe}
            onChange={(e) =>
              setFormData({ ...formData, subscribe: e.target.checked })
            }
            name={"subscribe"}
          />

          <DatePickerInput
            label="Date"
            selected={formData.startDate}
            onChange={(date) =>
              setFormData({ ...formData, startDate: date || new Date() })
            }
          />

          <HobbiesInput
            hobbies={formData.hobbies}
            onChange={handleHobbyChange}
            addHobby={addHobby}
            removeHobby={removeHobby}
          />

          <button
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isSubmitting ? "Submitting.." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ReUsableCompForm;
