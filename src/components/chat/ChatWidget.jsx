import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import styles from "./ChatWidget.module.css";

const replyTo = (text) => {
  const hit = PRODUCTS.find((p) => text.toLowerCase().includes(p.title.toLowerCase().split(" ")[0]));
  return hit
    ? { text: `Explore ${hit.title} under Products & Services.`, href: `/products/${hit.id}`, linkText: "View capability" }
    : { text: "This preview cannot contact the team. Use the enquiry page; online message delivery is not set up yet.", href: "/contact", linkText: "Open enquiry page" };
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([{ bot: true, text: "Hello! Ask about our products or services." }]);

  const send = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    setMessages((m) => [...m, { text }, { bot: true, ...replyTo(text) }]);
    setValue("");
  };

  return (
    <div className={styles.chat}>
      {open && (
        <section className={styles.panel} aria-label="Chat">
          <header>Enquire now</header>
          <div className={styles.log} aria-live="polite">
            {messages.map((m, i) => (
              <p key={i} className={m.bot ? "" : styles.me}>{m.text}{m.href && <> <Link to={m.href}>{m.linkText}</Link></>}</p>
            ))}
          </div>
          <form onSubmit={send}>
            <input aria-label="Message" placeholder="Type a message" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit">Send</button>
          </form>
        </section>
      )}
      <button className={styles.toggle} aria-expanded={open} aria-label={open ? "Close chat preview" : "Open chat preview"} onClick={() => setOpen(!open)}>{open ? "Close" : "Chat with us"}</button>
    </div>
  );
}
