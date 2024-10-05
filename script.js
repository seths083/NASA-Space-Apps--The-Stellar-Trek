document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    const planetInfoSection = document.getElementById('planet-info');
    const planetName = document.getElementById('planet-name');
    const planetImage = document.getElementById('planet-image');
    const planetDescription = document.getElementById('planet-description');
    const backButton = document.getElementById('back-button');

    planets.forEach(planet => {
        planet.addEventListener('click', () => {
            const planetData = getPlanetData(planet.dataset.planet);
            displayPlanetInfo(planetData);
        });
    });

    backButton.addEventListener('click', () => {
        planetInfoSection.classList.add('hidden');
        document.querySelector('#planets').classList.remove('hidden');
    });

    function displayPlanetInfo(data) {
        planetName.textContent = data.name;
        planetImage.src = data.image;
        planetDescription.textContent = data.description;
        planetInfoSection.classList.remove('hidden');
        document.querySelector('#planets').classList.add('hidden');
    }

    function getPlanetData(planet) {
        const planetsData = {
            Mars: {
                name: 'Mars',
                image: 'assets/images/mars.jpg',
                description: 'Mars is the fourth planet from the Sun and is known as the Red Planet due to its reddish appearance.'
            },
            Jupiter: {
                name: 'Jupiter',
                image: 'assets/images/jupiter.jpg',
                description: 'Jupiter is the largest planet in our solar system and is known for its Great Red Spot.'
            },
            Saturn: {
                name: 'Saturn',
                image: 'assets/images/saturn.jpg',
                description: 'Saturn is famous for its stunning rings, which are made of ice and rock particles.'
            }
        };

        return planetsData[planet];
    }
});

