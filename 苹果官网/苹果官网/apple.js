 window.onload=function() {


        let banner = document.querySelector('.banner');
        let li = banner.querySelectorAll('li');
        let lunbodian = banner.querySelectorAll('.lunbodian1');
        let width = parseInt(window.getComputedStyle(banner, null).width);
        // console.log(width)
        // let left = banner.querySelector('.left');
        // let right = banner.querySelector('.right');
        let now = 0;
        let next = 0;
        let flag = true;

        function move(fx = 'right') {
            if (fx == 'right') {
                if (flag) {
                    flag = false;
                    next = now + 1;
                    if (next >= li.length) {
                        next = 0
                    }
                    li[next].style.left = '100%';
                    animate(li[now], {left: -width}, 500)
                    animate(li[next], {left: 0}, 500, function () {
                        flag = true;
                    })
                }

            }
            if (fx == 'left') {
                if (flag) {
                    flag = false
                    next = now - 1;
                    if (next < 0) {
                        next = li.length - 1
                    }
                    li[next].style.left = '-100%';
                    animate(li[now], {left: width}, 500)
                    animate(li[next], {left: 0}, 500, function () {
                        flag = true;
                    })
                }

            }
            for (let i = 0; i < li.length; i++) {
                lunbodian[i].classList.remove('pink')
            }
            lunbodian[next].classList.add('pink')
            now = next;
        }

        let t = setInterval(move, 1000);
        banner.onmousemove = function () {
            clearInterval(t)
        }
        banner.onmouseout = function () {
            t = setInterval(move, 1000)
        }
      
        let deng
        lunbodian.forEach(function (value, index) {
            value.onclick = function () {
                deng = setTimeout(function () {
                    if (index > now) {
                        li[index].style.left = '100%';
                        animate(li[now], {left: -width}, 500)
                        animate(li[index], {left: 0}, 500)
                    } else if (index < now) {
                        li[index].style.left = '-100%';
                        animate(li[now], {left: width}, 500)
                        animate(li[index], {left: 0}, 500)
                    }
                    for (let i = 0; i < li.length; i++) {
                        lunbodian[i].classList.remove('pink')
                    }
                    lunbodian[index].classList.add('pink')
                    now = index;
                }, 200)
            }
            value.onmouseout = function () {
                clearTimeout(deng)
            }
        })

    }
