import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



//VARIABLES
let width = window.innerWidth
let height = window.innerHeight


console.log(width, height);


//CREAT SCENE AND CAMERA 
const scene = new THREE.Scene();
const camera = new  THREE.PerspectiveCamera(88, width / height, 0.1, 100)
camera.position.set(0, 0, 20);


//CREATE A GEOMETRY


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xeb3434 } );



const cube = new THREE.Mesh( geometry, material );


var mx = -5; 
const myArray = [];

for (var i = 0;i< 5; i++) {
  var mesh = new THREE.Mesh( geometry, material );
  mesh.position.x = mx;
  scene.add( mesh );
  mx+= 1.5;
  myArray.push(mesh);
  
}



// scene.add( cube );


function handleResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.render(scene, camera);
  }
  
  
  window.addEventListener('resize', handleResize);


//CREATE A RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const container = document.querySelector('#threejs-container');
container.append(renderer.domElement);


//CREATE MOUSE CONTROL
const controls = new OrbitControls( camera, renderer.domElement );

//ANIMATE AND RENDER
function animate() {
    requestAnimationFrame( animate );
for(let i = 0; i < myArray.length; i++){
  
  myArray[i].rotation.z += 0.1;
  myArray[i].rotation.y += 0.1;


}
  
    renderer.render( scene, camera );
    
  }
  
  
  animate();