const questions = document.querySelectorAll(".covered");
const prompts = [
    "This is the full name of the owner of Carnegie Steel",
    "The workers called the mill this name after barbed wire was set up",
    "This happened to the union after the Homestead Strike failed",
    "This is the full name of the union that rebelled in Homestead",
    "This is the total number of people who were killed during the strike",
    "This is title of Carnegie’s book about the duty of philanthropists",
    "Explain the purpose of the Pinkerton Detective Agency",
    "Explain what happened exactly on July 6th, 1892",
    "Explain why the PDA died out after the Homestead Strike"
];

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        questions[i].classList.replace("covered", "uncovered");
        questions[i].innerHTML = prompts[i];
    })
}