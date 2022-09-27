const actualText = document.querySelector("#actualText");
const fonts = ["Dancing Script, cursive", "Gloria Hallelujah, cursive", "Chilanka, cursive","Petit Formal Script, cursive","Pacifico, cursive","Nothing You Could Do, cursive"];
// const hoverColors = ["#1e90ff","#7700ff", "#ff006a", "#ffc400", "#ff5e00", "#00ff80", "#9e00ce"];

async function onLoad() {
    const font = fonts[Math.floor(Math.random()*fonts.length)];
    // const color = hoverColors[Math.round(Math.random()*hoverColors.length)];
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    actualText.style.color = color;
    const getQuote = await axios.get("https://api.quotable.io/random");
    const quoteObj = { author: getQuote.data.author, content: getQuote.data.content };
    actualText.style.fontFamily = font
    actualText.innerText = `"${quoteObj.content}"\n\n-${quoteObj.author}`;
}

window.addEventListener("load", onLoad);
