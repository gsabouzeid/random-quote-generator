const quotes = [
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristole"
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss"
  },
];

const App = () => {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [trigger, setTrigger] = React.useState(true);
  
  React.useEffect(() => {
    if (trigger) {
      setTrigger(false);
      
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      // Makes sures it generates a new quote
      while (randomQuote.quote === quote) {
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      }
      
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    }
  }, [trigger])
  
  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <div id="footer">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Tweet Quote</a>
        <button id="new-quote" onClick={() => setTrigger(true)}>New Quote</button>
        </div>
    </div>
  );
};

ReactDOM.render(<App />,
document.getElementById("root"));