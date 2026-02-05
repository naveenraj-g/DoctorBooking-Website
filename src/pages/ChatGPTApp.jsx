import React from "react";

const ChatGPTApp = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        ChatGPT for Desktop
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-6 transition-colors duration-200">
        <section>
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/w4wjHBnqHpg?si=6KgiSpt_UFm3sNUq"
              title="ChatGPT Native App Demo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Experience AI Natively
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The new ChatGPT desktop app for macOS and Windows allows you to
            integrate AI seamlessly into your workflow. With a simple keyboard
            shortcut, you can instantly start a voice conversation, take
            screenshots, and get help with what's on your screen.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <strong>Instant Access:</strong> Launch ChatGPT with `Option +
              Space` (Mac) or `Alt + Space` (Windows).
            </li>
            <li>
              <strong>Voice Mode:</strong> Talk to ChatGPT naturally with
              voice-to-text capabilities.
            </li>
            <li>
              <strong>Screen Context:</strong> Discuss what you're working on by
              sharing your screen context.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ChatGPTApp;
