const buttons = document.querySelectorAll('button')

for (let i = 0; i < 7; i++) {
    buttons[i].addEventListener('click', function () {

        let cases = this.innerText
        playDrum(cases);
        animate(cases)




    })
}
document.addEventListener('keydown', function (e) {
    playDrum(e.key)
    animate(e.key)
})
function playDrum(key) {
    switch (key) {
        case 'w':
            let pw = new Audio('sounds/tom-1.mp3')
            pw.play()
            display('Tom-1')
            break;
        case 'a':
            let pa = new Audio('sounds/tom-2.mp3')
            pa.play()
            display('Tom-2')
            break;
        case 's':
            let ps = new Audio('sounds/tom-3.mp3')
            ps.play()
            display('Tom-3')
            break;
        case 'd':
            let pd = new Audio('sounds/tom-4.mp3')
            pd.play()
            display('Tom-4')
            break;
        case 'j':
            let pj = new Audio('sounds/snare.mp3')
            pj.play()
            display('Snare')
            break;
        case 'k':
            let pk = new Audio('sounds/kick-bass.mp3')
            pk.play()
            display('Kick-Bass')
            break;
        case 'l':
            let pl = new Audio('sounds/crash.mp3')
            pl.play()
            display('Crash')
            break;
    }
}
function animate(input) {
    document.querySelector(`.${input}`).classList.add('pressed')
    setTimeout(() => {
        document.querySelector(`.${input}`).classList.remove('pressed')
    }, 100)

}
function display(input) {
    document.querySelector('h1').innerText = `${input} was played`
    setTimeout(() => {
        document.querySelector('h1').innerText = 'Drum 🥁 Kit'
    }, 300)
}