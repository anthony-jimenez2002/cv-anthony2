let menu = document.getElementById('menu');

let open_menu =document.getElementById('open_menu');
let close_menu =document.getElementById('close_menu');


open_menu.addEventListener('click', togglemenu);

close_menu.addEventListener('click', togglemenu);

function togglemenu(){
    menu.classList.toggle('show-menu');
     
    if(menu.classList.contains('show-menu')){
        open_menu.style.display = 'none';
        close_menu.style.display ='block';
    }
    

    else{
        open_menu.style.display = 'block'
        close_menu.style.display ='none'
    }
    
   
    

}


