// Practice: Student Components
// Create a new project sub-directory in your workspace/javascript directory.
// Paste the array of student objects above into your JavaScript file.
// Copy the createStudentComponent function into your code.
// Add the following styles to your CSS.
// #container {
//     display: flex;
//     flex-direction: column;
// }

// .pushRight {
//     margin-left: auto;
// }

// .xx-large {
//     font-size: 3em;
// }

// .bordered {
//     border-width: 1px;
//     border-color: goldenrod;
//     border-style: solid;
// }

// .dashed {
//     border-style: dashed;
// }

// .section--padded {
//     padding: 10px;
// }

// .passing {
//     color: green;
// }

// .failing {
//     color: orange;
// }
// Add a container article to your HTML.
// <article id="container"></article>
// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
// for (const student of students) {
//     let studentComponent = ""
//     if (student.score >= 60) {
//         studentComponent = ...
//     } else {
//         studentComponent = ...
//     }
// }
// If a student is passing, then the structure should look like the following.

// <div class="student">
//     <h1 class="xx-large passing">Student Name</h1>
//     <section class="bordered dashed section--padded">Subject</section>
//     <aside class="pushRight">Additional information</aside>
// </div>

const students = [{
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// const createStudentComponent = (name, subject, info, score) => {
//     return `
//         <div class="student">
//             <h1 class="xx-large ${score}">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside>${info}</aside>
//         </div>
//     `
// }

// const studentContainer = document.querySelector("#container")


// for (let i = 0; i < students.length; i++) {
//     const student = students[i]
//     if (student.score >= 60) {
//         studentContainer.innerHTML += createStudentComponent(
//             student.name,
//             student.subject,
//             student.info,
//             "passing"
//         )
//     } else {
//         studentContainer.innerHTML += createStudentComponent(
//             student.name,
//             student.subject,
//             student.info,
//             "failing"
//         )
//     }
// }

//**********************************************************************************

// Practice: One Object to Rule Them All
// Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

// Then refactor your string interpolation code to use the object properties.

// const createStudentComponent = (student) => {
//     if (student.score >= 60) { 
//         status = "passing"
//     } else {
//         status = "failing"
//     };
//         return `
//         <div class="student">
//             <h1 class="xx-large ${status}">${student.name}</h1>
//             <section class="bordered dashed section--padded">${student.subject}</section>
//             <aside>${student.info}</aside>
//         </div>
//     `
// }

// const studentContainer = document.querySelector("#container")


// for (let i = 0; i < students.length; i++) {
//     studentContainer.innerHTML += createStudentComponent(students[i])
// }

// *****************************************************************
// Challenge: Composition of Smaller Components
// Write functions that build the sub-components of the larger student component.

// h1
// section
// aside
// Invoke those functions inside the createStudentComponent function to build the parent <div>.

// const createStudentComponent = (student) => `
//     <div id="student">
//         ${h1(student.name)}
//         ${section(student.subject)}
//         ${aside(student.info)}
//     </div>
// `

// const h1 = (name, status) => `<h1 class="xx-large ${status}">${name}</h1>`;
// const section = (subject) => `<section class="bordered dashed section--padded">${subject}</section>`;
// const aside = (info) => `<aside>${info}</aside>`;

// const createStudentComponent = (student) => {
//     let status;
//     if (student.score >= 60) {
//         status = "passing"
//     } else {
//         status = "failing"
//     };
//     return `
//         <div class="student">
//          ${h1(student.name, status)}
//          ${section(student.subject)} 
//          ${aside(student.info)}
//         </div>
//     `
// }

// const studentContainer = document.querySelector("#container")


// for (let i = 0; i < students.length; i++) {
//     studentContainer.innerHTML += createStudentComponent(students[i])
// }

// ***********************************************************************
// Challenge: Generic HTML Function
// Look at the three functions you created to build an h1, a section, and an aside. Notice that each one follows the same pattern of accepting a single argument - a string - and outputting a single HTML component. Since there is a pattern, you can consider writing a single function that generalizes the creation of an HTML component even further.

// Create one function that will generate any HTML component, with any content. It should be defined with three arguments.

// The type of HTML component to make
// The content of the component
// The value of the class attribute
// const createStudentComponent = (student) => `
//     <div id="student">
//         ${element("h1", student.name, "xx-large passing")}
//         ${element("section", student.subject, "bordered dashed section--padded")}
//         ${element("aside", student.info, "pushRight")}
//     </div>
// `

const element = (tag, input, classNames) => {
   return `<${tag} class="${classNames}">${input}</${tag}>`;
}

const createStudentComponent = (student) => {
    if (student.score >= 60) {
        return `
    <div id="student">
        ${element("h1", student.name,"xx-large passing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>
`
    } else {
        return `
    <div id="student">
        ${element("h1", student.name, "xx-large failing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>
`
    };
}

const studentContainer = document.querySelector("#container")

for (let i = 0; i < students.length; i++) {
    studentContainer.innerHTML += createStudentComponent(students[i])
}