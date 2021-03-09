//variables : 
var objects = [];
var cube;

//scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf0f0f0 );

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
const geometry = new THREE.PlaneGeometry( 4000, 1500, 320 );
const floor = new THREE.Mesh( geometry, material );
scene.add( floor );
floor.rotation.x = -20.42;
floor.position.y= -465;
floor.rotation.y = 0;

//back-wall
var texture = new THREE.TextureLoader().load( 'rock.jpg' );
const material2 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry2 = new THREE.PlaneGeometry( 4000, 1500, 320 );
const back_wall = new THREE.Mesh( geometry2, material2 );
scene.add(back_wall ); 
back_wall.position.z= -750;
back_wall.position.y= 285.3;

//left-wall
var texture = new THREE.TextureLoader().load( 'rock.jpg' );
const material3 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry3 = new THREE.PlaneGeometry( 1500, 1500, 320 );
const left_wall = new THREE.Mesh( geometry3, material3 );
scene.add(left_wall ); 
left_wall.position.x= -2000;
left_wall.position.y= 285;
left_wall.rotation.y = 20.42;

//right-wall
var texture = new THREE.TextureLoader().load( 'rock.jpg' );
const material4 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry4 = new THREE.PlaneGeometry( 1500, 1500, 320 );
const right_wall = new THREE.Mesh( geometry4, material4 );
scene.add(right_wall ); 
right_wall.position.x= 2000;
right_wall.position.y= 285;
right_wall.rotation.y = -20.42;

//roof
var texture = new THREE.TextureLoader().load( 'rock.jpg' );
const material5 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry5 = new THREE.PlaneGeometry( 4000, 1500, 320 );
const roof = new THREE.Mesh( geometry5, material5 );
scene.add( roof );
roof.rotation.x = 20.42;
roof.position.y= 1035;
roof.rotation.y = 0;



//create cube  
var tab = [] ; 
var i = 0 ; 
function createCube () {
	
	var geometry = new THREE.BoxGeometry( 120, 120, 120 );
	cube = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x00004B } ) );
	tab[i] = cube ; 
	scene.add(tab[i]) ;
	objects.push( tab[i] );
	tab[i].position.x = 0;
	tab[i].position.y = -30;
	i = i+1 ;
;
}

function removeCube () {
	
	tab[i-1].geometry == undefined ;
	tab[i-1].materials == undefined ;
	scene.remove(tab[i-1]) ;
	i= i-1 ; 
	
	}




function createRockCube() {
	var texture = new THREE.TextureLoader().load( 'rock.jpg' );
	var rock_geometry = new THREE.BoxGeometry( 120, 120, 120 );
	var rock_material = new THREE.MeshBasicMaterial( {map: texture} );
	var rock_cube = new THREE.Mesh( rock_geometry, rock_material );
	scene.add( rock_cube );
	objects.push( rock_cube );
	rock_cube.position.x = -200;
	rock_cube.position.y = -30;
}


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