import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react'; // Need MessageCircle for the trigger icon and X for the close button

// Define the color palette for easy reference
const colors = {
  background: '#0f0326', // Dark background for chat area
  textGray: '#696869', // Gray text (used implicitly by context or for less important text)
  accentGreen: '#88bf42', // Primary accent (button, user message bubble)
  white: '#FFFFFF', // White text (headings, main content)
  darkGrayOuter: '#1a1a1a', // A slightly lighter dark gray for the outer frame
  darkGrayInner: '#2a2a2a', // Another dark gray for input/bot messages
};

const ChatbotDemo = () => {
  // State to control whether the full chat window is open
  const [isOpen, setIsOpen] = useState(false);

  // State and refs for the chat conversation (same as before)
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you with Thor Signia\'s AI solutions today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Effect to scroll to the bottom whenever messages update
  useEffect(() => {
    // Only scroll if the chat window is open
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]); // Add isOpen as a dependency

  // Handle opening/closing the chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
     // Optional: If closing, maybe clear input or add a "conversation ended" message
  };

   // Handle input change (same as before)
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Simulate a simple bot response (same as before)
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello there! Ask me about our services or solutions.';
    }
    if (lowerMessage.includes('services')) {
      return 'Thor Signia specializes in AI solutions like Voice Automation, Lead Intelligence, Chatbots, and more.';
    }
     if (lowerMessage.includes('contact')) {
      return 'You can find our contact details on the "Contact Us" page.';
    }
     if (lowerMessage.includes('about')) {
      return 'We are a leading provider of enterprise AI solutions committed to driving progress.';
    }
     if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
      return 'Visit our Careers page to see open positions at Thor Signia.';
    }
     if (lowerMessage.includes('case study')) {
      return 'We have case studies available showcasing our work in various industries.';
    }
    // Generic fallback response
    return "Thank you for your message! As a demo, I have limited responses. Please visit our website for more information.";
  };


  // Handle sending a message (same as before, but inside the component now)
  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };

      // Add user message instantly
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput(''); // Clear input immediately

      // Simulate bot typing delay (optional)
      // Don't block the UI while waiting for the simulated response
      setTimeout(async () => {
         const botMessageText = getBotResponse(userMessage.text); // Use the text from the added message
         const botMessage = { text: botMessageText, sender: 'bot' };
         setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 800); // Wait for 800ms
    }
  };

   // Handle sending message on Enter key press (same as before)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };


  return (
    <>
      {/* Chat Trigger Button (Circle) */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#88bf42] text-white shadow-xl flex items-center justify-center hover:bg-[#7aad3a] transition-colors z-[1000] focus:outline-none focus:ring-4 focus:ring-[#88bf42]/50" // z-index high to be on top
        aria-label={isOpen ? "Close Chat" : "Open Chat"} // ARIA label for accessibility
        aria-expanded={isOpen} // ARIA expanded state
      >
        {isOpen ? (
            <X className="w-7 h-7" /> // X icon when open
        ) : (
             <MessageCircle className="w-7 h-7" /> // Message icon when closed
        )}
      </button>

      {/* Chat Window (Conditional Rendering) */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-80 h-[500px] max-h-[calc(100vh-120px)] bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden flex flex-col z-[999]" // z-index slightly lower than trigger, flex-col for layout
          style={{ backgroundColor: colors.darkGrayOuter }} // Outer frame background
        >
          {/* Chat Header */}
          <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between flex-shrink-0"> {/* flex-shrink-0 to prevent shrinking */}
            <h3 className="text-lg font-semibold text-white">Thor Signia Chat Demo</h3>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-full p-1"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message Area - Make it take available space and be scrollable */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4" style={{ backgroundColor: colors.background }}>
              {messages.map((msg, index) => (
                  <div
                      key={index} // Using index as key is okay for this simple, non-reordering list
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                      <div
                          className={
                              `max-w-[70%] px-3 py-2 rounded-lg text-sm ` + // Adjusted padding, font size
                              `${msg.sender === 'user'
                                  ? 'bg-[#88bf42] text-white' // Accent green for user
                                  : `bg-[${colors.darkGrayInner}] text-white` // Use dark gray for bot
                              }`
                          }
                      >
                          {msg.text}
                      </div>
                  </div>
              ))}
              {/* Empty div for scrolling to the bottom */}
              <div ref={messagesEndRef} />
          </div>

          {/* Input Area - Make it stay at the bottom */}
          <div className="p-4 bg-gray-900 border-t border-gray-700 flex items-center flex-shrink-0"> {/* flex-shrink-0 to prevent shrinking */}
              <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 text-white text-sm rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#88bf42] placeholder-gray-400" // Input styling
                  style={{ backgroundColor: colors.darkGrayInner }} // Explicitly set input background
              />
              <button
                  onClick={handleSendMessage}
                  className="bg-[#88bf42] text-white rounded-r-md px-4 py-2 hover:bg-[#7aad3a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#88bf42] disabled:opacity-50 disabled:cursor-not-allowed" // Button styling
                  disabled={!input.trim()} // Disable if input is empty
              >
                  <Send className="w-5 h-5" /> {/* Send icon */}
              </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotDemo;