function adoptPet() { 

    alert("Thank you for your interest in adopting! Our team will contact you soon."); 

} 
const pets = [
            { "name": "Buddy", "type": "Dog", "age": 3, "img": "Assets/Img/dogs/dog01.jpg" },
            { "name": "Buddy", "type": "Dog", "age": 3, "img": "Assets/Img/dogs/dog02.jpg" },
            { "name": "Whiskers", "type": "Cat", "age": 2, "img": "Assets/Img/cats/cat01.jpg" },
            { "name": "Mittens", "type": "Cat", "age": 2, "img": "Assets/Img/cats/cat02.jpg" }
        ];

        function adoptPet() {
            alert("Thank you for choosing to adopt!");
        }

        function loadPets() {
            console.log('Loading pets...');
            const petList = document.getElementById('pet-list');
            pets.forEach(pet => {
                const petItem = document.createElement('div');
                petItem.className = 'pet';
                petItem.innerHTML = `
                    <img src="${pet.img}" alt="${pet.name}">
                    <h3>${pet.name}</h3>
                    <p>Type: ${pet.type}</p>
                    <p>Age: ${pet.age} years</p>
                    <button onclick="adoptPet()">Adopt Now</button>
                `;
                petList.appendChild(petItem);
            });
            console.log('Pets loaded successfully.');
        }

        document.addEventListener('DOMContentLoaded', loadPets);