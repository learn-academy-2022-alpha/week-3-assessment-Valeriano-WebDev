# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. 
Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 
                In JS , the keyword `this` refers to the object one is invoking and/or accessing the key value pair of. 

  Researched answer: 
                The value of `this` is unchangeable. When utilizing strict mode, and called in a function, `this`  is undefined.
                Otherwise, this refers to the global object. Using `this` in a class works similary to using it in a function. `This` acts as a
                regular object.

/**  Reference: **/ 
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
                https://www.w3schools.com/js/js_this.asp

2. What is React? Why would you use it?

  Your answer:
                React is a library/collection of code snippets that allows developers to more easily create dynamic single page websites or applications.  
                Developers are able to use JSX syntax which combines the structure of a normal html file with the code and behavior of a JS file all into one. 

  Researched answer: 
                Using React allows for simpler oversight of the `View` aspect of an application. It creates a dynamic environment where data can be exchanged
                and manipulated without having to reload the page. It is scalable , flexible and efficient when used to separate, update and render all 
                of ones various components.

/**  Reference: **/
                https://reactjs.org/

3. Which lifecycle method is required in a React class component?

  Your answer: 
                The render method is required in a React class component

  Researched answer: 
                The lifecycle methods of a React component consist of , Mounting, Updating an Unmounting. In otherwords: 1. When an element is added to the DOM 
                2. When the element is updated or changed and 3. When an element is removed. 

/**  Reference: **/ 
                https://www.w3schools.com/react/react_lifecycle.asp

4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer:  As previously stated, JSX is a syntax extention the combines both the structure on a normal HTML file and the logic/behavior of a JS file all into one. Use of this syntactical 
                sugar allows for both html and normal JS code to be written and displayed without having to use separate files for regular HTML and JS syntax. 

  Researched answer: 
                The main difference would be that using JSX requires the return statement to return a single parent element. Failure to do so will cause a compling error. 
                A fragment <> </> or the use of a single parent div circumvents this problem.

/**  Reference: **/ 
                https://www.geeksforgeeks.org/jsx-full-form/


5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: 
                Yarn is a software that manages dependency files.  When running Yarn , package.json , package-lock.json
                and yarn.lock are modified using a React application  

  Researched answer: 
                Running yarn will install dependencies that have been recently added to the package.json but
                have yet to be added in the yarn.lock. In otherwords, the version and contents of the yarn.lock will
                mirror what is contained in the json file. Running yarn install will overwrite the yarn.lock file regardless
                if has already been updated.

/**  Reference: **/ 
                https://11sigma.com/blog/2021/09/03/yarn-lock-how-it-works-and-what-you-risk-without-maintaining-yarn-dependencies-deep-dive/#:~:text=lock%20is%20the%20main%20source,to%20version%20restrictions%20in%20package.


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: 
                It is a function that has not been named.

  Researched answer: 
                An anonymous function can be stored in a variable and invoked using the variable name.

/**  Reference: **/ 
                https://www.w3schools.com/js/js_function_definition.asp

## Looking Ahead: Terms for Next Week

1. Conditional rendering: 
                Rendering components that meet requirements. An example is granting add/delete priveleges if a user that is
                logged in is an admin. 
/**  Reference: **/
                https://reactjs.org/docs/conditional-rendering.html

2. Props:       
                Short for properties.  The are "arguments" that are passed into React components 
/**  Reference: **/
                https://www.w3schools.com/react/react_props.asp

3. JavaScript Events: 
                The result that occurs based on a user or browser action on a page.
/**  Reference: **/
                https://www.tutorialspoint.com/javascript/javascript_events.htm

4. Object-oriented programming:
                The foundational blueprint and layout of a software program that utilizes reusable code 
                to create instances of objects. These blueprints of code known as classes can be used to
                represent a variety of things which contain various attributes.
/**  Reference: **/
                 https://www.educative.io/blog/object-oriented-programming

5. Ruby:
                An OOP (object oriented programming) language designed for the purpose of simplicity  and ease of use.
                All primitive datatypes are objects in this language.
/**  Reference: **/
                https://www.ruby-lang.org/en/