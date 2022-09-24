
        // scroll   Arrow Button

        const scrollBtn = document.querySelector('.arrow');

        if(scrollBtn) {
            window.addEventListener('scroll', () => {
                if(pageYOffset > (window.innerHeight * 1.2)) {
                    scrollBtn.style.display = 'flex';
                } else {
                    scrollBtn.style.display = 'none';
                }
            });
            scrollBtn.addEventListener('click', () => {
                window.scrollTo(0, 0);
            });
        }
        

                //   Buttton Moon
        
        let moonIcon = document.querySelector('.iconMoonInTwoF img');
        
        moonIcon.onclick = function(){
            document.body.classList.toggle('dark-theme');
            if(document.body.classList.contains('dark-theme')){
                moonIcon.src = './image/sun.png';
            } else {
                moonIcon.src = './image/moon.png';
            }
        }

// Mobile version Hamburger

let menu = document.querySelector('#side-menu')
let sideBar = document.querySelector('.first-section')
let sidebarCount = 0;

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  sideBar.classList.toggle('active');
  if(sidebarCount === 0) {
    sidebarCount++
    document.querySelector('.navbarF').style.backgroundColor = 'var(--first-color)';
  } else {
    sidebarCount--
    document.querySelector('.navbarF').style.backgroundColor = `var(--navColor-color)`;
  }
  
};

          //   Mobile  Moon
let moonIconT = document.querySelector('.iconMoonInTwoT img');

moonIconT.onclick = function(){
document.body.classList.toggle('dark-theme');
if(document.body.classList.contains('dark-theme')){
moonIconT.src = './image/sun.png';
} else {
moonIconT.src = './image/moon.png';
}
}
        