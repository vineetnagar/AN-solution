import React, { useState, useEffect } from "react";
import Style from "./ProjectForm.module.css";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    _name: "",
    _email: "",
    _contact: "",
    _subject: "",
    _message: "",
  });
  const [status, setStatus] = useState({ loading: false, msg: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "" });

    try {
      const res = await fetch("http://localhost:4100/api/orderNow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ loading: false, msg: data.msg });
        setFormData({
          _name: "",
          _email: "",
          _contact: "",
          _subject: "",
          _message: "",
        });
      } else {
        setStatus({ loading: false, msg: data.msg || "Something went wrong" });
      }
    } catch (err) {
      setStatus({ loading: false, msg: "Server error. Please try again." });
    }
  };

  useEffect(() => {
    if (status.msg) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, msg: "" }));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [status.msg]);
  return (
    <div className={Style.ProjectForm}>
      <div className={Style.projectForm_container_right}>
        <div className={Style.projectForm_container_right_heading}>
          <h5>ONLINE ASSIGNMENT HELP</h5>
          <p>Top Quality, Plagiarism-free and Reliable Assignment Help</p>
        </div>
        <hr />
        <div className={Style.projectForm_container_right_form}>
          <h6>Book Your Assignment</h6>

          <form
            className={Style.projectForm_container_right_form_form}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="_name"
                value={formData._name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="_email"
                value={formData._email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="contact"
                name="_contact"
                value={formData._contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="_subject"
                value={formData._subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="_message"
                rows="2"
                value={formData._message}
                onChange={handleChange}
              ></textarea>
            </div>

            {status.msg && <p>{status.msg}</p>}

            <button
              type="submit"
              className="btn btn-danger"
              disabled={status.loading}
            >
              {status.loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
