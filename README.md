🚀 GitFlow Login App (Day 11) => A mini login form project built to demonstrate production-ready Git workflows using the Git CLI, along with modern JavaScript form handling and UI design.

✨ Features :

 ✅ Email and Password Inputs
 ✅ Password Strength Indicator (Weak / Medium / Strong based on regex logic)
 ✅ “Remember Me” Option — saves user email in localStorage
 ✅ JavaScript-based Validation (not HTML5-only)
 ✅ Error Handling for incorrect inputs
 ✅ Fully Responsive & Styled UI (HTML + CSS)
 ✅ Modular, readable JavaScript structure

🧠 JavaScript Logic :

 ✅ Password strength is evaluated using:
  - Length
  - Presence of uppercase letters, digits, and symbols
 ✅ Validation includes:
  - Email format check (contains @)
  - Password length minimum check
 ✅ "Remember Me" logic:
  - If checked, email is stored in localStorage
  - If not, localStorage is cleared on submit
 ✅ Dynamic DOM manipulation to show errors and strength text

🧪 Technologies Used :

- HTML5
- CSS3
- JavaScript
- Git CLI
- GitHub
- GitHub Pages (for deployment)

🔧 Git Branching : 

 ✅ main: Stable production branch. All merged, working code lives here.
 ✅ feature/login-form: Feature branch used to build and test the login UI and JS logic.

🧾 Git CLI Commands Used-

>  git init   # Initialize repository

>  git branch -b feature/login-form   # Create branches
   git checkout -b main

>  git add .                                              # Stage and commit
   git commit -m "Initial commit with login form logic"

>  git checkout main              # Merge feature branch into main
   git merge feature/login-form

>  git remote add origin https://github.com/your-username/Day-11-GitFlow-App.git    # Remote setup

>  git push -u origin main                  # Push branches
   git push -u origin feature/login-form

🚀 Deployed on GitHub Pages :

   Click to View Live App => https://sujatacheeta.github.io/Day-11---GitFlow-App/