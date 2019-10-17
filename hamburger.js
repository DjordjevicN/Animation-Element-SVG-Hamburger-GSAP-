const hamburger = document.querySelector('.hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

const lines = [line1, line2, line3];
const tlm = new TimelineMax({});
const toggleMenu = new TimelineMax({ paused: true, reversed: true });


hamburger.addEventListener('mouseenter', () => {
    if (hamburger.classList.contains("js-x")) {
        return;
    }
    console.log('radi');

    tlm.staggerTo(lines, .10, { scaleX: 1.5, repeat: 1, yoyo: true, svgOrigin: '50 50', ease: Power2.easeInOut }, 0.125)

})
toggleMenu
    .to(line2, .125, { scaleX: 0 }, 0)
    .to(line1, .125, { transformOrigin: '50% 50%', y: 8 }, "rot")
    .to(line3, .125, { transformOrigin: '50% 50%', y: -8 }, "rot")
    .to(hamburger, .35, { rotation: 180 })
    .to(line1, .125, { rotation: -45, ease: Power2.easeInOut }, 'exit')
    .to(line3, .125, { rotation: 45, ease: Power2.easeInOut }, 'exit')


hamburger.addEventListener('click', () => {
    console.log('klik');
    hamburger.classList.toggle('js-x');
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})