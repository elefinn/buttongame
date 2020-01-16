import "./styles.css";
let quotes = [
  "I told you not to push,",
  "Ouch, that hurts",
  "Please stop",
  "OH MY GOD ARE YOU EVER GOING TO STOP?",
  "This is getting out of hand",
  "If you stop I promise to give you a cookie",
  "NO COOKIE!",
  "So like, should we change it up a little bit? Maybe dont push this time.",
  "You are having way to much fun with this",
  "Dont get too excited.",
  "You suck at listening",
  "Your a dick",
  "What is wrong with you?",
  "Your momma has chest hair",
  "Stop touching me!",
  "Imma beat you like a red-headed stepchild.",
  "Im gonna fuck you up if you push that button one more time",
  "Thats it, this is your last chance",
  "This is why you cant have nice things",
  "You know what? I hate you.",
  "Dont you ever get tired of being just another button pusher?",
  "Every time you think that you cant. Remember. You probably shouldnt",
  "I cant even right now"
];
let button = document.getElementById("btn");
{
  button.addEventListener("click", function() {
    document.getElementById("display").innerHTML = newQuote();
  });

  let display = document.getElementById("display");

  function newQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let nextQuote = quotes[randomNumber];
    return nextQuote;
  }
}
