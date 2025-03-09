"use client";
import React, { useState } from "react";

const FormInput = ({
  id,
  type,
  placeholder,
  required = false,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-zinc-300 text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-transparent px-3 h-12 border border-zinc-500 rounded-md font-light tracking-wide"
      />
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("/api/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(
        data.message ||
          "Thank you for reaching out \n We will get back to you shortly!",
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form, Please try again later");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-28 ">
      <div className="w-11/12 md:w-10/12 flex flex-col items-center justify-center gap-10">
        <h1 className="text-3xl">LET'S ELEVATE YOUR BRAND WITH VORTEX!</h1>

        <form
          className="w-full md:w-96 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <FormInput
            id="name"
            type="text"
            placeholder="Enter your name"
            label="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            id="phone"
            type="tel"
            placeholder="91 +"
            label="Contact number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <FormInput
            id="email"
            type="email"
            placeholder="yourname@gmail.com"
            label="Email ID"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            id="website"
            type="url"
            label="Website"
            placeholder="https://yourwebsite.com"
            value={formData.website}
            onChange={handleChange}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="query">Write to us</label>
            <textarea
              id="query"
              placeholder="Enter your query here"
              className="bg-transparent p-3 min-h-20 max-h-24 border border-zinc-400 rounded-md"
              value={formData.query}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-foreground border border-zinc-900 text-background py-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
