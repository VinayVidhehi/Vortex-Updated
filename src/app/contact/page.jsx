import React from "react";

const FormInput = ({ id, type, placeholder, required = false, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-zinc-300 text-sm">
        {label} {label.toLowerCase() === "website" ? "" : "*"}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-transparent px-3 h-12 border border-zinc-500 rounded-md font-light tracking-wide"
      />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-28 ">
      <div className="w-11/12 md:w-10/12 flex flex-col items-center justify-center gap-10">
        <h1 className="text-3xl">LET'S ELEVATE YOUR BRAND WITH VORTEX!</h1>

        <form className="w-full md:w-96 flex flex-col gap-6">
          <FormInput
            id="name"
            type="text"
            placeholder="Enter your name"
            label="Name"
            required
          />
          <FormInput
            id="phone"
            type="tel"
            placeholder="91 +"
            label="Contact number"
            required
          />
          <FormInput
            id="email"
            type="email"
            placeholder="yourname@gmail.com"
            label="Email ID"
            required
          />
          <FormInput
            id="website"
            type="url"
            label="Website"
            placeholder="https://yourwebsite.com"
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="query">Query</label>
            <textarea
              id="query"
              label="Your query"
              placeholder="Enter your query here"
              className="bg-transparent p-3 min-h-20 max-h-24 border border-zinc-400 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-foreground border border-zinc-900 text-background py-4 rounded-md hover:bg-zinc-50 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
