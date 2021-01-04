function Character(info) {
    this.mainElem = document.createElement('div');
    this.mainElem.classList.add('character');
    this.mainElem.innerHTML = ''

        + '<div class="character-face-con character-head">'
        + '<div class="character-face character-head-face face-front"></div>'
        + '<div class="character-face character-head-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-torso">'
        + '<div class="character-face character-torso-face face-front"></div>'
        + '<div class="character-face character-torso-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-arm character-arm-right">'
        + '<div class="character-face character-arm-face face-front"></div>'
        + '<div class="character-face character-arm-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-arm character-arm-left">'
        + '<div class="character-face character-arm-face face-front"></div>'
        + '<div class="character-face character-arm-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-leg character-leg-right">'
        + '<div class="character-face character-leg-face face-front"></div>'
        + '<div class="character-face character-leg-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-leg character-leg-left">'
        + '<div class="character-face character-leg-face face-front"></div>'
        + '<div class="character-face character-leg-face face-back"></div>'
        + '</div>';
    this.mainElem.style.left = info.xPos + '%';
    document.querySelector('.stage').appendChild(this.mainElem);
    // ��ũ�� ������ �ƴ��� Check
    this.scrollState = false;
    // �ٷ� ����(������) ��ũ�� ��ġ
    this.lastScrollTop = 0;
    this.speed = Math.random(10);
    this.direction;
    this.xPos = info.xPos;
    this.runningState = false;
    this.rafId;
    this.init();
}

Character.prototype = {
    constructor: Character,
    init: function () {
        const self = this;

        window.addEventListener('scroll', function () {
            clearTimeout(self.scrollState);
            if (!self.scrollState) {
                self.mainElem.classList.add('running');
            }
            self.scrollState = setTimeout(function () {
                self.scrollState = false;
                self.mainElem.classList.remove('running');
            }, 500);


            if (self.lastScrollTop > pageYOffset) {
                // ��ũ�� �ø�
                self.mainElem.setAttribute('data-direction', 'backward');
            } else {
                // ��ũ�� ����
                self.mainElem.setAttribute('data-direction', 'forward');
            }
            self.lastScrollTop = pageYOffset;
        });

        window.addEventListener('keydown', function (e) {
            if (self.runningState) return;
            if (e.keyCode == 37) {
                // ����
                self.mainElem.setAttribute('data-direction', 'left');
                self.mainElem.classList.add('running');
                self.direction = 'left';
                self.run(self);
            } else if (e.keyCode == 39) {
                // ������
                self.mainElem.setAttribute('data-direction', 'right');
                self.mainElem.classList.add('running');
                self.direction = 'right';
                self.run(self);
            }
            self.runningState = true;
        });

        window.addEventListener('keyup', function (e) {
            self.mainElem.classList.remove('running');
            self.runningState = false;
            cancelAnimationFrame(self.rafId);
        });
    },
    run: function (self) {
        if (self.direction == 'left') {
            self.xPos -= this.speed;
        } else if (self.direction == 'right') {
            self.xPos += this.speed;
        }

        if (self.xPos < 2)
            self.xPos = 2;
        if (self.xPos > 88)
            self.xPos = 88;

        self.mainElem.style.left = self.xPos + '%';
        self.rafId = requestAnimationFrame(function () {
            self.run(self);
        });
    }
    // run: function () {
    //     const self = this;
    //     if (self.direction == 'left') {
    //         self.xPos -= this.speed;
    //     } else if (self.direction == 'right') {
    //         self.xPos += this.speed;
    //     }
    //     if (self.xPos < 2)
    //         self.xPos = 2;
    //     if (self.xPos > 88)
    //         self.xPos = 88;

    //     self.mainElem.style.left = self.xPos + '%';
    //     self.rafId = requestAnimationFrame(self.run.bind(self));
    // }
};