const quotes = [
{
  quote: "It is during our darkest moments that we must focus to see the light.",
  author: "Aristole" },

{
  quote: "Whoever is happy will make others happy too.",
  author: "Anne Frank" },

{
  quote: "The purpose of our lives is to be happy.",
  author: "Dalai Lama" },

{
  quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
  author: "Dr. Seuss" }];



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
  }, [trigger]);

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("p", { id: "text" }, quote), /*#__PURE__*/
    React.createElement("p", { id: "author" }, "- ", author), /*#__PURE__*/
    React.createElement("div", { id: "footer" }, /*#__PURE__*/
    React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/intent/tweet", target: "_blank" }, "Tweet Quote"), /*#__PURE__*/
    React.createElement("button", { id: "new-quote", onClick: () => setTrigger(true) }, "New Quote"))));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));