

const exercise1: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 1 done"), 20000)
});
const exercise2: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 2 done"), 30000)
});
const exercise3: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 3 done"), 40000)
})
const outputElement = document.getElementById("output") as HTMLParagraphElement;

function updateText(result: string) {
    console.log(result);
    if (outputElement) {
        outputElement.textContent = outputElement.textContent + " " + result
    }
}
exercise1.then(updateText);
exercise2.then(updateText);
exercise3.then(updateText);

