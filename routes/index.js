var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send("Welcome to Joke Generator API 😄");
});

const app = express();
app.use(express.json());
 
 

// ==== Random jokes array (20 jokes) ====
let jokes = [
  { id: 1, joke: "Why don't programmers like nature? It has too many bugs." },
  { id: 2, joke: "Why do Java developers wear glasses? Because they don’t see sharp." },
  { id: 3, joke: "How many programmers does it take to change a light bulb? None. It's a hardware problem." },
  { id: 4, joke: "I told my computer I needed a break, and it said: No problem, I'll go to sleep." },
  { id: 5, joke: "Why was the developer unhappy at their job? They wanted arrays." },
  { id: 6, joke: "Debugging: Removing the needles from the haystack." },
  { id: 7, joke: "A SQL query walks into a bar, walks up to two tables and asks: Can I join you?" },
  { id: 8, joke: "Why did the function break up with the loop? Because it felt trapped." },
  { id: 9, joke: "Why did the coder cross the road? To fix the other side." },
  { id: 10, joke: "Real programmers count from 0." },
  { id: 11, joke: "A user interface is like a joke. If you have to explain it, it’s not that good." },
  { id: 12, joke: "Why did the programmer quit his job? Because he didn’t get arrays." },
  { id: 13, joke: "In order to understand recursion, you must first understand recursion." },
  { id: 14, joke: "There are only 10 kinds of people in this world: those who understand binary and those who don’t." },
  { id: 15, joke: "I would tell you a UDP joke, but you might not get it." },
  { id: 16, joke: "Knock, knock. Who’s there? Very long pause… Java." },
  { id: 17, joke: "Why did the JavaScript developer go broke? Because he kept using var instead of let." },
  { id: 18, joke: "How do you comfort a JavaScript bug? You console it." },
  { id: 19, joke: "Why did the CSS selector break up with the HTML element? It found a better class." },
  { id: 20, joke: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else." },
];

  

 
router.get("/jokes", (req, res) => {
  res.send(jokes);
});

 // single joke 

router.get("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const joke = jokes.find(j => j.id === id);
  if (!joke) return res.status(404).send({ message: "Joke not found" });
  res.send(joke);
});

//  new joke POST
router.post("/jokes", (req, res) => {
  const newJoke = {
    id: jokes.length + 1,
    joke: req.body.joke
  };
  jokes.push(newJoke);
  res.send(newJoke);
});

// Update   by ID  
router.put("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const joke = jokes.find(j => j.id === id);
  if (!joke) return res.status(404).send({ message: "Joke not found" });
  
  joke.joke = req.body.joke || joke.joke;
  res.send(joke);
});

// Delete   ID  
router.delete("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = jokes.findIndex(j => j.id === id);
  if (index === -1) return res.status(404).send({ message: "Joke not found" });
  
  const deletedJoke = jokes.splice(index, 1);
  res.send(deletedJoke);
});

 


module.exports = router;
