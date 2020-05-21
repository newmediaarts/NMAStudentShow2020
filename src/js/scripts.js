import { interfaceStudents, animationStudents } from './data/students'

// Dynamically Generate Students
const animationParent = document.querySelector('.animation .students-container');
const interfaceParent = document.querySelector('.interface .students-container');

// function makeStudentElement({ name, website, initialImage, hoveredImage }) {
//     return `<div class="student">
//                 <a href="${website}">
//                     <img class="profile" src="${initialImage}"></img>
//                     <h3 class="name">${name}</h3>
//                     <h4>${website}</h4>

//                 </a>
//             </div>`
// };

// TOMY'S EDITS_________________
function makeStudentElement({ name, website, room, time, initialImage, hoveredImage }) {
    return `<div class="student">
                <a href="${website}">
                    <img class="profile" src="${initialImage}">
                    <h3 class="name">${name}</h3>
                    <p>${website}</p>
                    <p><strong>${room}</strong></p>
                    <p><strong>${time}</strong></p>
                 
                </a>
            </div>`
};

// function makeAnimStudentElement({ name, website, demoreel, room, initialImage, hoveredImage }) {
//     return `<div class="student">
//                 <a href="${website}">
//                     <img class="profile" src="${initialImage}" />
//                     <h3 class="name">${name}</h3>
//                     <h4>${website}</h4>
//                     <h4>${demoreel}</h4>
//                     <p>${room}</p>
//                     <p>${time}</p>
//                 </a>

//             </div>`
// };

// function createStudents(parent, students) {
//     students.map(student => {
//         parent.innerHTML += makeAnimStudentElement(student)
//     })
// };
// END TOMY'S EDITS _______________________________

function createStudents(parent, students) {
    students.map(student => {
        parent.innerHTML += makeStudentElement(student)
    })
};



createStudents(interfaceParent, interfaceStudents);
createStudents(animationParent, animationStudents);

// Handle Students Hover Effect
const animationStudentsCollection = document.querySelectorAll('.animation .student');
const interfaceStudentsCollection = document.querySelectorAll('.interface .student');

function handleImageHoverEffect(students, studentsArray) {
    students.forEach(student => {
        const studentImage = student.querySelector('img');
        const studentName = student.querySelector('.name').innerText;

        const { hoveredImage, initialImage } = studentsArray.filter(el => el.name === studentName)[0];

        student.addEventListener('mouseenter', () => studentImage.src = hoveredImage);
        student.addEventListener('mouseleave', () => studentImage.src = initialImage);
    })
};

handleImageHoverEffect(interfaceStudentsCollection, interfaceStudents);
handleImageHoverEffect(animationStudentsCollection, animationStudents);
