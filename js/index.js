const $body = document.querySelector('body')
const $menu = document.getElementById('menu')
const $mobileNav = document.querySelector('.mobile-content')
const $mobileAction = document.querySelector('.menu-mobile-actions')

$menu.addEventListener('click', () => {
  $body.classList.toggle('body-hidden')
  $mobileNav.classList.toggle('mobile-content-visible')
  $mobileAction.classList.toggle('menu-mobile-actions--active')
})