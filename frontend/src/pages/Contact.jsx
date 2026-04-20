import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Have questions, feedback, or issues? We'd love to hear from you.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

            <p className="text-gray-600 mb-6">
              Whether you have a question about features, feedback on your experience,
              or need help improving your resume, feel free to reach out.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                📧 Email: <span className="font-medium">support@resumeai.com</span>
              </p>
              <p>
                📞 Phone: <span className="font-medium">(123) 456-7890</span>
              </p>
              <p>
                📍 Location: <span className="font-medium">Dallas, TX</span>
              </p>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              We typically respond within 3-5 business days.
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;