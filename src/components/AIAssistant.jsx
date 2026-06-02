import { useState } from "react";

function AIAssistant({ closeAssistant }) {

  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm Incepta AI. How can I help you today?",
      sender: "bot"
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user"
    };

    let reply = "Please explore our luxury jewellery collection.";

    if (input.toLowerCase().includes("ring")) {
      reply =
        "Our Diamond Rings collection is perfect for engagements and gifting.";
    }
    else if (input.toLowerCase().includes("necklace")) {
      reply =
        "Our Luxury Necklace collection features elegant and timeless designs.";
    }
    else if (input.toLowerCase().includes("diamond")) {
      reply =
        "Lab-grown diamonds are real diamonds that are sustainable and affordable.";
    }
    else if (input.toLowerCase().includes("bracelet")) {
      reply =
        "We offer premium gold and diamond bracelets for every occasion.";
    }

    const botMessage = {
      text: reply,
      sender: "bot"
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="ai-assistant">

      <div className="ai-header">
        <h3>💎 Incepta AI</h3>

        <span
          className="close-chat"
          onClick={closeAssistant}
        >
          ✕
        </span>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">

        <input
  type="text"
  placeholder="Ask about jewellery..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }}
/>

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default AIAssistant;