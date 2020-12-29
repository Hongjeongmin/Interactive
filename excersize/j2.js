const ilbuni = document.querySelector('.ilbuni:nth-child(3)');

ilbuni.addEventListener('click', function () { });
ilbuni.addEventListener('click', function () {
    ilbuni.classList.add('special');
});

// window.addEventListener('load',function(){
window.addEventListener('DOMContentLoaded',function(){
    const ilbuni = document.querySelector('.ilbuni.c');

    function clickIlbuni() {
        ilbuni.classList.toggle('special');
    }

    ilbuni.addEventListener('click', clickIlbuni);
})