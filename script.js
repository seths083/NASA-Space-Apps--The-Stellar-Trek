// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create moving clouds (basic example)
const cloudGeometry = new THREE.SphereGeometry(10, 32, 32);
const cloudMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(cloud);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cloud.rotation.y += 0.01; // Rotate clouds
    renderer.render(scene, camera);
}
animate();
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

    // Here you would add code to apply the customizations to the character model
    console.log(`Character Color: ${characterColor}, Hat: ${characterHat}`);
});
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

    // Here you would add code to apply the customizations to the character model
    console.log(`Character Color: ${characterColor}, Hat: ${characterHat}`);
});
const launchButton = document.getElementById('launch-button');
const rocket = document.getElementById('rocket');

launchButton.addEventListener('click', () => {
    rocket.classList.add('launch');
    setTimeout(() => {
        alert("Welcome to Space!");
        // Here you can change to the space scene or next part of the game
    }, 2000); // Alert after 2 seconds
});
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
const planetButtons = document.querySelectorAll('.planet-button');
const planetInfo = document.getElementById('planet-info');

planetButtons.forEach(button => {
    button.addEventListener('click', () => {
        planetInfo.textContent = button.getAttribute('data-info');
    });
});

