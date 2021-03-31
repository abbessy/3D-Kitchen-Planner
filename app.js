
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
var renderer = new THREE.WebGLRenderer({ antialias : true,alpha : true});
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


// create cuisine 



//floor
var texture = new THREE.TextureLoader().load( 'wood.jpg' );
const material1 = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
const geometry1 = new THREE.PlaneGeometry( 3000, 1500, 320 );
const floor = new THREE.Mesh( geometry1, material1 );
floor.rotation.x = -20.42;
floor.position.y= -465;
floor.rotation.y = 0;

//roof
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material5 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry5 = new THREE.PlaneGeometry( 3000, 1500, 320 );
const roof = new THREE.Mesh( geometry5, material5 );
roof.rotation.x = 20.42;
roof.position.y= 1035;
roof.rotation.y = 0;

//left-wall
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material3 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry3 = new THREE.PlaneGeometry( 1500, 1500, 320 );
const left_wall = new THREE.Mesh( geometry3, material3 );
left_wall.position.x= -1500;
left_wall.position.y= 285;
left_wall.rotation.y = 20.42;

//right-wall
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material4 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry4 = new THREE.PlaneGeometry( 1500, 1500, 320 );
const right_wall = new THREE.Mesh( geometry4, material4 );
right_wall.position.x= 1500;
right_wall.position.y= 285;
right_wall.rotation.y = -20.42;

//back-wall
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material2 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry2 = new THREE.PlaneGeometry( 3000, 1500, 320 );
const back_wall = new THREE.Mesh( geometry2, material2 );
back_wall.position.z= -750;
back_wall.position.y= 285.3;

//front-wall
var texture = new THREE.TextureLoader().load( 'wall.jpg' );
const material6 = new THREE.MeshBasicMaterial( {map: texture} );
const geometry6 = new THREE.PlaneGeometry( 3000, 1500, 320 );
const front_wall = new THREE.Mesh( geometry6, material6 );
front_wall.position.z= 750;
front_wall.position.y= 285.3;
front_wall.rotation.x = 21.99;


//cuisine2

//floor
var texture2 = new THREE.TextureLoader().load( 'parterre.jpg' );
const material12 = new THREE.MeshBasicMaterial( {map: texture2, side: THREE.DoubleSide} );
const geometry12 = new THREE.PlaneGeometry( 2000, 1500, 320 );
const floor2 = new THREE.Mesh( geometry12, material12 );
floor2.rotation.x = -20.42;
floor2.position.y= -465;
floor2.rotation.y = 0;

//roof
var texture2 = new THREE.TextureLoader().load( 'wall2.jpg' );
const material52 = new THREE.MeshBasicMaterial( {map: texture2} );
const geometry52 = new THREE.PlaneGeometry( 2000, 1500, 320 );
const roof2 = new THREE.Mesh( geometry52, material52 );
roof2.rotation.x = 20.42;
roof2.position.y= 1035;
roof2.rotation.y = 0;

//left-wall
var texture2 = new THREE.TextureLoader().load( 'wall2.jpg' );
const material32 = new THREE.MeshBasicMaterial( {map: texture2} );
const geometry32 = new THREE.PlaneGeometry( 1500, 1500, 320 );
const left_wall2 = new THREE.Mesh( geometry32, material32 ); 
left_wall2.position.x= -1000;
left_wall2.position.y= 285;
left_wall2.rotation.y = 20.42;

//right-wall
var texture2 = new THREE.TextureLoader().load( 'wall2.jpg' );
const material42 = new THREE.MeshBasicMaterial( {map: texture2} );
const geometry42 = new THREE.PlaneGeometry( 1500, 1500, 320 );
const right_wall2 = new THREE.Mesh( geometry42, material42 ); 
right_wall2.position.x= 1000;
right_wall2.position.y= 285;
right_wall2.rotation.y = -20.42;

//back-wall
var texture2 = new THREE.TextureLoader().load( 'wall2.jpg' );
const material22 = new THREE.MeshBasicMaterial( {map: texture2} );
const geometry22 = new THREE.PlaneGeometry( 2000, 1500, 320 );
const back_wall2 = new THREE.Mesh( geometry22, material22 );
back_wall2.position.z= -750;
back_wall2.position.y= 285.3;

//front-wall
var texture2 = new THREE.TextureLoader().load( 'wall2.jpg' );
const material62 = new THREE.MeshBasicMaterial( {map: texture2} );
const geometry62 = new THREE.PlaneGeometry( 2000, 1500, 320 );
const front_wall2 = new THREE.Mesh( geometry62, material62 );
front_wall2.position.z= 750;
front_wall2.position.y= 285.3;
front_wall2.rotation.x = 21.99;


function createCuisine1() {
	scene.add(front_wall ); 
	scene.add(back_wall ); 
	scene.add(right_wall ); 
	scene.add(left_wall ); 
	scene.add( roof ); 
	scene.add( floor );

	scene.remove(floor2) ;
	scene.remove(roof2) ;
	scene.remove(left_wall2) ;
	scene.remove(right_wall2) ;
	scene.remove(back_wall2) ;
	scene.remove(front_wall2 ); 
}

function createCuisine2() {
	scene.add(front_wall2 ); 
	scene.add(back_wall2 ); 
	scene.add(right_wall2 ); 
	scene.add(left_wall2 ); 
	scene.add( roof2 ); 
	scene.add( floor2 );

	scene.remove(floor) ;
	scene.remove(roof) ;
	scene.remove(left_wall) ;
	scene.remove(right_wall) ;
	scene.remove(back_wall) ;
	scene.remove(front_wall ); 
}


//create fridge  
var tab = [] ; 
var i = 0 ; 
var fridge_x = 350; 
var fridge_y = 350;
function createFridge () {
	var objLoader = new THREE.OBJLoader();
		objLoader.setPath('/examples/3d-obj-loader/assets/fridge/') ;
		objLoader.load('fridge.obj', function (object) {
			tab[i] = object ;
			tab[i].position.y = -400 ;
			tab[i].position.x = -600 ;
			tab[i].traverse( ( o )=> {
				if ( o.isMesh ) objects.push( o );
			});
			scene.add(tab[i]);
	}) ; 
	i = i+1 ;
	console.log ("i =", i );
}


function removeFridge () {
	scene.remove(tab[i]) ;
	i= i-1 ; 
	}


//create Left Fridge
var tab2 = [];
var j = 0 ;
var rock_x= 350 ; 
var rock_y = 350 ;
function createLeftFridge() {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-fridge/') ;
	objLoader.load('left_fridge.obj', function (object) {
		tab2[j] = object ;
		tab2[j].position.y = -400 ;
		tab2[j].position.x = -600 ;
		tab2[j].traverse( ( o )=> {
			if ( o.isMesh ) objects.push( o );
		});
		scene.add(tab2[j]);
}) ; 
		j = j+1 ;
	console.log ("j =", j );
}



function removeLeftFridge () {

	scene.remove(tab2[j]) ;
	j= j-1 ; 
	}


//create right Fridge
var tab3 = [];
var k = 0 ;

function createRightFridge() {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-fridge/') ;
	objLoader.load('right_fridge.obj', function (object) {
		tab3[k] = object ;
		tab3[k].position.y = -400 ;
		tab3[k].position.x = -600 ;
		tab3[k].traverse( ( o )=> {
			if ( o.isMesh ) objects.push( o );
		});
		scene.add(tab3[k]);
}) ; 
		k = k+1 ;
	console.log ("k =", k );
}


function removeRightFridge () {
	
	scene.remove(tab3[k]) ;
	k = k-1 ; 
	}

//create back Fridge
var tab4 = [];
var l = 0 ;

function createBackFridge() {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-fridge/') ;
	objLoader.load('back_fridge.obj', function (object) {
		tab4[l] = object ;
		tab4[l].position.y = -400 ;
		tab4[l].position.x = -600 ;
		tab4[l].traverse( ( o )=> {
			if ( o.isMesh ) objects.push( o );
		});
		scene.add(tab4[l]);
}) ; 
		l = l+1 ;
	console.log ("l =", l );
}

function removeBackFridge () {
	
	scene.remove(tab4[l]) ;
	l = l-1 ; 
	}


//create gaz
var tab5 = [] ; 
var m = 0 ; 
var element_x = 300; 
var element_y = 800;
function createGaz() {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/gaz/') ;
	objLoader.load('gaz.obj', function (object) {
	tab5[m] = object ;
	tab5[m].position.x = 500 ;
	tab5[m].position.y = -300 ;
	tab5[m].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab5[m]);
}) ; 
	m = m + 1 ;
	console.log ("m =", m );
}


function removeGaz () {
	
	scene.remove(tab5[m]) ;
	m= m-1 ; 
	}

//create left gaz
var tab6 = [];
var n = 0 ;
var left_gaz_x= 300 ; 
var left_gaz_y = 800 ;
function createLeftGaz() {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-gaz/') ;
	objLoader.load('left_gaz.obj', function (object) {
	tab6[n] = object ;
	tab6[n].position.x = 500 ;
	tab6[n].position.y = -300 ;
	tab6[n].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab6[n]);
}) ; 
	n = n + 1 ;
	console.log ("n =", n );
}

function removeLeftGaz () {

	scene.remove(tab6[n]) ;
	n= n-1 ; 
}

//create right gaz
var tab7 = [];
var o = 0 ;
var right_gaz_x= 300 ; 
var right_gaz_y = 800 ;
function createRightGaz() {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-gaz/') ;
	objLoader.load('right_gaz.obj', function (object) {
	tab7[o] = object ;
	tab7[o].position.x = 500 ;
	tab7[o].position.y = -300 ;
	tab7[o].traverse( ( obj )=> {

		if ( obj.isMesh ) objects.push( obj );
	
	} );
	scene.add(tab7[o]);
}) ; 
	o = o + 1 ;
	console.log ("o =", o );
}

function removeRightGaz () {

	scene.remove(tab7[o]) ;
	o= o-1 ; 
}

//create back gaz
var tab8 = [];
var p = 0 ;
var back_gaz_x= 300 ; 
var back_gaz_y = 800 ;
function createBackGaz() {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-gaz/') ;
	objLoader.load('back_gaz.obj', function (object) {
	tab8[p] = object ;
	tab8[p].position.x = 500 ;
	tab8[p].position.y = -300 ;
	tab8[p].traverse( ( obj )=> {

		if ( obj.isMesh ) objects.push( obj );
	
	} );
	scene.add(tab8[p]);
}) ; 
	p = p + 1 ;
	console.log ("p =", p );
}

function removeBackGaz () {

	scene.remove(tab8[p]) ;
	p= p-1 ; 
}


function rotateRightFridge() {
	tab[i].rotation.y += 0.1 ;
}

function rotateLeftFridge() {
	tab[i].rotation.y -= 0.1 ;
}
	



function moveElement(){
	orbitControls.enabled = false;
}

function viewElement(){
	orbitControls.enabled = true;
}


function calculer () {
	
	alert( "Nombre d'éléments : \n" + (i+j+k+l) + "\n \n \n" +
		"Total : \n" + (i*fridge_y*fridge_y + j*rock_x*rock_y + k*element_x*element_y + l*wood_x*wood_y)/1000 + " dt " 
		
	);
}



animate();
