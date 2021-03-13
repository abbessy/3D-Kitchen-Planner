//variables : 
var objects = [];
var cube;

//scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf0f8ff );

//camera
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 1000;



//renderer
var renderer = new THREE.WebGLRenderer();
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
	tab[i].position.y = -30;
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
	tab2[j].position.y = -30;
	j = j + 1 ;

	console.log ("j =", j );
}

function removeRockCube () {
	tab2[j-1].geometry == undefined ;
	tab2[j-1].materials == undefined ;
	scene.remove(tab2[j-1]) ;
	j= j-1 ; 
	}


	function calculer () {
		alert ("Your total is : \n" + (i*cube_x*cube_y + j*rock_x*rock_y) ) ; 
	}

//robots
function createRobot() {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/') ;
	objLoader.load('r2-d2.obj', function (object) {
		object.position.x = 500 ;
		object.position.y = -100 ;
		object.traverse( ( o )=> {

			if ( o.isMesh ) objects.push( o );
		
		} );
		scene.add(object);
}) ; 
}

function createRobot2() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('/examples/3d-obj-loader/assets/') ; 
	mtlLoader.load('r2-d2.mtl',  (materials)=> {
	materials.preload(); 
		
		var objLoader2 = new THREE.OBJLoader();
		objLoader2.setMaterials(materials);
		objLoader2.setPath('/examples/3d-obj-loader/assets/') ;
		objLoader2.load('r2-d2.obj',  (object2) =>{
			object2.position.x = 300 ;
			object2.position.y = -100 ;
			object2.traverse( ( o ) => {

				if ( o.isMesh ) objects.push( o );
			
			} );
		scene.add(object2);
		});
})
}




function disableControl(){
	orbitControls.enabled = false;
}

function enableControl(){
	orbitControls.enabled = true;
}





animate();
