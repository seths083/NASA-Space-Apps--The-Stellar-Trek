// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Add moving clouds
const cloudGeometry = new THREE.SphereGeometry(5, 32, 32);
const cloudMaterial = new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load('path/to/your/cloudTexture.png'), // Add your cloud texture here
    transparent: true 
});
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(clouds);

// Camera position
camera.position.z = 10;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    clouds.rotation.y += 0.01; // Rotate clouds
    renderer.render(scene, camera);
}
animate();

// Character customization
const colorInput = document.getElementById('character-color');
const hatSelect = document.getElementById('character-hat');
const startButton = document.getElementById('start-adventure');

startButton.addEventListener('click', () => {
    // Save character customizations
    const characterColor = colorInput.value;
    const characterHat = hatSelect.value;

    // Hide customization menu and show rocket launch
    document.getElementById('customization-menu').classList.add('hidden');
    document.getElementById('rocket-launch').classList.remove('hidden');

    console.log(`Character Color: ${characterColor}, Hat: ${characterHat}`);
});

// Rocket Launch Animation
const launchButton = document.getElementById('launch-button');
const rocket = document.getElementById('rocket');

launchButton.addEventListener('click', () => {
    rocket.classList.add('launch');
    setTimeout(() => {
        alert("Welcome to Space!");
        // Show space info section after launch
        document.getElementById('rocket-launch').classList.add('hidden');
        document.getElementById('space-info').classList.remove('hidden');
    }, 2000); // Alert after 2 seconds
});

// Space Facts
const facts = [
    "The Voyager 1 spacecraft is the farthest human-made object from Earth.",
    "A day on Venus is longer than a year on Venus.",
    "Neutron stars are so dense that a sugar-cube-sized amount would weigh as much as all of humanity."
];
let factIndex = 0;
const factsContainer = document.getElementById('facts');
const nextFactButton = document.getElementById('next-fact');

nextFactButton.addEventListener('click', () => {
    factIndex = (factIndex + 1) % facts.length;
    factsContainer.textContent = facts[factIndex];
});

// Display the first fact when the page loads
factsContainer.textContent = facts[factIndex];

// Exoplanet Interaction
const planetButtons = document.querySelectorAll('.planet-button');
const planetInfo = document.getElementById('planet-info');

planetButtons.forEach(button => {
    button.addEventListener('click', () => {
        planetInfo.textContent = button.getAttribute('data-info');
    });
});

