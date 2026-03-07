Create a modern, responsive **portfolio website** based on the provided Figma design.

Use **React (or Next.js) and Framer Motion** for animations. The final result should feel smooth, minimal and polished, similar to modern design portfolios.

---

GENERAL SCROLL ANIMATIONS

* All elements should appear with **smooth ease-in animations when they enter the viewport**.
* Use **scroll-triggered animations** (Intersection Observer or Framer Motion viewport triggers).
* Each block should animate **only once when it becomes visible**.
* Animations should be subtle and professional:

  * opacity from 0 → 1
  * slight translateY (20–40px)
  * ease-in timing
* Sections should reveal progressively as the user scrolls.

---

CHAT SECTION (SIMULATED CONVERSATION)

The second section of the website contains a **chat interface that simulates a messaging conversation**.

The animation must **start only when the user scrolls to this section**.

Sequence of events:

1️⃣ First grey message (incoming message)

* Show a grey chat bubble with the text:
  **"typing..."**
* Keep it visible for **2–3 seconds** to simulate typing.
* Then smoothly replace it with the **actual message text**.

2️⃣ Second grey message

* Repeat the same typing simulation:

  * show **"typing..."**
  * after **2–3 seconds** reveal the message.

3️⃣ Green message (user reply)

* The green message should **appear instantly**, as if it was sent by the user.

4️⃣ Final grey message

* Again simulate typing:

  * show **"typing..."**
  * after **2–3 seconds** replace with the final message.

---

ANIMATION RULES

* The chat sequence should **play automatically once the section becomes visible**.
* Messages should appear **one after another with realistic delays**.
* Use smooth opacity and slide animations for message bubbles.
* The interaction should feel like a **real messaging app**.

---

TECHNICAL REQUIREMENTS

* Use **React / Next.js**
* Use **Framer Motion for animations**
* Clean, modular components
* Responsive layout
* Maintain the **exact visual structure from the Figma design**
* Optimize animation performance
* Code should be production-ready and well structured.
