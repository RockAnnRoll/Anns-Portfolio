import React, { useState } from "react";

{
  /*I funktionen ContactForm används useState-hook för att hantera statet för varje fält i formuläret: name, email, och message. 
Varje gång en användare skriver något i något av fälten uppdateras motsvarande state med det nya värdet genom onChange-händelsehanteraren.*/
}

{
  /* När inputfältet för tex name ändras, uppdateras tex name-state till det nya värdet av inputfältet */
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="form">
      <p>Fyll i dina uppgifter nedan:</p>
      <label>
        Namn:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        E-post:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Meddelande:
        <textarea
          className="message-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type="submit" className="form-btn">
        Skicka
      </button>
    </form>
  );
}

export default ContactForm;
