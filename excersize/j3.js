(function(){
    const characters = document.querySelector('.characters');

    function clickHandler(e){
        // console.log(this);
        // console.log(e);
        // characters ��
        // console.log(e.currentTarget);
        // ���콺�� ������
        // console.log(e.target);
    }

    characters.addEventListener('click',clickHandler);
})();