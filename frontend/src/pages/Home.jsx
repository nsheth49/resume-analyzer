import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AI Resume Analyzer
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Get instant feedback on your resume. Identify weaknesses,
              improve bullet points, and stand out to recruiters.
            </p>

            <Link to="/ai">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Analyze Resume
              </button>
            </Link>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="../src/assets/resume-home-hero.jpg"
              alt="Resume analysis"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Features</h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              "Resume Analysis",
              "Weakness Detection",
              "Bullet Improvement",
              "ATS Optimization",
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{feature}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  AI-powered insights to improve your resume quality.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              "Upload your resume",
              "Ask questions or choose actions",
              "Get AI-powered feedback",
            ].map((step, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-blue-600">
                  {index + 1}
                </div>
                <p className="mt-2 text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLE OUTPUT */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            Example Improvement
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50 rounded-xl">
              <h3 className="font-semibold">Before</h3>
              <p className="mt-2 text-gray-700">
                Worked on a web app
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold">After</h3>
              <p className="mt-2 text-gray-700">
                Developed a full-stack web application using React and
                Node.js, improving user engagement by 25%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link to Resume AI */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Improve Your Resume?
        </h2>
        <p className="mt-4">
          Start analyzing your resume with AI today.
        </p>

        <Link to="/ai">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition">
            Get Started
          </button>
        </Link>
      </section>

    </div>
  );
};

export default Home;