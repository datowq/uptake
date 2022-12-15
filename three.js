const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
var light = new THREE.AmbientLight("#EDCD58");
scene.add(light);

camera.position.z = 0.5;

var model;
var loader = new THREE.GLTFLoader();
loader.load("./models/helmet.glb", function ( gltf ) {
model = gltf.scene;
scene.add( model )
});

function animate() {
requestAnimationFrame( animate );
//if (model) model.position.y += 0.001;
renderer.render( scene, camera );
}
animate();

window.addEventListener('mousemove', onMouseMove, false);

function onMouseMove(event) {
    if (model) {
        model.rotation.y = ((event.clientX - window.innerWidth) * (1/window.innerWidth))+0.5;
        model.rotation.x = ((event.clientY - window.innerHeight) * (1/window.innerHeight))+0.5;
    }
}