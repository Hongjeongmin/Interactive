(function(){
    const characters = document.querySelector('.characters');

    function clickHandler(e){
        // console.log(this);
        // console.log(e);
        // characters 임
        // console.log(e.currentTarget);
        // 마우스가 누른애
        // console.log(e.target);
    }

    characters.addEventListener('click',clickHandler);
})();