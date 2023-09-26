const bodyChange = document.body;
//const btnCol1 = document.getElementById ("btn-col1")
//const btnCol2 = document.getElementById ("btn-col2")
const topTxt = document.querySelector("#pagetop");
const addBtn = document.querySelector("#adder");
const removeBtn = document.querySelector("#remover");
const txtField = document.querySelector("#textadder");
let motto = [];
codeify()
topTxt.textContent = "motivational quotes";

addBtn.addEventListener("click", function () {
  let mottoR = Math.floor(Math.random() * motto.length);
  txtField.innerHTML += `<p>${motto[mottoR]}</p>`;
});
removeBtn.addEventListener("click", function () {
  txtField.innerHTML = ``;
});

function codeify(num) {
  
  if(num === 1) {
  motto = [];
  motto = [
    `Keep It Simple, Stupid (KISS): Aim for simplicity in your code. Simple code is easier to understand, debug, and maintain.`,
    `Don't Repeat Yourself (DRY): Avoid duplicating code. Instead, use functions, classes, or modules to encapsulate and reuse code.`,
    `Stay Consistent: Maintain a consistent coding style and naming conventions throughout your projects. It improves code readability and collaboration.`,
    `Write Code for Humans, Not Computers: Code should be understandable by other developers. Write clear, self-explanatory code with comments and meaningful variable names.`,
    `Plan Before You Code: Spend time designing and planning your code before you start typing. A well-thought-out plan can save you time and headaches later.`,
    `Test Early, Test Often: Write tests to verify your code's correctness. Automated testing helps catch bugs early in the development process.`,
    `Keep Your Code Modular: Break your code into smaller, reusable modules or functions. It promotes maintainability and allows for easier testing.`,
    `Optimize for Readability: Code is read more often than it's written. Make sure your code is easy to read and understand, even if it means sacrificing minor performance gains.`,
    `Use Version Control: Always use a version control system (e.g., Git) to track changes in your code. It helps you collaborate with others and roll back to previous versions if needed.`,
    `Stay Up to Date: Keep learning and stay updated with the latest programming languages, tools, and best practices.`,
    `Don't Reinvent the Wheel: Utilize existing libraries and frameworks when they fit your needs. Don't rewrite functionality that's already available.`,
    `Document Your Code: Write clear and concise documentation for your code, including how to use it and why certain design decisions were made.`,
    `Handle Errors Gracefully: Don't ignore errors; handle them gracefully with meaningful error messages and appropriate error-handling mechanisms.`,
    `Security Matters: Be mindful of security best practices. Protect against common vulnerabilities like SQL injection, XSS, and CSRF.`,
    `Stay Persistent: Coding can be challenging, but persistence pays off. Don't give up when you encounter difficulties; keep learning and improving.`,
    `Keep It Open Source: Consider open-source contributions. Sharing your code with the community can lead to valuable feedback and collaboration.`,
    `Think Before You Copy-Paste: Avoid blindly copying code from the internet. Understand what the code does, and make sure it's safe and suitable for your project.`,
    `Stay Humble: Acknowledge that you don't know everything, and there's always more to learn. Embrace feedback and constructive criticism.`,
    `Code with Empathy: Remember that your code will be used by others. Consider the user experience and the impact of your code on others.`,
    `Have Fun: Coding should be enjoyable. Find joy in solving problems and creating software.`,
  ];
  bodyChange.style.color = `green`
  //btnCol.style.backgroundcolor = `green` i wanted to do this but could not figure out how
} else if (num === 2) {
 motto = []
  motto = [
    `Keep It Simple, Miku (KISM): Aim for simplicity in your code, just like Miku's music. Simple code is easier to understand, debug, and maintain.`,
    `Don't Repeat Yourself (DRM): Avoid duplicating code, and instead, use functions, classes, or modules to encapsulate and reuse code, just as Miku's songs are timeless.`,
    `Stay Miku-sistent: Maintain a consistent coding style and naming conventions throughout your projects. It improves code readability and collaboration, just like Miku's consistent character design.`,
    `Write Code for Miku, Not Computers: Code should be understandable by other Miku fans. Write clear, self-explanatory code with comments and meaningful variable names, like singing a Miku song.`,
    `Plan Before You Code, like Miku's Concert: Spend time designing and planning your code before you start typing. A well-thought-out plan can save you time and headaches later, just like planning a Miku concert.`,
    `Test Early, Test Often, Like a Vocaloid: Write tests to verify your code's correctness. Automated testing helps catch bugs early in the development process, similar to how Vocaloids like Miku need precise tuning.`,
    `Keep Your Code Modular, Like Miku Modules: Break your code into smaller, reusable modules or functions. It promotes maintainability and allows for easier testing, just like Miku's vocal modules.`,
    `Optimize for Miku-tiful Readability: Code is read more often than it's written. Make sure your code is easy to read and understand, even if it means sacrificing minor performance gains, just like Miku's beautiful melodies.`,
    `Use Version Control, Miku-style: Always use a version control system (e.g., Git) to track changes in your code. It helps you collaborate with others and roll back to previous versions if needed, similar to creating different versions of a Miku song.`,
    `Stay Up to Date, Like Miku's Outfits: Keep learning and stay updated with the latest programming languages, tools, and best practices, just like how Miku always has trendy outfits.`,
    `Don't Reinvent the Miku: Utilize existing libraries and frameworks when they fit your needs. Don't rewrite functionality that's already available, just as Miku uses existing vocal libraries.`,
    `Document Your Code, Miku-style: Write clear and concise documentation for your code, including how to use it and why certain design decisions were made, just like Miku's song lyrics come with explanations.`,
    `Handle Errors Gracefully, Like Miku's Live Performances: Don't ignore errors; handle them gracefully with meaningful error messages and appropriate error-handling mechanisms, similar to how Miku manages technical glitches during live shows.`,
    `Security Matters, Just like Miku's Privacy: Be mindful of security best practices. Protect against common vulnerabilities like SQL injection, XSS, and CSRF, just like Miku's online presence needs protection.`,
    `Stay Miku-sistent: Coding can be challenging, but persistence pays off. Don't give up when you encounter difficulties; keep learning and improving, just like how Miku fans persistently support her.`,
    `Keep It Open Miku: Consider open-source contributions. Sharing your code with the community can lead to valuable feedback and collaboration, just like how Miku fans create fan-made content.`,
    `Think Before You Copy-Paste, Like Miku's Style: Avoid blindly copying code from the internet. Understand what the code does, and make sure it's safe and suitable for your project, similar to how Miku fans carefully curate their collections.`,
    `Code with Miku's Empathy: Remember that your code will be used by others. Consider the user experience and the impact of your code on others, just as Miku's music brings joy to her fans.`,
    `Have Fun, Miku-style: Coding should be enjoyable. Find joy in solving problems and creating software, just as Miku brings happiness through her music`,
  ];
  bodyChange.style.color = `cyan`
  // btnCol.style.background = `cyan` i wanted to do this but could not figure out how
} else if (num === 3) {
 motto = [];
  motto = [
    `Believe in yourself, and you will be unstoppable,Success is not final, failure is not fatal: It is the courage to continue that counts.`,
    `The only way to do great work is to love what you do.`,
    `Dream big, work hard, stay focused, and never give up`,
    `Your time is limited, don't waste it living someone else's life.`,
    `The journey of a thousand miles begins with one step.`,
    `Success is walking from failure to failure with no loss of enthusiasm.`,
    `Hardships often prepare ordinary people for an extraordinary destiny.`,
    `You are never too old to set another goal or to dream a new dream.`,
    `The only limit to our realization of tomorrow will be our doubts of today.`,
    `Don't watch the clock; do what it does. Keep going.`,
    `Believe you can, and you're halfway there.`,
    `The harder you work for something, the greater you'll feel when you achieve it, Success is not in what you have, but who you are`,
    `Opportunities don't happen. You create them.`,
    `It does not matter how slowly you go as long as you do not stop.`,
    `The secret to getting ahead is getting started.`,
    `You are the author of your own story; make it a bestseller`,
    `Challenges are what make life interesting, and overcoming them is what makes life meaningful`,
    `The only person you should try to be better than is the person you were yesterday`,
  ];
  bodyChange.style.color = `yellow`;
 // btnCol1.style.backgroundColor = "yellow"; i wanted to do this but could not figure out how
} else {
bodyChange.style.color = `red`
//btnCol.style.background = `red` i wanted to do this but could not figure out how
}};