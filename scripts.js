const quotes = [
    "Lets Start with motivational thoughts",
    "Learning never exhausts the mind.",
    "The more that you read, the more things you will know.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The beautiful thing about learning is nobody can take it away from you.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The more I learn, the more I realize how much I don't know.",
    "Intellectual growth should commence at birth and cease only at death.",
    "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    "An investment in knowledge pays the best interest.",
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.",
    "Develop a passion for learning. If you do, you will never cease to grow.",
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
    "Curiosity is the wick in the candle of learning.",
    "The best way to predict your future is to create it.",
    "Education is not preparation for life; education is life itself.",
    "Learning is not attained by chance; it must be sought for with ardor and attended to with diligence.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The mind is not a vessel to be filled, but a fire to be kindled.",
    "Learning is a treasure that will follow its owner everywhere.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Education is the kindling of a flame, not the filling of a vessel.",
    "The roots of education are bitter, but the fruit is sweet.",
    "Education's purpose is to replace an empty mind with an open one.",
    "Learning is the only thing the mind never exhausts, never fears, and never regrets.",
    "The only way to do great work is to love what you do.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "The secret of getting ahead is getting started."
];


let currentQuoteIndex = 0;

function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    document.getElementById("quote").textContent = quotes[currentQuoteIndex];
}

setInterval(changeQuote, 5000);
