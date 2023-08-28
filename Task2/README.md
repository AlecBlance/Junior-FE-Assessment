# Task 2

**Parts**
_public/_ - all the necessary assets for the page such as stylesheets
_src/_ - where all the UI components or react jsx codes reside

- _assets/_ - tailwind directives can be found here
- _componenets_ - this holds the UI components needed for the sections of the page
  - Task and TaskHolder
  - Form
  - Notification
- _services_ - this manages the information stored in the localStorage
- _App.jsx_ and _main.jsx_ bootstraps all the components to create the whole page
- Files outside of the folders are all configurations of the libraries and server

Task 2 uses two hooks for state management and side effects, these are _useState_ and _useEffect_. They only found on the components mentioned above.
