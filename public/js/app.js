// ### First Project JavaScript:


// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates
//  logging into a bank account using only the console
//  to interact with the user.


let Databaseuser = []

let user = {  username: "" ,email: "", age: "" , password: ""}

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:

// let ask = prompt("do you want to signing up, logging in, or changing the password")

// if(ask == "signing up" ){

//     alert("signing up")
    
// }else if (ask == "logging in" ){
//     // console.log("logging in ");
//     alert("logging in")
// }else if (ask == "changing the password"){
//     // console.log("changing the password");
//     alert("changing the password")
    
// }else {
//     alert("by")
// }



//             # Name (Full):
//             - Check for leading or trailing spaces. trim()
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

let Username = prompt("unter you full name").trim()

let usernamevalidation = Username.length >= 5 && Username != Username.includes("@") 



//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

let Email = prompt("unter your email").trim().toLowerCase();

let emailvalidation =  Email.length >= 10 && Email.includes("@") && Email.split("@").length === 2 && !Email.includes(" ")



//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

let Age = prompt("how old are you")

let agevalidation = Age == Number(Age) && Age != " " && Age.length > 0 && Age.length < 3 

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

let Password = prompt("unter your password it must have special character ")

let passwordvalidation =  Password.length >= 7 && !Password.includes(" ") && /[@#\-+*/]/.test(Password);







if ( !emailvalidation  || !passwordvalidation || !usernamevalidation || !agevalidation) {
    alert("after validation of your infromation seams something wrong");
}else{
    let user = {
        username: Username,
        email: Email,
        password: Password,
        age: Age
    }; 
    Databaseuser.push(user)
    console.log("you signing up porfect");
    

}

//  && Username.charAt(0).toLocaleUpperCase + Username.slice(1) 



console.log(Databaseuser);

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in,
//              or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.