import React from "react";

export const Contact = () => {
  const handleFormSubmit=(formData)=>{
    const formInputData=Object.fromEntries(formData.entries())
    console.log("this is contact data:",formInputData)
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="enter your name"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="enter your email"
            name="email"
            className="form-control"
          />
          <textarea
            className="form-control "
            rows="10"
            placeholder="enter your message"
            name="message"
            required
            autoComplete="off"
          />
          <button type="submit" value="send">
            send
          </button>
        </form>
      </div>
    </section>
  );
};
