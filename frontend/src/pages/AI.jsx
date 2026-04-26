import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const AI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() && !file) return;

    const userMessage = input || "Analyze my resume";

    // Add user message
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
    ]);

    const formData = new FormData();

    if (file) {
      formData.append("resume", file);
    }

    formData.append("prompt", userMessage);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      console.log("AI response:", data);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply || "No response from AI",
        },
      ]);

      // optional: clear file after successful send
      setFile(null);

    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Error: Unable to contact AI",
        },
      ]);
    }

    setLoading(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: `📄 Uploaded resume: ${selectedFile.name}`,
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[90vh] max-w-5xl mx-auto p-4">

      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">AI Resume Assistant</h1>
        <p className="text-sm text-gray-500">
          Upload your resume and chat with AI
        </p>
      </div>

      {/* File Status */}
      <div className="mb-3 text-sm">
        {file ? (
          <span className="text-green-600">
            📄 {file.name} ready
          </span>
        ) : (
          <span className="text-gray-500">
            No resume uploaded
          </span>
        )}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 rounded-xl p-4 space-y-3">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center mt-10">
            Upload a resume or ask a question to begin
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[70%] p-3 rounded-xl ${
              msg.sender === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-white border"
            }`}
          >
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="bg-white border p-3 rounded-xl w-fit">
            AI is analyzing...
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2 mt-3">
        {[
          "Analyze Resume",
          "Find Weaknesses",
          "Improve Bullet Points",
          "ATS Check",
        ].map((action, index) => (
          <button
            key={index}
            onClick={() => setInput(action)}
            className="px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-gray-300"
          >
            {action}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="mt-3 flex items-center gap-2">

        {/* File Upload */}
        <label className="cursor-pointer bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300">
          📎
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something about your resume..."
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Send */}
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default AI;