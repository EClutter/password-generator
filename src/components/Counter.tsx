import { h, Fragment } from "preact";
import { useState } from "preact/hooks";

export default function Counter({ children, password }) {
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [numbers, setNumbers] = useState(true);

  const generatePassword = () => {
    console.log("Generating New Password");
    password.value = makeid(16);
    console.log("New Password: " + password);
  };

  function makeid(length) {
    
    let result = "";
    let characters = "";
    if (upperCase) {
      characters += addUpperCase();
    }
    if (lowerCase) {
      characters += addLowerCase();
    }
    if (numbers) {
      characters += addNumbers();
    }
    if (specialCharacters) {
      characters += addSpecialCharacters();
    }
    if(characters == ""){
      alert("Please select some criteria ")
    }
    let counter = 0;
    const charactersLength = characters.length;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  return (
    <div class="">
      <div class="relative">
        <h1>
          <pre>{password}</pre>
        </h1>
        <button
          onClick={generatePassword}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            GENERATE
          </span>
        </button>
      </div>
      <div class=" text-lg ">
        <div class=" pl-4 border border-gray-200 rounded dark:border-gray-700 p-2 m-2">
          <h4>Remove...</h4>
          <input
            onClick={() => setNumbers(!numbers)}
            id="numbers-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="nuumbers-checkbox"
            class="m-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Numbers
          </label>
          <input
            onClick={() => setSpecialCharacters(!specialCharacters)}
            id="special-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="special-checkbox"
            class="m-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Special Characters
          </label>
          <input
            onClick={() => setLowerCase(!lowerCase)}
            id="lower-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="lower-checkbox"
            class="m-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Lower Case
          </label>
          <input
            onClick={() => setUpperCase(!upperCase)}
            id="upper-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="upper-checkbox"
            class="m-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Upper Case
          </label>
        </div>
      </div>
    </div>
  );
}

function addUpperCase() {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
function addLowerCase() {
  return "abcdefghijklmnopqrstuvwxyz";
}
function addNumbers() {
  return "1234567890";
}
function addSpecialCharacters() {
  return "!@#$%^*()";
}
