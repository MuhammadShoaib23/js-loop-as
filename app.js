// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.
const colors = ["red", "green", "blue"];
document.querySelector("#output").textContent = colors.join(" ");

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.
for (let i = 1; i <= 10; i++) console.log(i);

// 4. Use a while loop to print numbers from 5 to 1 in the console.
let n = 5;
while (n >= 1) {
  console.log(n);
  n--;
}

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.
const names = ["Ali", "Sara", "Ahmed"];
document.querySelector("#names").textContent = names.join(", ");

// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.
document.querySelector("#status").textContent = "Loading...";

// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.
const nums = [5, 10, 15];
let total = 0;
for (const x of nums) total += x;
document.querySelector("#sum").textContent = total;

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.
const cities = ["Karachi", "Lahore", "Quetta"];
document.querySelector("#cities").textContent = cities.join(" ");

// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}
// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max.
const arr = [45, 22, 89, 100];
let max = arr[0];
for (const v of arr) if (v > max) max = v;
document.querySelector("#max").textContent = max;

// 11. Use document.querySelector to select a div with ID result and change its text to "Task
// Complete".
document.querySelector("#result").textContent = "Task Complete";

// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.
const t = [30, 35, 32, 40];
let sum = 0;
for (const v of t) sum += v;
document.querySelector("#averageTemp").textContent = (sum / t.length).toFixed(1);

// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.
let s = 0;
for (let i = 1; i <= 100; i++) s += i;
document.querySelector("#totalSum").textContent = s;
// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.
const animals = ["dog", "cat", "bird"];
document.querySelector("#animals").textContent = animals.join(" ");

// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".
document.querySelector("#title").textContent = "Welcome to JavaScript!";


// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.
// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.
// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector.
// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// them in a paragraph with ID subjectsList.
// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.
// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].
// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.
// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].
// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// multiplied by 3.
// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.
// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.
// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].
// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// sum of corresponding elements.
// 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].
// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
// .reverse()).
// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.

// 32. Create a loop that finds the difference between the largest and smallest numbers in an
// array [11, 4, 99, 2, 47].
// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.
// 34. Loop through an array of numbers and create a new array that only contains odd
// numbers.
// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// elements in a new array.
// 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.
// 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.
// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or
// equal to the average of the array.
// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.

