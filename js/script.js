"use stict";

const quotes = [
  "Life happens wherever you are, whether you make it or not.",
  "It's time for you to look inward, and start asking yourself the big questions. Who are you? And what do you want?",
  "Failure is only the opportunity to begin again. Only this time, more wisely.",
  "to find light one must be in the dark in order to find wisdom.",
  "Good Times Become Good Memories, But Bad Times Make Good Lessons.",
];

function getRandomQuote() {
  if (quotes.length === 0) {
    return "No quotes available";
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuotes() {
  const randomQuote = getRandomQuote();

  const quoteElement = document.getElementById("quotes");
  quoteElement.textContent = randomQuote;
}

const button = document
  .getElementById("displayQuoteBtn")
  .addEventListener("click", displayRandomQuotes);
