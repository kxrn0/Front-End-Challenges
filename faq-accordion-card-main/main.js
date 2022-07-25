import create_expandible from "./expandible.js";

const questions = [
    {
        question: "How many team members can I invite?",
        answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        id: Math.random().toString(16)
    },
    {
        question: "What is the maximum file upload size?",
        answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
        id: Math.random().toString(16)
    },
    {
        question: "How do I reset my password?",
        answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
        id: Math.random().toString(16)
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes! Send us a message and we’ll process your request no questions asked.",
        id: Math.random().toString(16)
    },
    {
        question: "Do you provide additional support?",
        answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
        id: Math.random().toString(16)
    }
];
const questionsHolder = document.querySelector(".questions");
const checks = [];

questions.forEach(question => {
    const label = document.createElement("label");
    const answer = document.createElement("p");
    let expandible, check;

    label.innerText = question.question;
    label.setAttribute("for", question.id);
    answer.innerText = question.answer;
    expandible = create_expandible(label, answer, question.id);
    expandible.classList.add("question");
    check = expandible.querySelector(".expandible-toggle");
    checks.push(check);

    check.addEventListener("click", () => {
        label.classList.toggle("active");
        checks.forEach(other => {
            if (other.id != check.id && other.checked) {
                other.click();
                check.click();
            }
        });
    });
    
    questionsHolder.append(expandible);
});