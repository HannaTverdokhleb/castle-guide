(function() {
    var lastScrollTop = document.documentElement.scrollTop;
    let header = document.querySelector('.header');
    let burger = document.querySelector('.menu-burger');

    if (burger) {
        burger.addEventListener('click', (e) => {
            burger.classList.toggle('open');
            let menu = document.querySelector('.menu-list');
            menu.classList.toggle('open');
            document.body.classList.toggle('lock');
        })

        let menuLinks = document.querySelectorAll('.menu-item-link');
        
        if (menuLinks && menuLinks.length > 0) {
            for (let i = 0; i < menuLinks.length; i++) {
                let link = menuLinks[i];
                link.addEventListener('click', (e) => {
                    if (window.innerWidth < 992) {
                        burger.click();
                    }
                })
            }
        }
    }

    window.addEventListener('scroll', function() {
        let st = document.documentElement.scrollTop;
        if (st > lastScrollTop) {
           header.classList.add('hidden');
        } else if (st < lastScrollTop) {
            header.classList.remove('hidden');
        }
        lastScrollTop = st <= 0 ? 0 : st;
     }, false);
})();
