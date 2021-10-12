// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

const readlineSync = require("readline-sync");
const news = readlineSync.question("Enter the news : ");
const source = readlineSync.question("Enter the source : ");

function detectFakeNews(news, src) {
  const fakeSources = ["whatsapp", "facebook", "telegram"];
  if (fakeSources.includes(src.toLowerCase())) {
    return true;
  }
  return false;
}

console.log(
  detectFakeNews(news, source)
    ? "Don't believe things on FB, Whatsapp and Telegram"
    : "Could be authentic still check it"
);
