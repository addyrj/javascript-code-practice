
// o/p should be like this // Sabyasachi - 2
// Techno - 2
// Exponent -1 
// I - 1

// let str = "Sabyasachi, Techno Exponent Techno I sabyasachi";
// let split = str.toLowerCase().split(" ");

// let obj = split.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
// }, {});

// for (let key in obj) {
//     console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} - ${obj[key]}`);
// }
// ------------------
// make stope watch 
// import React, { useEffect, useState, useRef } from 'react';

// const StopWatch = () => {
//   const [time, setTime] = useState(0);
//   const [pausedTime, setPausedTime] = useState(0);
//   const timeHandler = useRef(null);

//   useEffect(() => {
//     timeInc();
//     return () => clearInterval(timeHandler.current);
//   }, []);

//   function timeInc() {
//     timeHandler.current = setInterval(() => {
//       setTime(prevTime => prevTime + 1);
//     }, 1000);
//   }

//   const handleStart = () => {
//     setTime(0);
//     clearInterval(timeHandler.current);
//     timeInc();
//   };

//   const handlePause = () => {
//     clearInterval(timeHandler.current);
//     setPausedTime(time);
//   };

//   const handleRestart = () => {
//     setTime(pausedTime); // Set time to the paused time
//     clearInterval(timeHandler.current);
//     timeInc(); // Start from the paused time
//   };

//   return (
//     <>
//       <h1>{time}</h1>
//       <button onClick={handleStart} className='btn btn-success'>
//         Start
//       </button>
//       <button onClick={handlePause} className='btn btn-danger'>
//         Pause
//       </button>
//       <button onClick={handleRestart} className='btn btn-warning'>
//         Restart
//       </button>
//     </>
//   );
// };

// export default StopWatch;
// ----------------
// Convert a string of numbers to a sentence.
// Each number represents a letter.
// Numbers in the string are separated by a space, and words in the sentence are separated by a plus character.
// Conversion table: 1 = A 2 = B ... 26 = Z 
// Example: numbers to letters ('20 5 19 20+4 15 13 5') should return 'TEST DOME'. Input: "20 5 19 20" Output: "TEST" "20 5 19 20" Input: "20 5++19+ 20" Output: "TE S T"

// let A = 1;
// Write a program that takes two strings as input: a main string and a substring. The program should count the number of times the substring occurs in the main string. 

// Example:
// Main string: "hellohellohello"
// Substring: "hello"
// Output: 3









