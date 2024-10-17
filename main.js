const sideBar = document.getElementById('side-bar');
const backIcon = document.getElementById('back-icon');
const arrow = document.getElementById('arrow');


backIcon.addEventListener('click', () => {
    if(arrow.classList.contains('bx-left-arrow-alt')){
        sideBar.classList.add('hide')
        arrow.classList.remove('bx-left-arrow-alt')
        arrow.classList.add('bx-right-arrow-alt')
    }else{
        sideBar.classList.remove('hide')
        arrow.classList.remove('bx-right-arrow-alt')
        arrow.classList.add('bx-left-arrow-alt')
    }
})

