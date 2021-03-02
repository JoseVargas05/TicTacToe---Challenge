(function() {
    //PREPARE SCENE
    const ctr_scene = document.getElementById('ctr_scene');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    //VARIABLES FOR TEXTURE INICIALIZER AND ELEMENT STATUS
    let textureLoader = new THREE.TextureLoader();
    let tex_fire = textureLoader.load("../img/fire.png");
    let tex_ice = textureLoader.load("../img/ice.png");
    let tex_hidde = textureLoader.load("../img/hidde.png");

    let countPlay = 0;
    const tablero = []; 

    //EVENT CLICK
    window.addEventListener('click', onDocumentMouseDown, false);
    
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let INTERSECTED;
    let turn = 0;
    let obj1 , obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9 = null;

     //CLICK IN ITEM DETECT ITERSECTS AND OBJECT TYPE
    function onDocumentMouseDown( event ) {
        event.preventDefault();
        mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
        raycaster.setFromCamera( mouse, camera );
        const intersects = raycaster.intersectObjects( scene.children );
        if ( intersects.length > 0 ){
             //IF ITS TYPE MESH AND NAME START "OBJ" RENEW ELEMENT FOR ICE OR FIRE, DEPENDS PLAYER TURN
            if ( (INTERSECTED != intersects[ 0 ].object) && (intersects[ 0 ].object.type = "Mesh") && (intersects[ 0 ].object.name.substr(0,3) == "OBJ") ) {
               console.log(intersects[ 0 ].object.name);
               countPlay++;
               if(turn == 0 ){
                //SEARCH SELECT ITEM FOR SHOW IN CANVAS AND CHANGE TEXTURE ICE - FIRE
                switch (intersects[ 0 ].object.name) {
                    case "OBJ1":
                        obj1 = new THREE.Fire( tex_fire );
                        obj1.position.set(-2.5, 0, -0.3);
                        obj1.rotation.set(-190, 0, 0);
                        scene.add( obj1 );
                        tablero[0] = "fuego";
                        break;
                    case "OBJ2":
                        obj2 = new THREE.Fire( tex_fire );
                        obj2.position.set(-1.5, 0, -0.3);
                        obj2.rotation.set(-190, 0, 0);
                        scene.add( obj2 );
                        tablero[1] = "fuego";
                        break;
                    case "OBJ3":
                        obj3 = new THREE.Fire( tex_fire );
                        obj3.position.set(-0.5, 0, -0.3);
                        obj3.rotation.set(-190, 0, 0);
                        scene.add( obj3 );
                        tablero[2] = "fuego";
                        break;
                    case "OBJ4":
                        obj4 = new THREE.Fire( tex_fire );
                        obj4.position.set(-2.5, -1, -0.3);
                        obj4.rotation.set(-190, 0, 0);
                        scene.add( obj4 );
                        tablero[3] = "fuego";
                        break;
                    case "OBJ5":
                        obj5 = new THREE.Fire( tex_fire );
                        obj5.position.set(-1.5, -1, -0.3);
                        obj5.rotation.set(-190, 0, 0);
                        scene.add( obj5 );
                        tablero[4] = "fuego";
                        break;
                    case "OBJ6":
                        obj6 = new THREE.Fire( tex_fire );
                        obj6.position.set(-0.5, -1, -0.3);
                        obj6.rotation.set(-190, 0, 0);
                        scene.add( obj6 );
                        tablero[5] = "fuego";
                        break;
                    case "OBJ7":
                        obj7 = new THREE.Fire( tex_fire );
                        obj7.position.set(-2.5, -2, -0.3);
                        obj7.rotation.set(-190, 0, 0);
                        scene.add( obj7 );
                        tablero[6] = "fuego";
                        break;
                    case "OBJ8":
                        obj8 = new THREE.Fire( tex_fire );
                        obj8.position.set(-1.5, -2, -0.3);
                        obj8.rotation.set(-190, 0, 0);
                        scene.add( obj8 );
                        tablero[7] = "fuego";
                        break;
                    case "OBJ9":
                        obj9 = new THREE.Fire( tex_fire );
                        obj9.position.set(-0.5, -2, -0.3);
                        obj9.rotation.set(-190, 0, 0);
                        scene.add( obj9 );
                        tablero[8] = "fuego";
                        break;
                }
                intersects[ 0 ].object.name = "fire"
                turn = 1;
               }else{
                switch (intersects[ 0 ].object.name) {
                    case "OBJ1":
                        obj1 = new THREE.Fire( tex_ice );
                        obj1.position.set(-2.5, 0, -0.3);
                        obj1.rotation.set(-190, 0, 0);
                        scene.add( obj1 );
                        tablero[0] = "agua";
                        break;
                    case "OBJ2":
                        obj2 = new THREE.Fire( tex_ice );
                        obj2.position.set(-1.5, 0, -0.3);
                        obj2.rotation.set(-190, 0, 0);
                        scene.add( obj2 );
                        tablero[1] = "agua";
                        break;
                    case "OBJ3":
                        obj3 = new THREE.Fire( tex_ice );
                        obj3.position.set(-0.5, 0, -0.3);
                        obj3.rotation.set(-190, 0, 0);
                        scene.add( obj3 );
                        tablero[2] = "agua";
                        break;
                    case "OBJ4":
                        obj4 = new THREE.Fire( tex_ice );
                        obj4.position.set(-2.5, -1, -0.3);
                        obj4.rotation.set(-190, 0, 0);
                        scene.add( obj4 );
                        tablero[3] = "agua";
                        break;
                    case "OBJ5":
                        obj5 = new THREE.Fire( tex_ice );
                        obj5.position.set(-1.5, -1, -0.3);
                        obj5.rotation.set(-190, 0, 0);
                        scene.add( obj5 );
                        tablero[4] = "agua";
                        break;
                    case "OBJ6":
                        obj6 = new THREE.Fire( tex_ice );
                        obj6.position.set(-0.5, -1, -0.3);
                        obj6.rotation.set(-190, 0, 0);
                        scene.add( obj6 );
                        tablero[5] = "agua";
                        break;
                    case "OBJ7":
                        obj7 = new THREE.Fire( tex_ice );
                        obj7.position.set(-2.5, -2, -0.3);
                        obj7.rotation.set(-190, 0, 0);
                        scene.add( obj7 );
                        tablero[6] = "agua";
                        break;
                    case "OBJ8":
                        obj8 = new THREE.Fire( tex_ice );
                        obj8.position.set(-1.5, -2, -0.3);
                        obj8.rotation.set(-190, 0, 0);
                        scene.add( obj8 );
                        tablero[7] = "agua";
                        break;
                    case "OBJ9":
                        obj9 = new THREE.Fire( tex_ice );
                        obj9.position.set(-0.5, -2, -0.3);
                        obj9.rotation.set(-190, 0, 0);
                        scene.add( obj9 );
                        tablero[8] = "agua";
                        break;
                }
                intersects[ 0 ].object.name = "ice"
                turn = 0;
                }
                let ganador = isWinner();
                if(ganador != false){ 
                    
                    const paragraph = document.getElementById("nameW");
                    const text = document.createTextNode(ganador);
                    const ctr_winner = document.getElementById('winner');
                    const ctr_scene = document.getElementById('ctr_scene');
                    ctr_scene.classList.remove("open");
                    ctr_winner.classList.add("open");
                    paragraph.appendChild(text);
                }
               
               if(countPlay == 9){
                const paragraph = document.getElementById("nameW");
                    const text = document.createTextNode("empate");
                    const ctr_winner = document.getElementById('winner');
                    const ctr_scene = document.getElementById('ctr_scene');
                    ctr_scene.classList.remove("open");
                    ctr_winner.classList.add("open");
                    paragraph.appendChild(text);
               }
            }
        }
    }
    
    //RENDERER INITIALIZE
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    ctr_scene.appendChild( renderer.domElement );
    const controls = new THREE.OrbitControls( camera, renderer.domElement );

    //CONTROLS DISABLE ZOOM AND PAN
    controls.enableZoom = false;
    controls.enablePan = false;

    //CUSTOM GEOMETRY - MATERIALS - CREATE "GATO"  
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff
    });
    
    let points = [];
    let lines = [];

    points.push( new THREE.Vector3( - 2, 0.5, 0 ) );
    points.push( new THREE.Vector3( -2, -2.5, 0 ) );
    let geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( geometry, lineMaterial );
    lines.push(line);
    scene.add( line );

    points = [];
    points.push( new THREE.Vector3( 0, -1.5, 0 ) );
    points.push( new THREE.Vector3( -3, -1.5, 0 ) );
    geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line2 = new THREE.Line( geometry, lineMaterial );
    scene.add( line2 );

    points = [];
    points.push( new THREE.Vector3( 0, -0.5, 0 ) );
    points.push( new THREE.Vector3( -3, -0.5, 0 ) );
    geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line3 = new THREE.Line( geometry, lineMaterial );
    scene.add( line3 );

    points = [];
    points.push( new THREE.Vector3( -1, 0.5, 0 ) );
    points.push( new THREE.Vector3( -1, -2.5, 0 ) );
    geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line4 = new THREE.Line( geometry, lineMaterial );
    scene.add( line4 );

    //CALL INITIAL MODELS STATUS
    setInitial();

    //CAMERA POSITION
    camera.position.set( -1.7, -0.8, 3.1 );
    camera.rotation.set(-10, 0.8, 5);
    controls.target.set(-1.5, -1, -0.3);
    
    controls.update();

    function animate() {
        requestAnimationFrame( animate );
        controls.update();
        render();
    }
    animate();

    function render() {
        obj1.update(performance.now() / 1000);
        obj2.update(performance.now() / 1000);
        obj3.update(performance.now() / 1000);
        obj4.update(performance.now() / 1000);
        obj5.update(performance.now() / 1000);
        obj6.update(performance.now() / 1000);
        obj7.update(performance.now() / 1000);
        obj8.update(performance.now() / 1000);
        obj9.update(performance.now() / 1000);
        renderer.render( scene, camera );
    }
    function setInitial(){
        //MODELS - INITIAL HIDDE STATUS
        obj1 = new THREE.Fire( tex_hidde );
        obj1.position.set(-2.5, 0, -0.3);
        obj1.rotation.set(-190, 0, 0);
        obj1.name = 'OBJ1';
        scene.add( obj1 );

        obj2 = new THREE.Fire( tex_hidde );
        obj2.position.set(-1.5, 0, -0.3);
        obj2.rotation.set(-190, 0, 0);
        obj2.name = 'OBJ2';
        scene.add( obj2 );

        obj3 = new THREE.Fire( tex_hidde );
        obj3.position.set(-0.5, 0, -0.3);
        obj3.rotation.set(-190, 0, 0);
        obj3.name = 'OBJ3';
        scene.add( obj3 );


        obj4 = new THREE.Fire( tex_hidde );
        obj4.position.set(-2.5, -1, -0.3);
        obj4.rotation.set(-190, 0, 0);
        obj4.name = 'OBJ4';
        scene.add( obj4 );

        obj5 = new THREE.Fire( tex_hidde );
        obj5.position.set(-1.5, -1, -0.3);
        obj5.rotation.set(-190, 0, 0);
        obj5.name = 'OBJ5';
        scene.add( obj5 );

        obj6 = new THREE.Fire( tex_hidde );
        obj6.position.set(-0.5, -1, -0.3);
        obj6.rotation.set(-190, 0, 0);
        obj6.name = 'OBJ6';
        scene.add( obj6 );

        obj7 = new THREE.Fire( tex_hidde );
        obj7.position.set(-2.5, -2, -0.3);
        obj7.rotation.set(-190, 0, 0);
        obj7.name = 'OBJ7';
        scene.add( obj7 );

        obj8 = new THREE.Fire( tex_hidde );
        obj8.position.set(-1.5, -2, -0.3);
        obj8.rotation.set(-190, 0, 0);
        obj8.name = 'OBJ8';
        scene.add( obj8 );

        obj9 = new THREE.Fire( tex_hidde );
        obj9.position.set(-0.5, -2, -0.3);
        obj9.rotation.set(-190, 0, 0);
        obj9.name = 'OBJ9';
        scene.add( obj9 );
    }
    function isWinner(){
      if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return tablero[0];
      }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return tablero[3];
      }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return tablero[6];
      }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return tablero[0];
      }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return tablero[1];
      }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return tablero[2];
      }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return tablero[0];
      }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return tablero[2];
      } 
      return false;      
    }

 })();