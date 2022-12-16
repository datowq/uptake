const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
const staticWidth = window.innerWidth;
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
var light = new THREE.AmbientLight("#EDCD58");
scene.add(light);  

const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
directionalLight.position.z = 1;
directionalLight.position.y = 1;
scene.add( directionalLight );

var model;
var loader = new THREE.GLTFLoader();
loader.load("./models/anime.glb", function ( gltf ) {
    model = gltf.scene;

    model.position.y -= 0.8;
    model.position.x -= 0.1;

    scene.add( model )
});

function animate() {
    renderer.setSize( window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.position.z = 1.3*(staticWidth/window.innerWidth);
    camera.updateProjectionMatrix();
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();