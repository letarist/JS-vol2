let promRes = "Waiter: 'Welcome to our restaurant. Did you book a table in advance?' David: 'Hello. Yes, we ordered a table for Laurins.' W: 'All right. Follow me. Here's your table, as you wanted, by the window.Let me take your and your lady's coats.' D: ' Yes, please. Sit down, dear.'".replace(/'/g, '"')
let result = promRes.replace(/\b"\b/g, "'");
document.write(result);