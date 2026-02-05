import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { sendMessage } from '../api';

const Home = () => {
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Hello! I'm your AI health assistant. I can help you understand symptoms or book an appointment. How can I help you today?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await sendMessage(userMessage);
            // Assuming backend returns { response: "AI message" } or similar.
            // Adjust based on actual backend response structure.
            // Based on typical chat apps, let's assume the backend returns the message content directly or in a field.
            // The prompt says "Append the backend's response to the chat history."
            // I'll assume the response object has a 'response' or 'message' field, or is the string itself.
            // Let's being safe and try to handle typical JSON structure.
            // "Payload: JSON.stringify({ message: userMessage, session_id: currentSessionId })"
            // Response: likely generic.

            const aiContent = response.response || response.message || JSON.stringify(response);

            setMessages(prev => [...prev, { role: 'ai', content: aiContent }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "I'm sorry, I'm having trouble connecting to the server. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] max-w-4xl mx-auto w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden my-4 border border-gray-100 dark:border-gray-700 transition-colors duration-200">

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`p-2 rounded-lg max-w-[80%] flex items-start space-x-2 ${msg.role === 'user'
                                ? 'bg-sky-600 text-white rounded-br-none'
                                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm border border-gray-200 dark:border-gray-600 rounded-bl-none transition-colors duration-200'
                            }`}
                        >
                            <div className="flex-shrink-0 mt-1">
                                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-sky-600 dark:text-sky-400" />}
                            </div>
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600 rounded-lg rounded-bl-none p-3 flex items-center space-x-2 transition-colors duration-200">
                            <Bot size={16} className="text-sky-600 dark:text-sky-400" />
                            <span className="text-sm italic flex items-center">
                                Thinking <Loader2 className="ml-2 h-3 w-3 animate-spin" />
                            </span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 transition-colors duration-200">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Describe your symptoms..."
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 hover:bg-white dark:hover:bg-gray-600 transition-colors"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !inputValue.trim()}
                        className="bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;
