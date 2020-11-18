// BURGER MENU

const {
    gsap
} = window;

const btn = document.querySelector('.menu-btn');

// Toggle class menu burger
btn.addEventListener("click", () => {
    if (btn.classList.contains('active')) {
        btn.classList.remove("active");
        hide();
    } else {
        btn.classList.add("active");
        show();
    }
})

// Function show
function show() {

    let tl = gsap.timeline();

    gsap.set(".nav__inner, .menu-btn", {
        pointerEvents: "none",
    });

    tl.to(
            ".nav", {
                visibility: 'visible'
            },
            "-=.8").fromTo(
            ".nav--transition-slide", {
                scaleX: 0,
                transformOrigin: "left center",
            }, {
                duration: 0.5,
                scaleX: 1,
                ease: "Expo.inOut",
            }
        ).set(".nav__inner", {
            pointerEvents: "all",
        })
        .fromTo(".nav--item-line", {
            scaleX: 0,
            transformOrigin: "left center",

        }, {
            duration: 0.65,
            scaleX: 1,
            ease: "Expo.inOut",
            stagger: 0.15,
        })
        .fromTo(".nav--link", {
                translateY: "100%",
            }, {
                duration: 2.25,
                translateY: "0%",
                ease: "elastic.inOut",
                stagger: 0.15,
            },
            "-=2"
        ).set(".menu-btn", {
            pointerEvents: "all",
        });
}

// Function hide menu
function hide() {

    let tl = gsap.timeline();

    gsap.set(".nav__inner, .menu-btn", {
        pointerEvents: "none",
    });


    tl.to(".nav--item-line", {
        duration: 0.6,
        scaleX: 0,
        transformOrigin: 'right center',
        ease: "Expo.inout",
        stagger: -0.15
    }).to(".nav--link", {
            duration: 2.25,
            translateY: "100%",
            ease: "elastic.inOut",
            stagger: -0.15,
        },
        "-=2").to(
        ".nav--transition-slide", {
            duration: .5,
            transformOrigin: "right center",
            scaleX: 0,
            ease: "Expo.inOut",
        },
        "-=.8").set(".menu-btn", {
        pointerEvents: "all",
    }).to(
        ".nav", {
            visibility: 'hidden'
        }
    );

}




//////////
// PROJETS
//////////

var cursor = document.querySelector(".cursor"),
    follower = document.querySelector(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0,
    otherPosX = 0,
    otherPosY = 0,

    mouseOfWindowX = 0,
    mouseOfWindowY = 0;

var lastScrolledLeft = window.scrollX;
var lastScrolledTop = window.scrollY;



// cursor follow mouse position
TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        otherPosX += (mouseX - otherPosX) / 4;
        otherPosY += (mouseY - otherPosY) / 4;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: otherPosX,
                top: otherPosY
            }
        });
    }
});

// Update mouse position when mouse move
document.addEventListener('mousemove', function (e) {

    // Update mouse position
    mouseX = e.pageX;
    mouseY = e.pageY;

    // Stock mouse position relative of screen
    mouseOfWindowX = e.clientX;
    mouseOfWindowY = e.clientY;
});


// Update mouse position when use scroll
document.addEventListener('scroll', mouseScroll, false);

function mouseScroll(e) {
    var differenceScrollY = window.scrollY - lastScrolledTop;
    var differenceScrollX = window.scrollX - lastScrolledLeft;

    mouseX += differenceScrollX;
    mouseY += differenceScrollY;
    lastScrolledTop = window.scrollY;
    lastScrolledLeft = window.scrollX;

    // var for break in forEach
    let shouldSkip = false;


    [].forEach.call(document.querySelectorAll('.item-projet'), function (el) {
        var offsetTopProject = el.offsetTop - mouseOfWindowY;
        var offsetBottomProject = offsetTopProject + el.offsetHeight;

        var offsetLeftProject = el.offsetLeft - mouseOfWindowX;
        var offsetRightProject = offsetLeftProject + el.offsetWidth;


        if (lastScrolledTop > offsetTopProject && lastScrolledTop < offsetBottomProject &&
            lastScrolledLeft > offsetLeftProject && lastScrolledLeft < offsetRightProject) {
            addCursorProject(el);
            shouldSkip = true;
        } else if (!shouldSkip) {
            removeCursorProject(el);
        }
    });
}

function addCursorProject(el) {
    cursor.classList.add("active-projet");
    follower.classList.add("active-projet");
    el.classList.add("hover");

}

function removeCursorProject(el) {
    cursor.classList.remove("active-projet");
    follower.classList.remove("active-projet");
    el.classList.remove("hover");

}



// Change cursor when mouse enter in project
[].forEach.call(document.querySelectorAll('.item-projet'), function (el) {
    el.addEventListener('mouseenter', function () {
        addCursorProject(el);

    })

});

// Change cursor when mouse leave in project
[].forEach.call(document.querySelectorAll('.item-projet'), function (el) {
    el.addEventListener('mouseleave', function () {
        removeCursorProject(el);

    })

});