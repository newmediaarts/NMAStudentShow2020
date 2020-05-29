import images from "../img/*.jpg";
import { interfaceStudents, animationStudents } from './data/students'

// Dynamically Generate Students
const animationParent = document.querySelector('.animation .students-container');
const interfaceParent = document.querySelector('.interface .students-container');

const imagesArr = Object.keys(images);

function makeStudentElement({ name, website = '', demoreel = '' }, isAnimation) {
    const firstName = name.split(' ')[0].toLowerCase();
    let initialImage;

    imagesArr.map((img, i) => {
        if (img.includes(firstName + '1')) {
            initialImage = Object.values(images)[i]
        }
    })


    return `<div class="student">
                    <img class="profile" src="${initialImage}" alt="${name}" />
                    <h3 class="name">${name}</h3>
                    <a href="${website}"><p>View Portfolio Site</p></a>
                    ${isAnimation ? `
                    <a href="${demoreel}"><p>Demo Reel</p></a>` : ''}
            </div>`
};

function createStudents(parent, students, isAnimation = false) {
    students.map(student => {
        parent.innerHTML += makeStudentElement(student, isAnimation)
    })
};

createStudents(interfaceParent, interfaceStudents);
createStudents(animationParent, animationStudents, true);

// Handle Students Hover Effect
const animationStudentsCollection = document.querySelectorAll('.animation .student');
const interfaceStudentsCollection = document.querySelectorAll('.interface .student');

function handleImageHoverEffect(students, studentsArray) {
    students.forEach(student => {
        const studentImage = student.querySelector('img');
        const studentName = student.querySelector('.name').innerText;
        const firstName = studentName.split(' ')[0].toLowerCase();

        let hoveredImage,
            initialImage;

        imagesArr.map((img, i) => {
            if (img.includes(firstName + '1')) {
                initialImage = Object.values(images)[i]
            }
            if (img.includes(firstName + '2')) {
                hoveredImage = Object.values(images)[i]
            }
        })

        student.addEventListener('mouseenter', () => studentImage.src = hoveredImage);
        student.addEventListener('mouseleave', () => studentImage.src = initialImage);
    })
};

handleImageHoverEffect(interfaceStudentsCollection, interfaceStudents);
handleImageHoverEffect(animationStudentsCollection, animationStudents);