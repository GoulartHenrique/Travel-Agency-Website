import { useState } from "react";
import ContactForm from "../components/ContactPages/ContactForm";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      setSent(true);
      alert("Message sent successfully, thank you!");
    }
  }

  return <ContactForm onSubmit={handleSubmit} sent={sent} />;
}
