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
