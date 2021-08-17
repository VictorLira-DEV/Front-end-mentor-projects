const hamburguer = document.querySelector('.hamburguer');
const navigation = document.querySelector('.nav_links');

hamburguer.addEventListener('click', function(){
    navigation.classList.toggle('display-menu')
})