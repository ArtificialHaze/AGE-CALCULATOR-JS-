const btnElement = document.getElementById("calculate");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

const getAge = (value) => {
  const currentDate = new Date();
  const birthdayDate = new Date(value);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (month <= 0 && currentDate.getDate() < birthdayDate.getDate()) {
    age--;
  }
  return age;
};

const calculateAge = () => {
  const birthdayValue = birthdayElement.value;
  if (birthdayValue === "") alert("Please enter your birthday.");
  const age = getAge(birthdayValue);
  resultElement.textContent = `Your age is ${age} ${
    age > 1 ? "years" : "year"
  } old.`;
};

btnElement.addEventListener("click", calculateAge);
