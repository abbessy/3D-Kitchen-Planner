
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


let a = 0 ; 
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
	a++ ; 
	console.log ("a = ", a);
}

let b = 0 ; 
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
	b++;
	console.log ("b = ", b);
}

function supprimer() {
	document.getElementById("popup-2").classList.toggle("active");
	document.getElementById("demo2").innerHTML =("Il n'existe aucun objet à supprimer.");
}


//create fridge  
var tab = [] ; 
var i = 0 ; 
var fridge_x = 350; 
var fridge_y = 350;
var fridge_z = 350;
function createFridge () {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
		objLoader.setPath('/examples/3d-obj-loader/assets/fridge/') ;
		objLoader.load('fridge.obj', function (object) {
			tab[i] = object ;
			tab[i].position.y = -400 ;
			tab[i].position.x = -600 ;
			tab[i].position.z = -570 ;
			tab[i].traverse( ( o )=> {
				if ( o.isMesh ) objects.push( o );
			});
			scene.add(tab[i]);
	}) ; 
	i = i+1 ;
	console.log ("i =", i );
}
}


function removeFridge () {

	if (i == 0) {
		supprimer();
	}
	else {
		scene.remove(tab[i]) ;
		i= i-1 ; 
	}
	}


//create Left Fridge
var tab2 = [];
var j = 0 ;
var left_fridge_x= 350 ; 
var left_fridge_y = 350 ;
var left_fridge_z = 350 ;
function createLeftFridge() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-fridge/') ;
	objLoader.load('left_fridge.obj', function (object) {
		tab2[j] = object ;
		tab2[j].position.y = -400 ;
		tab2[j].position.x = -870 ;
		tab2[j].traverse( ( o )=> {
			if ( o.isMesh ) objects.push( o );
		});
		scene.add(tab2[j]);
}) ; 
		j = j+1 ;
	console.log ("j =", j );
}
}



function removeLeftFridge () {

	if (j == 0) {
		supprimer(); 
	}
	else {
		scene.remove(tab2[j]) ;
		j= j-1 ; 
	}
	}


//create right Fridge
var tab3 = [];
var k = 0 ;
var right_fridge_x = 350 ;
var right_fridge_y = 350 ;
var right_fridge_z = 350 ;
function createRightFridge() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-fridge/') ;
	objLoader.load('right_fridge.obj', function (object) {
		tab3[k] = object ;
		tab3[k].position.y = -400 ;
		tab3[k].position.x = 780 ;
		tab3[k].position.z = 100 ;
		tab3[k].traverse( ( o )=> {
			if ( o.isMesh ) objects.push( o );
		});
		scene.add(tab3[k]);
}) ; 
		k = k+1 ;
	console.log ("k =", k );
}
}


function removeRightFridge () {
	
	if (k == 0) {
		supprimer();
	}
	else {
		scene.remove(tab3[k]) ;
		k= k-1 ; 
	}
	}

//create back Fridge
var tab4 = [];
var l = 0 ;
var back_fridge_x = 350 ;
var back_fridge_y = 350 ;
var back_fridge_z = 350 ;
function createBackFridge() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-fridge/') ;
	objLoader.load('back_fridge.obj', function (object) {
		tab4[l] = object ;
		tab4[l].position.y = -400 ;
		tab4[l].position.x = -200 ;
		tab4[l].position.z = 380 ;
		tab4[l].traverse( ( o )=> {
			if ( o.isMesh ) objects.push( o );
		});
		scene.add(tab4[l]);
}) ; 
		l = l+1 ;
	console.log ("l =", l );
}
}

function removeBackFridge () {
	
	if (l == 0) {
		supprimer();
	}
	else {
		scene.remove(tab4[l]) ;
		l= l-1 ; 
	}
	}


//create gaz
var tab5 = [] ; 
var m = 0 ; 
var gaz_x = 350; 
var gaz_y = 350;
var gaz_z = 350;
function createGaz() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/gaz/') ;
	objLoader.load('gaz.obj', function (object) {
	tab5[m] = object ;
	tab5[m].position.x = 300 ;
	tab5[m].position.y = -317 ;
	tab5[m].position.z = -570 ;
	tab5[m].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab5[m]);
}) ; 
	m = m + 1 ;
	console.log ("m =", m );
}
}

function removeGaz () {
	
	if (m == 0) {
		supprimer();
	}
	else {
		scene.remove(tab5[m]) ;
		m= m-1 ; 
	}
	}

//create left gaz
var tab6 = [];
var n = 0 ;
var left_gaz_x= 350 ; 
var left_gaz_y = 350 ;
var left_gaz_z = 350
function createLeftGaz() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-gaz/') ;
	objLoader.load('left_gaz.obj', function (object) {
	tab6[n] = object ;
	tab6[n].position.x = -800 ;
	tab6[n].position.y = -317 ;
	tab6[n].position.z = -400 ;
	tab6[n].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab6[n]);
}) ; 
	n = n + 1 ;
	console.log ("n =", n );
}
}

function removeLeftGaz () {

	if (n == 0) {
		supprimer();
	}
	else {
		scene.remove(tab6[n]) ;
		n= n-1 ; 
	}
	}
//create right gaz
var tab7 = [];
var o = 0 ;
var right_gaz_x = 350; 
var right_gaz_y = 350;
var right_gaz_z = 350;
function createRightGaz() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-gaz/') ;
	objLoader.load('right_gaz.obj', function (object) {
	tab7[o] = object ;
	tab7[o].position.x = 800 ;
	tab7[o].position.y = -300 ;
	tab7[o].position.z = -200 ;
	tab7[o].traverse( ( obj )=> {

		if ( obj.isMesh ) objects.push( obj );
	
	} );
	scene.add(tab7[o]);
}) ; 
	o = o + 1 ;
	console.log ("o =", o );
}
}

function removeRightGaz () {

	if (o == 0) {
		supprimer();
	}
	else {
		scene.remove(tab7[o]) ;
		o= o-1 ; 
	}
	}

//create back gaz
var tab8 = [];
var p = 0 ;
var back_gaz_x = 350; 
var back_gaz_y = 350;
var back_gaz_z = 350;
function createBackGaz() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-gaz/') ;
	objLoader.load('back_gaz.obj', function (object) {
	tab8[p] = object ;
	tab8[p].position.x = 400 ;
	tab8[p].position.y = -300 ;
	tab8[p].position.z = 580 ;
	tab8[p].traverse( ( obj )=> {

		if ( obj.isMesh ) objects.push( obj );
	
	} );
	scene.add(tab8[p]);
}) ; 
	p = p + 1 ;
	console.log ("p =", p );
}
}

function removeBackGaz () {

	if (p == 0) {
		supprimer();
	}
	else {
		scene.remove(tab8[p]) ;
		p= p-1 ; 
	}
	}



//create lavabo
var tab9 = [] ; 
var q = 0 ; 
var lavabo_x = 350; 
var lavabo_y = 350;
var lavabo_z = 350;
function createSink() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/lavabo/') ;
	objLoader.load('lavabo.obj', function (object) {
	tab9[q] = object ;
	tab9[q].position.y = -462 ;
	tab9[q].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab9[q]);
}) ; 
	q = q + 1 ;
	console.log ("q =", q );
}
}

function removeSink() {
	
	if (q == 0) {
		supprimer();
	}
	else {
		scene.remove(tab9[q]) ;
		q= q-1 ; 
	}
	}


//create left lavabo
var tab10 = [] ; 
var r = 0 ; 
var lavabo_left_x = 350; 
var lavabo_left_y = 350;
var lavabo_left_z = 350;
function createLeftSink() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-lavabo/') ;
	objLoader.load('left_lavabo.obj', function (object) {
	tab10[r] = object ;
	tab10[r].position.y = -462 ;
	tab10[r].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab10[r]);
}) ; 
	r = r + 1 ;
	console.log ("r =", r );
}
}

function removeLeftSink() {
	
	if (r == 0) {
		supprimer();
	}
	else {
		scene.remove(tab10[r]) ;
		r= r-1 ; 
	}
	}



//create right lavabo
var tab11 = [] ; 
var s = 0 ; 
var lavabo_right_x = 350; 
var lavabo_right_y = 350;
var lavabo_right_z = 350;
function createRightSink() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-lavabo/') ;
	objLoader.load('right_lavabo.obj', function (object) {
	tab11[s] = object ;
	tab11[s].position.y = -462 ;
	tab11[s].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab11[s]);
}) ; 
	s = s + 1 ;
	console.log ("s =", s );
}
}

function removeRightSink() {
	
	if (s == 0) {
		supprimer();
	}
	else {
		scene.remove(tab11[s]) ;
		s= s-1 ; 
	}
	}


//create back lavabo
var tab12 = [] ; 
var t = 0 ; 
var lavabo_back_x = 350; 
var lavabo_back_y = 350;
var lavabo_back_z = 350;
function createBackSink() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-lavabo/') ;
	objLoader.load('back_lavabo.obj', function (object) {
	tab12[t] = object ;
	tab12[t].position.y = -462 ;
	tab12[t].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab12[t]);
}) ; 
	t = t + 1 ;
	console.log ("t =", t );
}
}

function removeBackSink() {
	
	if (t == 0) {
		supprimer();
	}
	else {
		scene.remove(tab12[t]) ;
		t= t-1 ; 
	}
	}



//create table
var tab13 = [] ; 
var u = 0 ; 
var table_x = 350; 
var table_y = 350;
var table_z = 350;
function createTable() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/table/') ;
	objLoader.load('table.obj', function (object) {
	tab13[u] = object ;
	tab13[u].position.y = -204 ;
	tab13[u].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab13[u]);
}) ; 
	u = u + 1 ;
	console.log ("u =", u );
}
}

function removeTable() {
	
	if (u == 0) {
		supprimer();
	}
	else {
		scene.remove(tab13[u]) ;
		u= u-1 ; 
	}
	}

//create left table
var tab14 = [] ; 
var v = 0 ; 
var table_left_x = 350; 
var table_left_y = 350;
var table_left_z = 350;
function createLeftTable() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-table/') ;
	objLoader.load('left_table.obj', function (object) {
	tab14[v] = object ;
	tab14[v].position.y = -204 ;
	tab14[v].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab14[v]);
}) ; 
	v = v + 1 ;
	console.log ("v=",v );
}
}

function removeLeftTable() {
	
	if (v == 0) {
		supprimer();
	}
	else {
		scene.remove(tab14[v]) ;
		v= v-1 ; 
	}
	}

//create right table
var tab15 = [] ; 
var w = 0 ; 
var table_right_x = 350; 
var table_right_y = 350;
var table_right_z = 350;
function createRightTable() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-table/') ;
	objLoader.load('left_table.obj', function (object) {
	tab15[w] = object ;
	tab15[w].position.y = -204 ;
	tab15[w].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab15[w]);
}) ; 
	w = w + 1 ;
	console.log ("w=",w );
}
}

function removeRightTable() {
	
	if (w == 0) {
		supprimer();
	}
	else {
		scene.remove(tab15[w]) ;
		w= w-1 ; 
	}
	}

//create back table
var tab16 = [] ; 
var x = 0 ; 
var table_back_x = 350; 
var table_back_y = 350;
var table_back_z = 350;
function createBackTable() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/table/') ;
	objLoader.load('table.obj', function (object) {
	tab16[x] = object ;
	tab16[x].position.y = -204 ;
	tab16[x].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab16[x]);
}) ; 
	x = x + 1 ;
	console.log ("x=",x );
}
}

function removeBackTable() {
	
	if (x == 0) {
		supprimer();
	}
	else {
		scene.remove(tab16[x]) ;
		x= x-1 ; 
	}
	}


//create Porte légumes
var tab17 = [] ; 
var y = 0 ; 
var pl_x = 350; 
var pl_y = 350;
var pl_z = 350;
function createPL() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/pl/') ;
	objLoader.load('pl.obj', function (object) {
	tab17[y] = object ;
	tab17[y].position.y = -245 ;
	tab17[y].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab17[y]);
}) ; 
	y = y + 1 ;
	console.log ("y=",y );
}
}

function removePL() {
	
	if (y == 0) {
		supprimer();
	}
	else {
		scene.remove(tab17[y]) ;
		y= y-1 ; 
	}
	}

//create Left Porte légumes
var tab18 = [] ; 
var z = 0 ; 
var pl_left_x = 350; 
var pl_left_y = 350;
var pl_left_z = 350;
function createLeftPL() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-pl/') ;
	objLoader.load('left_pl.obj', function (object) {
	tab18[z] = object ;
	tab18[z].position.y = -245 ;
	tab18[z].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab18[z]);
}) ; 
	z = z + 1 ;
	console.log ("z=",z );
}
}

function removeLeftPL() {
	
	if (z == 0) {
		supprimer();
	}
	else {
		scene.remove(tab18[z]) ;
		z= z-1 ; 
	}
	}

//create Right Porte légumes
var tab19 = [] ; 
var c = 0 ; 
var pl_right_x = 350; 
var pl_right_y = 350;
var pl_right_z = 350;
function createRightPL() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-pl/') ;
	objLoader.load('right_pl.obj', function (object) {
	tab19[c] = object ;
	tab19[c].position.y = -245 ;
	tab19[c].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab19[c]);
}) ; 
	c = c + 1 ;
	console.log ("c=",c );
}
}

function removeRightPL() {
	
	if (c == 0) {
		supprimer();
	}
	else {
		scene.remove(tab19[c]) ;
		c= c-1 ; 
	}
	}


//create Back Porte légumes
var tab20 = [] ; 
var d = 0 ; 
var pl_back_x = 350; 
var pl_back_y = 350;
var pl_back_z = 350;
function createBackPL() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-pl/') ;
	objLoader.load('back_pl.obj', function (object) {
	tab20[d] = object ;
	tab20[d].position.y = -245 ;
	tab20[d].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab20[d]);
}) ; 
	d = d + 1 ;
	console.log ("d=",d );
}
}

function removeBackPL() {
	
	if (d == 0) {
		supprimer();
	}
	else {
		scene.remove(tab20[d]) ;
		d= d-1 ; 
	}
	}


//create Elements cuisine
var tab21 = [] ; 
var e = 0 ; 
var ec_x = 350; 
var ec_y = 350;
var ec_z = 350;
function createEC() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/ec/') ;
	objLoader.load('ec.obj', function (object) {
	tab21[e] = object ;
	tab21[e].position.x = -750 ;
	tab21[e].position.y = 600 ;
	tab21[e].position.z = -625 ;
	tab21[e].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab21[e]);
}) ; 
	e = e + 1 ;
	console.log ("e=",e );
}
}

function removeEC() {
	
	if (e == 0) {
		supprimer();
	}
	else {
		scene.remove(tab21[e]) ;
		e= e-1 ; 
	}
	}

//create left Elements cuisine
var tab22 = [] ; 
var f = 0 ; 
var ec_left_x = 350; 
var ec_left_y = 350;
var ec_left_z = 350;
function createLeftEC() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-ec/') ;
	objLoader.load('left_ec.obj', function (object) {
	tab22[f] = object ;
	tab22[f].position.x = -1705 ;
	tab22[f].position.y = 600 ;
	tab22[f].position.z = 600 ;
	tab22[f].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab22[f]);
}) ; 
	f = f + 1 ;
	console.log ("f=",f );
}
}

function removeLeftEC() {
	
	if (f == 0) {
		supprimer();
	}
	else {
		scene.remove(tab22[f]) ;
		f= f-1 ; 
	}
	}

//create right Elements cuisine
var tab23 = [] ; 
var g = 0 ; 
var ec_right_x = 350; 
var ec_right_y = 350;
var ec_right_z = 350;
function createRightEC() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-ec/') ;
	objLoader.load('right_ec.obj', function (object) {
	tab23[g] = object ;
	tab23[g].position.x = 35 ;
	tab23[g].position.y = 600 ;
	tab23[g].position.z = -575 ;
	tab23[g].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab23[g]);
}) ; 
	g = g+ 1 ;
	console.log ("g=",g );
}
}

function removeRightEC() {
	
	if (g == 0) {
		supprimer();
	}
	else {
		scene.remove(tab23[g]) ;
		g= g-1 ; 
	}
	}

//create back Elements cuisine
var tab24 = [] ; 
var h = 0 ; 
var ec_back_x = 350; 
var ec_back_y = 350;
var ec_back_z = 350;
function createBackEC() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-ec/') ;
	objLoader.load('back_ec.obj', function (object) {
	tab24[h] = object ;
	tab24[h].position.x = -70 ;
	tab24[h].position.y = 600 ;
	tab24[h].position.z = 625 ;
	tab24[h].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab24[h]);
}) ; 
	h = h+ 1 ;
	console.log ("h=",h );
}
}

function removeBackEC() {

	if (h == 0) {
		supprimer();
	}
	else {
		scene.remove(tab24[h]) ;
		h= h-1 ; 
	}
	}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

//create fridge modele 2
var tab25 = [] ; 
var i2 = 0 ; 
var fridgeM2_x = 350; 
var fridgeM2_y = 350;
var fridgeM2_z = 350;
function createFridgeM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/fridge-m2/') ;
	objLoader.load('fridge_m2.obj', function (object) {
	tab25[i2] = object ;
	tab25[i2].position.x = 120 ;
	tab25[i2].position.y = -405 ;
	tab25[i2].position.z = -1060 ;
	tab25[i2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab25[i2]);
}) ; 
	i2 = i2+ 1 ;
	console.log ("i2=",i2 );
}
}

function removeFridgeM2() {

	if (i2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab25[i2]) ;
		i2= i2-1 ; 
	}
}

//create left fridge modele 2
var tab26 = [] ; 
var j2 = 0 ; 
var left_fridgeM2_x = 350; 
var left_fridgeM2_y = 350;
var left_fridgeM2_z = 350;
function createLeftFridgeM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-fridge-m2/') ;
	objLoader.load('left_fridge_m2.obj', function (object) {
	tab26[j2] = object ;
	tab26[j2].position.x = -900 ;
	tab26[j2].position.y = -405 ;
	tab26[j2].position.z = 180 ;
	tab26[j2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab26[j2]);
}) ; 
	j2 = j2+ 1 ;
	console.log ("j2=",j2 );
}
}

function removeLeftFridgeM2() {

	if (j2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab26[j2]) ;
		j2= j2-1 ; 
	}
}

//create right fridge modele 2
var tab27 = [] ; 
var k2 = 0 ; 
var right_fridgeM2_x = 350; 
var right_fridgeM2_y = 350;
var right_fridgeM2_z = 350;
function createRightFridgeM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-fridge-m2/') ;
	objLoader.load('right_fridge_m2.obj', function (object) {
	tab27[k2] = object ;
	tab27[k2].position.x = 900 ;
	tab27[k2].position.y = -405 ;
	tab27[k2].position.z = 290 ;
	tab27[k2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab27[k2]);
}) ; 
	k2 = k2+ 1 ;
	console.log ("k2=",k2 );
}
}

function removeRightFridgeM2() {

	if (k2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab27[k2]) ;
		k2= k2-1 ; 
	}
}

//create back fridge modele 2
var tab28 = [] ; 
var l2 = 0 ; 
var back_fridgeM2_x = 350; 
var back_fridgeM2_y = 350;
var back_fridgeM2_z = 350;
function createBackFridgeM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-fridge-m2/') ;
	objLoader.load('back_fridge_m2.obj', function (object) {
	tab28[l2] = object ;
	tab28[l2].position.x = -150 ;
	tab28[l2].position.y = -405 ;
	tab28[l2].position.z = 650 ;
	tab28[l2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab28[l2]);
}) ; 
	l2 = l2+ 1 ;
	console.log ("l2=",l2 );
}
}

function removeBackFridgeM2() {

	if (l2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab28[l2]) ;
		l2= l2-1 ; 
	}
}

//create gaz modele 2
var tab29 = [] ; 
var m2 = 0 ; 
var gazM2_x = 350; 
var gazM2_y = 350;
var gazM2_z = 350;
function createGazM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/gaz-m2/') ;
	objLoader.load('gaz_m2.obj', function (object) {
	tab29[m2] = object ;
	tab29[m2].position.x = 300 ;
	tab29[m2].position.y = -293 ;
	tab29[m2].position.z = -50 ;
	tab29[m2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab29[m2]);
}) ; 
	m2 = m2+ 1 ;
	console.log ("m2=",m2 );
}
}

function removeGazM2() {

	if (m2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab29[m2]) ;
		m2= m2-1 ; 
	}
}

//create left gaz modele 2
var tab30 = [] ; 
var n2 = 0 ; 
var left_gazM2_x = 350; 
var left_gazM2_y = 350;
var left_gazM2_z = 350;
function createLeftGazM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-gaz-m2/') ;
	objLoader.load('left_gaz_m2.obj', function (object) {
	tab30[n2] = object ;
	tab30[n2].position.x = -280 ;
	tab30[n2].position.y = -293 ;
	tab30[n2].position.z = -390 ;
	tab30[n2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab30[n2]);
}) ; 
	n2 = n2+ 1 ;
	console.log ("n2=",n2 );
}
}

function removeLeftGazM2() {

	if (n2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab30[n2]) ;
		n2= n2-1 ; 
	}
}

//create right gaz modele 2
var tab31 = [] ; 
var o2 = 0 ; 
var right_gazM2_x = 350; 
var right_gazM2_y = 350;
var right_gazM2_z = 350;
function createRightGazM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-gaz-m2/') ;
	objLoader.load('right_gaz_m2.obj', function (object) {
	tab31[o2] = object ;
	tab31[o2].position.x = 280 ;
	tab31[o2].position.y = -293 ;
	tab31[o2].position.z = -205 ;
	tab31[o2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab31[o2]);
}) ; 
	o2 = o2+ 1 ;
	console.log ("o2=",o2 );
}
}

function removeRightGazM2() {

	if (o2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab31[o2]) ;
		o2= o2-1 ; 
	}
}

//create back gaz modele 2
var tab32 = [] ; 
var p2 = 0 ; 
var back_gazM2_x = 350; 
var back_gazM2_y = 350;
var back_gazM2_z = 350;
function createBackGazM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-gaz-m2/') ;
	objLoader.load('back_gaz_m2.obj', function (object) {
	tab32[p2] = object ;
	tab32[p2].position.x = 400 ;
	tab32[p2].position.y = -293 ;
	tab32[p2].position.z = 80 ;
	tab32[p2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab32[p2]);
}) ; 
	p2 = p2+ 1 ;
	console.log ("p2=",p2 );
}
}

function removeBackGazM2() {

	if (p2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab32[p2]) ;
		p2= p2-1 ; 
	}
}

//create lavabo modele 2
var tab33 = [] ; 
var q2 = 0 ; 
var lavaboM2_x = 350; 
var lavaboM2_y = 350;
var lavaboM2_z = 350;
function createSinkM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/lavabo-m2/') ;
	objLoader.load('lavabo_m2.obj', function (object) {
	tab33[q2] = object ;
	tab33[q2].position.x = 400 ;
	tab33[q2].position.y = -335 ;
	tab33[q2].position.z = 80 ;
	tab33[q2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab33[q2]);
}) ; 
	q2 = q2+ 1 ;
	console.log ("q2=",q2 );
}
}

function removeSinkM2() {

	if (q2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab33[q2]) ;
		q2= q2-1 ; 
	}
}

//create left lavabo modele 2
var tab34 = [] ; 
var r2 = 0 ; 
var left_lavaboM2_x = 350; 
var left_lavaboM2_y = 350;
var left_lavaboM2_z = 350;
function createLeftSinkM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-lavabo-m2/') ;
	objLoader.load('left_lavabo_m2.obj', function (object) {
	tab34[r2] = object ;
	tab34[r2].position.x = 400 ;
	tab34[r2].position.y = -335 ;
	tab34[r2].position.z = 80 ;
	tab34[r2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab34[r2]);
}) ; 
	r2 = r2+ 1 ;
	console.log ("r2=",r2 );
}
}

function removeLeftSinkM2() {

	if (r2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab34[r2]) ;
		r2= r2-1 ; 
	}
}

//create right lavabo modele 2
var tab35 = [] ; 
var s2 = 0 ; 
var right_lavaboM2_x = 350; 
var right_lavaboM2_y = 350;
var right_lavaboM2_z = 350;
function createRightSinkM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-lavabo-m2/') ;
	objLoader.load('right_lavabo_m2.obj', function (object) {
	tab35[s2] = object ;
	tab35[s2].position.x = 420 ;
	tab35[s2].position.y = -335 ;
	tab35[s2].position.z = 80 ;
	tab35[s2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab35[s2]);
}) ; 
	s2 = s2+ 1 ;
	console.log ("s2=",s2 );
}
}

function removeRightSinkM2() {

	if (s2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab35[s2]) ;
		s2= s2-1 ; 
	}
}

//create back lavabo modele 2
var tab36 = [] ; 
var t2 = 0 ; 
var back_lavaboM2_x = 350; 
var back_lavaboM2_y = 350;
var back_lavaboM2_z = 350;
function createBackSinkM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-lavabo-m2/') ;
	objLoader.load('back_lavabo_m2.obj', function (object) {
	tab36[t2] = object ;
	tab36[t2].position.x = 420 ;
	tab36[t2].position.y = -335 ;
	tab36[t2].position.z = 80 ;
	tab36[t2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab36[t2]);
}) ; 
	t2 = t2+ 1 ;
	console.log ("t2=",t2 );
}
}

function removeBackSinkM2() {

	if (t2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab36[t2]) ;
		t2= t2-1 ; 
	}
}

//create table modele 2
var tab37 = [] ; 
var u2 = 0 ; 
var tableM2_x = 350; 
var tableM2_y = 350;
var tableM2_z = 350;
function createTableM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/table-m2/') ;
	objLoader.load('table_m2.obj', function (object) {
	tab37[u2] = object ;
	tab37[u2].position.x = 0 ;
	tab37[u2].position.y = -239 ;
	tab37[u2].position.z = 80 ;
	tab37[u2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab37[u2]);
}) ; 
	u2 = u2+ 1 ;
	console.log ("u2=",u2 );
}
}

function removeTableM2() {

	if (u2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab37[u2]) ;
		u2= u2-1 ; 
	}
}

//create left table modele 2
var tab38 = [] ; 
var v2 = 0 ; 
var left_tableM2_x = 350; 
var left_tableM2_y = 350;
var left_tableM2_z = 350;
function createLeftTableM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-table-m2/') ;
	objLoader.load('left_table_m2.obj', function (object) {
	tab38[v2] = object ;
	tab38[v2].position.x = 0 ;
	tab38[v2].position.y = -239 ;
	tab38[v2].position.z = 80 ;
	tab38[v2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab38[v2]);
}) ; 
	v2 = v2+ 1 ;
	console.log ("v2=",v2 );
}
}

function removeLeftTableM2() {

	if (v2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab38[v2]) ;
		v2= v2-1 ; 
	}
}

//create right table modele 2
var tab39 = [] ; 
var w2 = 0 ; 
var right_tableM2_x = 350; 
var right_tableM2_y = 350;
var right_tableM2_z = 350;
function createRightTableM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-table-m2/') ;
	objLoader.load('left_table_m2.obj', function (object) {
	tab39[w2] = object ;
	tab39[w2].position.x = 0 ;
	tab39[w2].position.y = -239 ;
	tab39[w2].position.z = 80 ;
	tab39[w2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab39[w2]);
}) ; 
	w2 = w2+ 1 ;
	console.log ("w2=",w2 );
}
}

function removeRightTableM2() {

	if (w2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab39[w2]) ;
		w2= w2-1 ; 
	}
}

//create back table modele 2
var tab40 = [] ; 
var x2 = 0 ; 
var back_tableM2_x = 350; 
var back_tableM2_y = 350;
var back_tableM2_z = 350;
function createBackTableM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/table-m2/') ;
	objLoader.load('table_m2.obj', function (object) {
	tab40[x2] = object ;
	tab40[x2].position.x = 0 ;
	tab40[x2].position.y = -239 ;
	tab40[x2].position.z = 80 ;
	tab40[x2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab40[x2]);
}) ; 
	x2 = x2+ 1 ;
	console.log ("x2=",x2 );
}
}

function removeBackTableM2() {

	if (x2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab40[x2]) ;
		x2= x2-1 ; 
	}
}

//create Porte légumes modele 2
var tab41 = [] ; 
var y2 = 0 ; 
var PLM2_x = 350; 
var PLM2_y = 350;
var PLM2_z = 350;
function createPLM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/pl-m2/') ;
	objLoader.load('pl_m2.obj', function (object) {
	tab41[y2] = object ;
	tab41[y2].position.x = 15 ;
	tab41[y2].position.y = -213 ;
	tab41[y2].position.z = 170 ;
	tab41[y2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab41[y2]);
}) ; 
	y2 = y2+ 1 ;
	console.log ("y2=",y2 );
}
}

function removePLM2() {

	if (y2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab41[y2]) ;
		y2= y2-1 ; 
	}
}

//create left Porte légumes modele 2
var tab42 = [] ; 
var z2 = 0 ; 
var left_PLM2_x = 350; 
var left_PLM2_y = 350;
var left_PLM2_z = 350;
function createLeftPLM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-pl-m2/') ;
	objLoader.load('left_pl_m2.obj', function (object) {
	tab42[z2] = object ;
	tab42[z2].position.x = 15 ;
	tab42[z2].position.y = -213 ;
	tab42[z2].position.z = 170 ;
	tab42[z2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab42[z2]);
}) ; 
	z2 = z2+ 1 ;
	console.log ("z2=",z2 );
}
}

function removeLeftPLM2() {

	if (z2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab42[z2]) ;
		z2= z2-1 ; 
	}
}

//create right Porte légumes modele 2
var tab43 = [] ; 
var c2 = 0 ; 
var right_PLM2_x = 350; 
var right_PLM2_y = 350;
var right_PLM2_z = 350;
function createRightPLM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-pl-m2/') ;
	objLoader.load('right_pl_m2.obj', function (object) {
	tab43[c2] = object ;
	tab43[c2].position.x = 15 ;
	tab43[c2].position.y = -213 ;
	tab43[c2].position.z = 170 ;
	tab43[c2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab43[c2]);
}) ; 
	c2 = c2+ 1 ;
	console.log ("c2=",c2 );
}
}

function removeRightPLM2() {

	if (c2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab43[c2]) ;
		c2= c2-1 ; 
	}
}

//create back Porte légumes modele 2
var tab44 = [] ; 
var d2 = 0 ; 
var back_PLM2_x = 350; 
var back_PLM2_y = 350;
var back_PLM2_z = 350;
function createBackPLM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-pl-m2/') ;
	objLoader.load('back_pl_m2.obj', function (object) {
	tab44[d2] = object ;
	tab44[d2].position.x = 15 ;
	tab44[d2].position.y = -213 ;
	tab44[d2].position.z = 170 ;
	tab44[d2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab44[d2]);
}) ; 
	d2 = d2+ 1 ;
	console.log ("d2=",d2 );
}
}

function removeBackPLM2() {

	if (d2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab44[d2]) ;
		d2= d2-1 ; 
	}
}

//create Elements cuisine modele 2
var tab45 = [] ; 
var e2 = 0 ; 
var ECM2_x = 350; 
var ECM2_y = 350;
var ECM2_z = 350;
function createECM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/ec-m2/') ;
	objLoader.load('ec_m2.obj', function (object) {
	tab45[e2] = object ;
	tab45[e2].position.x = -500 ;
	tab45[e2].position.y = 300 ;
	tab45[e2].position.z = -170 ;
	tab45[e2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab45[e2]);
}) ; 
	e2 = e2+ 1 ;
	console.log ("e2=",e2 );
}
}

function removeECM2() {

	if (e2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab45[e2]) ;
		e2= e2-1 ; 
	}
}

//create left Elements cuisine modele 2
var tab46 = [] ; 
var f2 = 0 ; 
var left_ECM2_x = 350; 
var left_ECM2_y = 350;
var left_ECM2_z = 350;
function createLeftECM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/left-ec-m2/') ;
	objLoader.load('left_ec_m2.obj', function (object) {
	tab46[f2] = object ;
	tab46[f2].position.x = -430 ;
	tab46[f2].position.y = 300 ;
	tab46[f2].position.z = 360 ;
	tab46[f2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab46[f2]);
}) ; 
	f2 = f2+ 1 ;
	console.log ("f2=",f2 );
}
}

function removeLeftECM2() {

	if (f2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab46[f2]) ;
		f2= f2-1 ; 
	}
}

//create right Elements cuisine modele 2
var tab47 = [] ; 
var g2 = 0 ; 
var right_ECM2_x = 350; 
var right_ECM2_y = 350;
var right_ECM2_z = 350;
function createRightECM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/right-ec-m2/') ;
	objLoader.load('right_ec_m2.obj', function (object) {
	tab47[g2] = object ;
	tab47[g2].position.x = 400 ;
	tab47[g2].position.y = 300 ;
	tab47[g2].position.z = -360 ;
	tab47[g2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab47[g2]);
}) ; 
	g2 = g2+ 1 ;
	console.log ("g2=",g2 );
}
}

function removeRightECM2() {

	if (g2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab47[g2]) ;
		g2= g2-1 ; 
	}
}

//create back Elements cuisine modele 2
var tab48 = [] ; 
var h2 = 0 ; 
var back_ECM2_x = 350; 
var back_ECM2_y = 350;
var back_ECM2_z = 350;
function createBackECM2() {
	if ((a!=0) || (b!=0)) {
	var objLoader = new THREE.OBJLoader();
	objLoader.setPath('/examples/3d-obj-loader/assets/back-ec-m2/') ;
	objLoader.load('back_ec_m2.obj', function (object) {
	tab48[h2] = object ;
	tab48[h2].position.x = 480 ;
	tab48[h2].position.y = 300 ;
	tab48[h2].position.z = 150 ;
	tab48[h2].traverse( ( o )=> {

		if ( o.isMesh ) objects.push( o );
	
	} );
	scene.add(tab48[h2]);
}) ; 
	h2 = h2+ 1 ;
	console.log ("h2=",h2 );
}
}

function removeBackECM2() {

	if (h2 == 0) {
		supprimer();
	}
	else {
		scene.remove(tab48[h2]) ;
		h2= h2-1 ; 
	}
}




function moveElement(){
	orbitControls.enabled = false;
}

function viewElement(){
	orbitControls.enabled = true;
}


function calculer(){
	document.getElementById("popup-1").classList.toggle("active");
	document.getElementById("demo").innerHTML =( "<br />" +
	"Le prix d'un Refrégérateur : ".bold() +((fridge_x*fridge_y*fridge_z)/100000) + "<br />" +
	"Le prix d'un Refrégérateur modèle 2 : ".bold() +((fridgeM2_x*fridgeM2_y*fridgeM2_z)/100000) + "<br />" +
	"Le prix d'un gaz : ".bold() +((gaz_x*gaz_y*gaz_z)/100000)+ "<br />" +
	"Le prix d'un gaz modèle 2 : ".bold() +((gazM2_x*gazM2_y*gazM2_z)/100000)+ "<br />" +
	"Le prix d'un lavabo : ".bold() +((lavabo_x*lavabo_y*lavabo_z)/100000)+ "<br />" +
	"Le prix d'un lavabo modèle 2 : ".bold() +((lavaboM2_x*lavaboM2_y*lavaboM2_z)/100000)+ "<br />" +
	"Le prix d'une table : ".bold() +((table_x*table_y*table_z)/100000)+ "<br />" +
	"Le prix d'une table modèle 2 : ".bold() +((tableM2_x*tableM2_y*tableM2_z)/100000)+ "<br />" +
	"Le prix d'une porte légumes : ".bold() +((pl_x*pl_y*pl_z)/100000)+ "<br />" +
	"Le prix d'une porte légumes modèle 2 : ".bold() +((PLM2_x*PLM2_y*PLM2_z)/100000)+ "<br />" +
	"Le prix d'un élément de cuisine : ".bold() +((ec_x*ec_y*ec_z)/100000)+ "<br />" +
	"Le prix d'un élément de cuisine modèle 2 : ".bold() +((ECM2_x*ECM2_y*ECM2_z)/100000)+ "<br />" +"<br />" +
"Nombre d'éléments :".bold() + (i+j+k+l+m+n+o+p+q+r+s+t+u+v+w+x+y+z+c+d+e+f+g+h+
						i2+j2+k2+l2+m2+n2+o2+p2+q2+r2+s2+t2+u2+v2+w2+x2+y2+z2+c2+d2+e2+f2+g2+h2) + "<br />" +

"Total :".bold() + ((i*fridge_x*fridge_y*fridge_z) + (j*left_fridge_x*left_fridge_y*left_fridge_z) + 
		   (k*right_fridge_x*right_fridge_y*right_fridge_z) + (l*back_fridge_x*back_fridge_y*back_fridge_z) + 
		   (m*gaz_x*gaz_y*gaz_z) + (n*left_gaz_x*left_gaz_y*left_gaz_z) + 
		   (o*right_gaz_x*right_gaz_y*right_gaz_z) + (p*back_gaz_x*back_gaz_y*back_gaz_z) + 
			(q*lavabo_x*lavabo_y*lavabo_z) + (r*lavabo_left_x*lavabo_left_y*lavabo_left_z) + 
			(s*lavabo_right_x*lavabo_right_y*lavabo_right_z) + (t*lavabo_back_x*lavabo_back_y*lavabo_back_z) +
			(u*table_x*table_y*table_z) + (v*table_left_x*table_left_y*table_left_z) + 
			(w*table_right_x*table_right_y*table_right_z) + (x*table_back_x*table_back_y*table_back_z) + 
			(y*pl_x*pl_y*pl_z) + (z*pl_left_x*pl_left_y*pl_left_z) + 
			(c*pl_right_x*pl_right_y*pl_right_z) + (d*pl_back_x*pl_back_y*pl_back_z) + 
			(e*ec_x*ec_y*ec_z) + (f*ec_left_x*ec_left_y*ec_left_z) + 
			(g*ec_right_x*ec_right_y*ec_right_z) + (h*ec_back_x*ec_back_y*ec_back_z) + 
			(i2*fridgeM2_x*fridgeM2_y*fridgeM2_z) + (j2*left_fridgeM2_x*left_fridgeM2_y*left_fridgeM2_z) +
			(k2*right_fridgeM2_x*right_fridgeM2_y*right_fridgeM2_z) + (l2*back_fridgeM2_x*back_fridgeM2_y*back_fridgeM2_z)+
			(m2*gazM2_x*gazM2_y*gazM2_z) + (n2*left_gazM2_x*left_gazM2_y*left_gazM2_z) + 
			(o2*right_gazM2_x*right_gazM2_y*right_gazM2_z) + (p2*back_gazM2_x*back_gazM2_y*back_gazM2_z) + 
			(q2*lavaboM2_x*lavaboM2_y*lavaboM2_z) + (r2*left_lavaboM2_x*left_lavaboM2_y*left_lavaboM2_z) + 
			(s2*right_lavaboM2_x*right_lavaboM2_y*right_lavaboM2_z) + (t2*back_lavaboM2_x*back_lavaboM2_y*back_lavaboM2_z) +
			(u2*tableM2_x*tableM2_y*tableM2_z) + (v2*left_tableM2_x*left_tableM2_y*left_tableM2_z) + 
			(w2*right_tableM2_x*right_tableM2_y*right_tableM2_z) + (x2*back_tableM2_x*back_tableM2_y*back_tableM2_z) + 
			(y2*PLM2_x*PLM2_y*PLM2_z) + (z2*left_PLM2_x*left_PLM2_y*left_PLM2_z) + 
			(c2*right_PLM2_x*right_PLM2_y*right_PLM2_z) + (d2*back_PLM2_x*back_PLM2_y*back_PLM2_z) + 
			(e2*ECM2_x*ECM2_y*ECM2_z) + (f2*left_ECM2_x*left_ECM2_y*left_ECM2_z) + 
			(g2*right_ECM2_x*right_ECM2_y*right_ECM2_z) + (h2*back_ECM2_x*back_ECM2_y*back_ECM2_z)
)/100000) ;
  }
					



animate();