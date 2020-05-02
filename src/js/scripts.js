import { interfaceStudents, animationStudents } from './data/students'

// Dynamically Generate Students
const interfaceParent = document.querySelector('.interface .students-container');
const animationParent = document.querySelector('.animation .students-container');

function makeStudentElement({ name, website, initialImage, hoveredImage }) {
    return `<div class="student">
                <a href="${website}">
                    <img class="profile" src="${initialImage}"></img>
                    <h4>${website}</h4>
                    <h3 class="name">${name}</h3>
                </a>
            </div>`
};

function createStudents(parent, students) {
    students.map(student => {
        parent.innerHTML += makeStudentElement(student)
    })
};

createStudents(interfaceParent, interfaceStudents);
createStudents(animationParent, animationStudents);

// Handle Students Hover Effect
const interfaceStudentsCollection = document.querySelectorAll('.interface .student');
const animationStudentsCollection = document.querySelectorAll('.animation .student');

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
