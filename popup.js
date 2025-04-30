document.addEventListener('DOMContentLoaded', function() {
  // References to DOM elements
  const contentDisplay = document.getElementById('content-display');
  const randomContent = document.getElementById('random-content');
  const quoteBtn = document.getElementById('quote-btn');
  const factBtn = document.getElementById('fact-btn');
  const colorBtn = document.getElementById('color-btn');
  const jokeBtn = document.getElementById('joke-btn');

  // Collection of quotes
  const quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      text: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "Mother Teresa"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Whoever is happy will make others happy too.",
      author: "Anne Frank"
    },
    {
      text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    }
  ];

  // Collection of facts
  const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
    "A day on Venus is longer than a year on Venus. It takes 243 Earth-days to rotate once on its axis, but only 225 Earth-days to complete an orbit around the Sun.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "The average cloud weighs about 1.1 million pounds (500,000 kg).",
    "Octopuses have three hearts. Two pump blood through the gills, while the third pumps it through the rest of the body.",
    "The world's oldest known living tree is a Great Bristlecone Pine that is over 5,000 years old.",
    "Bananas are berries, but strawberries aren't.",
    "A group of flamingos is called a 'flamboyance'.",
    "The fingerprints of koalas are so similar to humans that they have on occasion been confused at crime scenes.",
    "The Hawaiian alphabet has only 12 letters."
  ];

  // Collection of jokes
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What do you call a fish with no eyes? Fsh.",
    "How do you organize a space party? You planet!",
    "Why did the coffee file a police report? It got mugged.",
    "The past, present, and future walked into a bar. It was tense.",
    "I was going to tell a time traveling joke, but you didn't like it."
  ];

  // Generate a random quote
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    randomContent.innerHTML = `"${quote.text}" <br><br> - ${quote.author}`;
    contentDisplay.style.backgroundColor = '#e6f2ff';
  }

  // Generate a random fact
  function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    randomContent.textContent = facts[randomIndex];
    contentDisplay.style.backgroundColor = '#e6ffe6';
  }

  // Generate a random color
  function displayRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    randomContent.innerHTML = `<strong>Color:</strong> ${color}<br><br>`;
    randomContent.style.color = color;
    
    // Add a color preview box
    randomContent.innerHTML += `<div style="width: 100px; height: 100px; background-color: ${color}; margin: 0 auto; border: 1px solid #ddd;"></div>`;
    
    contentDisplay.style.backgroundColor = '#fff';
  }

  // Generate a random joke
  function displayRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    randomContent.textContent = jokes[randomIndex];
    contentDisplay.style.backgroundColor = '#fff9e6';
  }

  // Event listeners for buttons
  quoteBtn.addEventListener('click', displayRandomQuote);
  factBtn.addEventListener('click', displayRandomFact);
  colorBtn.addEventListener('click', displayRandomColor);
  jokeBtn.addEventListener('click', displayRandomJoke);

  // Display a random item on initial load
  const randomFunction = [
    displayRandomQuote,
    displayRandomFact,
    displayRandomColor,
    displayRandomJoke
  ];
  
  const initialRandomFunction = randomFunction[Math.floor(Math.random() * randomFunction.length)];
  initialRandomFunction();
});
