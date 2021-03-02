(function() {
    //CAT ANIMATION
    let animation = bodymovin.loadAnimation({
        container: document.getElementById('cat'),
        path: './json/cat.json',
        renderer: 'svg', 
        loop: true,
        autoplay: true,
    });

    let animation2 = bodymovin.loadAnimation({
        container: document.getElementById('cat2'),
        path: './json/cat2.json',
        renderer: 'svg', 
        loop: true,
        autoplay: true,
    });

    //START SCENE INTERCATION
    const btn_start = document.getElementById('start');
    const ctr_presentation = document.getElementById('presentation');
    const ctr_scene = document.getElementById('ctr_scene');
    const btn_reload = document.getElementById('cat2');

    let state = (status) =>{
        return{
            status,
            close(){
               return status = 0;
            }
        }
    }

    state(1);
    btn_start.addEventListener("click", function(event){
        event.preventDefault()
        state().close();
        ctr_presentation.classList.add("close");
        ctr_scene.classList.add("open");
    });

    const reload = () => {
        location.reload();
    }
    btn_reload.addEventListener("click", reload);

 })();