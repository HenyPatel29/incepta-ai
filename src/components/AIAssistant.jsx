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

    let reply = "I'm sorry, I didn't understand that. Please ask about rings, necklaces, bracelets, delivery, returns, or pricing.";

const question = input.toLowerCase();

if (
  question.includes("hi") ||
  question.includes("hello") ||
  question.includes("hey")
) {
  reply = "Hello! Welcome to Incepta Jewels. How may I assist you today?";
}

else if (question.includes("ring")) {
  reply = "Our Diamond Rings collection features elegant engagement and luxury rings crafted with premium quality materials.";
}

else if (question.includes("necklace")) {
  reply = "Our Luxury Necklaces are designed to add elegance and sophistication to every occasion.";
}

else if (question.includes("bracelet")) {
  reply = "We offer premium gold and diamond bracelets suitable for daily wear and special occasions.";
}

else if (question.includes("earring")) {
  reply = "Our Earrings collection includes modern, classic, and luxury diamond designs.";
}

else if (question.includes("pendant")) {
  reply = "Our Pendants collection features timeless designs crafted with elegance and precision.";
}

else if (
  question.includes("price") ||
  question.includes("cost")
) {
  reply = "Our jewellery prices vary depending on the design and materials used. Please browse the collection pages for detailed pricing.";
}

else if (
  question.includes("delivery") ||
  question.includes("shipping")
) {
  reply = "We provide secure delivery across India. Orders are typically delivered within 3–7 business days.";
}

else if (
  question.includes("return") ||
  question.includes("refund")
) {
  reply = "Eligible products can be returned or exchanged according to our Returns & Exchanges Policy. Please visit the Returns page for complete details.";
}

else if (
  question.includes("contact") ||
  question.includes("phone") ||
  question.includes("email")
) {
  reply = "You can contact us at contact@inceptajewels.com or call +91 8718-8718-00.";
}

else if (
  question.includes("diamond")
) {
  reply = "We offer premium diamond jewellery crafted with exceptional quality and elegant designs.";
}

else if (
  question.includes("thank")
) {
  reply = "You're welcome. Thank you for visiting Incepta Jewels.";
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