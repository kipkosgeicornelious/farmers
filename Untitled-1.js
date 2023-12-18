// Get the current date
const today = new Date("2023/12/15");

// Parse the user's date of birth from a string (assuming DD/MM/YYYY format)
const dobString = "1990/07/15";
const dob = new Date(dobString);

// Calculate the difference in milliseconds and convert to years
const msDiff = today.getTime() - dob.getTime();
const ageYears = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 365.25));

// Print the age
console.log("Age:", ageYears);