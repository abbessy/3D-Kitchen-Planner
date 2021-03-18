//variables : 
var objects = [];
var cube;

//scene
var scene = new THREE.Scene();
//scene.background = new THREE.Color( 0xf0f8ff );

//camera
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 1000;



//renderer
var renderer = new THREE.WebGLRenderer({ alpha : true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );




//adding light
scene.add( new THREE.AmbientLight( 0x0f0f0f ) );
var light = new THREE.SpotLight( 0xffffff, 1 );
light.position.set( 0, 500, 2000 );
scene.add(light);





//controls
const orbitControls = new THREE.OrbitControls( camera, renderer.domElement );
const dragControls = new THREE.DragControls( objects, camera, renderer.domElement );



//fix the window resize problem 
window.addEventListener('resize', function(){
    renderer.setSize(window.innerWidth,window.innerHeight) ; 
    camera.aspect = window.innerWidth / window.innerHeight ; 
    camera.updateProjectionMatrix();
}) ;



//animate 
function animate() {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);
};


// walls 
//floor
var texture = new THREE.TextureLoader().load( 'wood.jpg' );
const material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
const geometry = new THREE.PlaneGeometry( 3000, 1500, 320 );
const floor = new THREE.Mesh( geometry, material );
scene.add( floor );
floor.rotation.x = -20.42;
floor.position.y= -465;
floor.rotation.y = 0;

//roof
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material5 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry5 = new THREE.PlaneGeometry( 3000, 1500, 320 );
const roof = new THREE.Mesh( geometry5, material5 );
scene.add( roof );
roof.rotation.x = 20.42;
roof.position.y= 1035;
roof.rotation.y = 0;

//left-wall
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material3 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry3 = new THREE.PlaneGeometry( 1500, 1500, 320 );
const left_wall = new THREE.Mesh( geometry3, material3 );
scene.add(left_wall ); 
left_wall.position.x= -1500;
left_wall.position.y= 285;
left_wall.rotation.y = 20.42;

//right-wall
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material4 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry4 = new THREE.PlaneGeometry( 1500, 1500, 320 );
const right_wall = new THREE.Mesh( geometry4, material4 );
scene.add(right_wall ); 
right_wall.position.x= 1500;
right_wall.position.y= 285;
right_wall.rotation.y = -20.42;

//back-wall
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material2 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry2 = new THREE.PlaneGeometry( 3000, 1500, 320 );
const back_wall = new THREE.Mesh( geometry2, material2 );
scene.add(back_wall ); 
back_wall.position.z= -750;
back_wall.position.y= 285.3;

//front-wall
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material6 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry6 = new THREE.PlaneGeometry( 3000, 1500, 320 );
const front_wall = new THREE.Mesh( geometry6, material6 );
scene.add(front_wall ); 
front_wall.position.z= 750;
front_wall.position.y= 285.3;
front_wall.rotation.x = 21.99;


//create cube  
var tab = [] ; 
var i = 0 ; 
var cube_x = 350; 
var cube_y = 350;
function createCube () {
	var geometry = new THREE.BoxGeometry( cube_x, cube_y, 350 );
	cube = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x00004B } ) );
	tab[i] = cube ; 
	scene.add(tab[i]) ;
	objects.push( tab[i] );
	tab[i].position.x = 0;
	tab[i].position.y = -289;
	i = i+1 ;
	console.log ("i =", i );
}


function removeCube () {
	tab[i-1].geometry == undefined ;
	tab[i-1].materials == undefined ;
	scene.remove(tab[i-1]) ;
	i= i-1 ; 
	}
	


//create rock_cube
var tab2 = [];
var j = 0 ;
var rock_x= 350 ; 
var rock_y = 350 ;
function createRockCube() {
	var rock_geometry = new THREE.BoxGeometry( rock_y, rock_y, 350 );
	var texture = new THREE.TextureLoader().load( 'rock.jpg' );
	var rock_material = new THREE.MeshBasicMaterial( {map: texture} );
	var rock_cube = new THREE.Mesh( rock_geometry, rock_material );
	tab2[j] = rock_cube ;
	scene.add( tab2[j] );
	objects.push( tab2[j] );
	tab2[j].position.x = -400;
	tab2[j].position.y = -289;
	j = j + 1 ;

	console.log ("j =", j );
}

function removeRockCube () {
	tab2[j-1].geometry == undefined ;
	tab2[j-1].materials == undefined ;
	scene.remove(tab2[j-1]) ;
	j= j-1 ; 
	}



//create element
var tab3 = [] ; 
var k = 0 ; 
var element_x = 300; 
var element_y = 800;
function createEl () {
	var element_geometry = new THREE.BoxGeometry( element_x, element_y, 300 );
	element = new THREE.Mesh( element_geometry, new THREE.MeshLambertMaterial( { color: 0x012803 } ) );
	tab3[k] = element ; 
	scene.add(tab3[k]) ;
	objects.push( tab3[k] );
	tab3[k].position.x = 400;
	tab3[k].position.y = -64;
	k = k+1 ;
	console.log ("k =", k );
}


function removeEl () {
	tab3[k-1].geometry == undefined ;
	tab3[k-1].materials == undefined ;
	scene.remove(tab3[k-1]) ;
	k= k-1 ; 
	}

//create wood element
var tab4 = [];
var l = 0 ;
var wood_x= 300 ; 
var wood_y = 800 ;
function createWoodEl() {
	var wood_geometry = new THREE.BoxGeometry( wood_x, wood_y, 300 );
	var wood_texture = new THREE.TextureLoader().load( 'wood2.jpg' );
	var wood_material = new THREE.MeshBasicMaterial( {map: wood_texture} );
	var wood_el = new THREE.Mesh( wood_geometry, wood_material );
	tab4[l] = wood_el ;
	scene.add( tab4[l] );
	objects.push( tab4[l] );
	tab4[l].position.x = -800;
	tab4[l].position.y = -64;
	l = l + 1 ;

	console.log ("l =", l );
}

function removeWoodEl () {
	tab4[l-1].geometry == undefined ;
	tab4[l-1].materials == undefined ;
	scene.remove(tab4[l-1]) ;
	l= l-1 ; 
	}











function disableControl(){
	orbitControls.enabled = false;
}

function enableControl(){
	orbitControls.enabled = true;
}


function calculer () {
	alert ("Your total is : \n" + (i*cube_x*cube_y + j*rock_x*rock_y + k*element_x*element_y + l*wood_x*wood_y) ) ; 
}



animate();
