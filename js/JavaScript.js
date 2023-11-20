(() => {
    let current = 9;
    let active = false;

    function updateAnimate() {
        $("main .bonusPoint .bonusPoint__nums li:last-child")
            .removeClass("flip-top , flip-bottom")

        setTimeout(() => {
            $("main .bonusPoint .bonusPoint__nums li:last-child")
                .addClass("flip-bottom")
        }, 0);

        setTimeout(() => {
            $("main .bonusPoint .bonusPoint__nums li:last-child")
                .removeClass("flip-bottom")
                .addClass("flip-top");
        }, 2000);
    };

    function updateCount() {
        $("main .bonusPoint .bonusPoint__nums li:last-child p").text(current);
    };

    function count() {
        if (active) {
            current++;
            if (current === 9) {
                active = false;
            }
        }
        else {
            current--;
            if (current === 0) {
                active = true;
            }
        }
        updateCount();
    }

    setInterval(() => {
        updateAnimate();
    }, 5000);

    setTimeout(() => {
        setInterval(() => {
            count();
        }, 5000);
    }, 1000);


})();