const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
const staticWidth = window.innerWidth;
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const directionalLight = new THREE.DirectionalLight( 0x8D99AE, 1 );
directionalLight.position.z = 1;
directionalLight.position.y = 1;
scene.add( directionalLight );
// var light = new THREE.AmbientLight("0xffffff");
// light.intensity = 1.3;
// scene.add(light);

var model;
var loader = new THREE.GLTFLoader();
    loader.load("./models/helmet.glb", function ( gltf ) {
    model = gltf.scene;
    scene.add( model )
});

function animate() {
    renderer.setSize( window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.position.z = 0.4*(staticWidth/window.innerWidth);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.updateProjectionMatrix();
    requestAnimationFrame( animate );
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