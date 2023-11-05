/* .js files add interaction to your website */
var factList = [
 "Practicing self-love can improve your overall quality of life and well-being.",
  "Self-love involves embracing your strengths and embracing areas for growth.",
  "Self-love is a foundation for building resilience and coping with life's challenges.",
  "Cultivating self-love can lead to greater self-confidence and self-assurance.",
  "Self-love isn't about being narcissistic; it's about valuing and respecting yourself.",
  "Research suggests that self-love can lead to increased creativity and productivity.",
  "Self-love encourages you to prioritize your own needs without feeling guilty.",
  "Loving yourself helps you form more authentic and fulfilling connections with others.",
  "Self-love empowers you to make choices that align with your values and aspirations.",
  "Engaging in self-compassion can reduce feelings of perfectionism and self-criticism.",
  "Practicing self-love is an ongoing journey that requires patience and self-awareness.",
  "Loving yourself means recognizing your worth beyond external achievements.",
  "Self-love allows you to see setbacks as opportunities for growth and learning.",
  "Cultivating self-love can lead to increased happiness and a positive outlook on life.",
  "Embracing self-love can inspire and empower those around you.",
  "Self-love helps you break free from the limitations of comparison and self-doubt.",
];
 
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // Simplified validation for demo purposes
  if (username === "demo" && password === "password") {
    loginMessage.textContent = "Login successful!";
  } else {
    loginMessage.textContent = "Invalid username or password.";
  }
});

const registrationForm = document.getElementById("registration-form");
const registrationMessage = document.getElementById("registration-message");

registrationForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = registrationForm.username.value;
  const password = registrationForm.password.value;

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      registrationMessage.textContent = "Registration successful!";
    } else {
      registrationMessage.textContent = data.message;
    }
  } catch (error) {
    console.error("Error:", error);
    registrationMessage.textContent = "An error occurred.";
  }
});

 
const thoughtsForm = document.getElementById("thoughtsForm");

 
const submittedThoughtsContainer = document.getElementById("submittedThoughts");

 
thoughtsForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the user's thoughts from the textarea
  const thoughts = document.getElementById("thoughts").value;

  // Create a new element to display the submitted thoughts
  const thoughtElement = document.createElement("p");
  thoughtElement.textContent = thoughts;

  // Append the submitted thoughts to the container
  submittedThoughtsContainer.appendChild(thoughtElement);

  // Clear the textarea after submission
  document.getElementById("thoughts").value = "";
});
