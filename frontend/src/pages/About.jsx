import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">About ResumeAI</h1>
          <p className="text-gray-600 mt-2">
            Helping you build stronger resumes with AI-powered insights.
          </p>
        </div>

        {/* What This Is */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">What This Is</h2>
          <p className="text-gray-600 leading-relaxed">
            ResumeAI is a web application designed to analyze resumes and provide
            actionable feedback. It helps identify weak points, improve bullet
            clarity, and optimize your resume for recruiters and applicant
            tracking systems (ATS).
          </p>
        </section>

        {/* Why It Exists */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Why This Was Built</h2>
          <p className="text-gray-600 leading-relaxed">
            Writing a strong resume is difficult, especially when feedback is vague
            or inconsistent. This project was built to provide clear, direct, and
            useful suggestions so users can improve their resumes with confidence.
          </p>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Upload your resume</li>
            <li>Ask for feedback or choose specific improvements</li>
            <li>Receive AI-generated suggestions and insights</li>
          </ul>
        </section>

        {/* What Makes It Useful */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">What Makes It Useful</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Identifies weak or unclear bullet points</li>
            <li>Suggests stronger, impact-driven phrasing</li>
            <li>Highlights gaps and improvement areas</li>
            <li>Helps optimize resumes for ATS systems</li>
          </ul>
        </section>

        {/* About the Creator */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Creator</h2>
          <p className="text-gray-600 leading-relaxed">
            As a computer science student interested in
            building practical tools using modern web technologies and AI, I built this website. 
            The goal is to create something genuinely useful while learning full-stack
            development and real-world problem solving.
          </p>
        </section>

        {/* Future Vision */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Future Improvements</h2>
          <p className="text-gray-600 leading-relaxed">
            Future updates may include account creation for saving conversations with AI, more detailed scoring, personalized feedback,
            better formatting suggestions, and deeper analysis tailored to specific
            job roles and industries.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;