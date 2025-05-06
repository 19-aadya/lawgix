import React from 'react';

function Page() {
  const chatbotCards = [
    {
      title: "Legal Issue Sharing",
      description: "AI chatbot provides legal insights, case references, and document templates.",
      buttonLabel: "Share Issue",
    },
    {
      title: "Legal News Aggregator",
      description: " Bar & Bench, Live Law, The Hindu, PIB, Indian Kanoon, Key takeaways, law comparisons, and misinformation detection.",
      buttonLabel: "Read More",
    },
    {
      title: "AI-Powered Document Handling",
      description: "Auto-generates legal documents (affidavits, agreements), Analyzes documents for missing clauses and inconsistencies.",
      buttonLabel: "Generate Document", 
    },
    {
      title: "Talk With Our AI Chatbot",
      description: "Get instant legal advice tailored to your issue.",
      buttonLabel: "Chat Now",
    },
  ];
  
  return (
    <div>
      {/* Background Image with Blur */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
          style={{ backgroundImage: "url('/Home_Bg.png')" }}
        ></div>

        {/* Overlay for Contrast (Optional) */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-end h-full px-8 md:px-16">
          <div className="bg-white  /90 rounded-2xl shadow-lg p-8 max-w-md w-full text-center"> {/* Content on Right Side */}
            <h1 className="text-4xl font-bold text-gray-900">Welcome to Lawless</h1>
            <p className="mt-4 text-lg text-gray-700">
              Your one-stop solution for all legal needs.
            </p>
            <a href="#chatbot-section">
              <button type="button" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </a>

          </div>
        </div>
      </section>
      <section id="chatbot-section" className="bg-gray-50 py-10"> {/* This section is for the card in homepage */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {chatbotCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl shadow-lg p-8 w-full text-center"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{card.title}</h1>
              <p className="mt-2 text-gray-600">{card.description}</p>
              <button
                type="button"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                {card.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Page;
