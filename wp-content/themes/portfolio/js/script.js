/*====================================
*     LOADER
======================================*/
// function loader(_success) {
//     var obj = document.querySelector('.container-loader'),
//     inner = document.querySelector('.preloader_inner');
//     //page = document.querySelector('.page');
//     //obj.classList.add('show');
//     //page.classList.remove('show');
//     var w = 0,
//         t = setInterval(function() {
//             w = w + 1;
//             inner.innerHTML = w+'%';
//             if (w === 100){
//                 // obj.classList.remove('show');
//                 // page.classList.add('show');
//                 clearInterval(t);
//                 w = 0;
//                 if (_success){
//                     return _success();
//                 }
//             }
//         }, 20);
// }

// loader();


/////////////
// SMOOTH SCROLL
/////////////


function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

function userAgentForScrollSmooth() {
    if (getOS() != "Mac OS" && getOS() != "iOS") {
        return true;
    } else {
        return false;
    }
}

let scrollContainer = document.querySelector("#scroll-container");
let mainContainer = document.querySelector("#main");
var html = document.documentElement;
var body = document.body;

if (!userAgentForScrollSmooth()) {

    var scroller = {
        target: scrollContainer,
        ease: .10, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
    };

    var requestId = null;

    TweenLite.set(scroller.target, {
        rotation: 0.01,
        force3D: true
    });

    window.addEventListener("load", onLoad);

    function onLoad() {
        updateScroller();
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll);

    }

    function updateScroller() {

        var resized = scroller.resizeRequest > 0;
        if (resized) {
            setTimeout(function () {
                scroller.resizeRequest = 0;

                var height = scroller.target.clientHeight;
                body.style.height = height + "px";

                // Double set style height because the first set is not good value
                var height = scroller.target.clientHeight;
                body.style.height = height + "px";
            }, 400);
        }

        var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }

        TweenLite.set(scroller.target, {
            y: -scroller.y
        });

        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    function onScroll() {

        scroller.scrollRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    function onResize() {

        scroller.resizeRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }

    }



} else {
    scrollContainer.style.position = 'initial';
    mainContainer.style.position = 'relative';
}

window.addEventListener("load", load);

function load() {
    eventsCursor();
}


/////////////
// MENU ANIMATION
/////////////
const {
    gsap
} = window;

const btn = document.querySelector('.hamburger');


// Check if default device is mobile or desktop
let defautWidthWindow;

if (window.innerWidth <= 767) {
    defautWidthWindow = 'mobile';
} else {
    defautWidthWindow = 'desktop';
}

// Init transition menu
let tlTransitionMenu = new TimelineMax({
    paused: false,
    reversed: true

});


defineTransitionMenu();

function defineTransitionMenu() {


    if (window.innerWidth <= 767) {
        // Mobile version
        tlTransitionMenu.fromTo(
                ".nav", {
                    display: 'none',
                    visibility: 'hidden',
                    duration: 0,

                }, {
                    display: 'block',
                    visibility: 'visible',
                    duration: 0,

                })
            .fromTo(".parts-bg-nav .part-bg-nav", {
                width: "0%",
            }, {
                duration: 1,
                width: "50%",
                ease: "power2.out",
                stagger: 0.05,
            })
            .fromTo(".marbles-container .marble-image", {
                maxWidth: "0%",
            }, {
                duration: 0,
                maxWidth: "45%",
                ease: "power4.out"
            })

            .fromTo(".nav--link", {
                    translateY: "100%",
                }, {
                    duration: 1,
                    translateY: "0%",
                    ease: "power4.out",
                    stagger: 0.25,
                },
                "-=.3"
            );
    } else {
        // desktop version
        tlTransitionMenu.fromTo(
                ".nav", {
                    display: 'none',
                    visibility: 'hidden',
                    duration: 0,

                }, {
                    display: 'block',
                    visibility: 'visible',
                    duration: 0,

                })
            .fromTo(".parts-bg-nav .part-bg-nav", {
                width: "0%",
            }, {
                duration: 1,
                width: "17%",
                ease: "power4.out",
                stagger: 0.05,
            })
            .fromTo(".marbles-container .marble-image", {
                maxWidth: "0%",
            }, {
                duration: 1,
                maxWidth: "45%",
                ease: "power4.out"
            }, ">-.5")

            .fromTo(".nav--link", {
                translateY: "100%",
            }, {
                duration: 1,
                translateY: "0%",
                ease: "power4.out",
                stagger: 0.25,
            }, "<");
    }

}

// Change transition when window is resize
window.addEventListener("resize", onResizeMenu);

function onResizeMenu() {
    if (window.innerWidth <= 767 && defautWidthWindow == 'desktop') {
        tlTransitionMenu.clear();
        defineTransitionMenu();
        defautWidthWindow = 'mobile';
    } else if (window.innerWidth > 767 && defautWidthWindow == 'mobile') {
        tlTransitionMenu.clear();
        defineTransitionMenu();
        defautWidthWindow = 'desktop';
    }
    transitionPage();
}

// Toggle class menu burger
btn.addEventListener("click", () => {
    if (btn.classList.contains('is-active')) {

        btn.classList.remove("is-active");

        // play transition menu
        tlTransitionMenu.reversed() ? tlTransitionMenu.play() : tlTransitionMenu.reverse();
    } else {
        btn.classList.add("is-active");

        // play reverse transition menu
        tlTransitionMenu.reversed() ? tlTransitionMenu.play() : tlTransitionMenu.reverse();
    }
})


///////////////
// PAGE TRANSITION PREVIOUS AND NEXT POPSTATE
///////////////


var isAnimating = false,
    newLocation = '';
firstLoad = false;

// TRANSITION
let tlTransitionPage = new TimelineMax({
    paused: false,
    reversed: true

});

function transitionPage() {
    if (window.innerWidth <= 767) {
        // Mobile version
        tlTransitionPage.to(
                ".nav", {
                    display: 'block',
                    visibility: 'visible',
                    zIndex: 10000,
                    duration: 0
                })
            .to(".parts-bg-nav .part-bg-nav", {
                duration: 1,
                width: "50%",
                ease: "power4.out",
                stagger: 0.05
            }).to('#lds-ellipsis', {
                display: "inline-block",
                opacity: 1,
                duration: .5,
                delay: -.75
            });

    } else {
        tlTransitionPage.to(
                ".nav", {
                    display: 'block',
                    visibility: 'visible',
                    zIndex: 10000,
                    duration: 0
                })
            .to(".parts-bg-nav .part-bg-nav", {
                duration: 1,
                width: "17%",
                ease: "power4.out",
                stagger: 0.05
            }).to('#lds-ellipsis', {
                display: "inline-block",
                opacity: 1,
                duration: .5,
                delay: -.75
            });
    }
}


transitionPage();


function transitionPageEvent() {
    //trigger smooth transition from the actual page to the new one 
    [].forEach.call(document.querySelectorAll('[data-type="page-transition"]'), function (el) {
        el.addEventListener('click', function (event) {
            event.preventDefault();
            //detect which page has been selected
            var newPage = el.getAttribute('href');

            if (!el.classList.contains('nav--link')) {
                tlTransitionPage.play();
            }
            //if the page is not animating - trigger animation
            if (!isAnimating) changePage(newPage, true);
            firstLoad = true;

        })
    });

}
transitionPageEvent();




window.onpopstate = function (event) {
    /*
    Safari emits a popstate event on page load - check if firstLoad is true before animating
    if it's false - the page has just been loaded 
    */
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            firstLoad = true;
        }
    } else {
        firstLoad = true;
    }

    if (firstLoad) {
        var newPageArray = location.pathname.split('/'),
            //this is the url of the page to be loaded 
            newPage = newPageArray[newPageArray.length - 2];

        if (!isAnimating && newLocation != newPage) {

            tlTransitionPage.play();
            changePage(newPage, false, true);
        }
    }
    firstLoad = true;
};

function changePage(url, bool, boolFromHistory = false) {
    isAnimating = true;
    // trigger page animation

    //if browser doesn't support CSS transitions
    loadNewContent(url, bool, boolFromHistory);
    newLocation = url;
    isAnimating = false;
    firstLoad = true;
}

function loadNewContent(url, bool, boolFromHistory = false) {
    url = ('' == url) ? '' : url;
    var newSection = 'cd-' + url.replace('.html', '');

    var section = document.createElement('div');
    section.className = "cd-main-content " + newSection;

    let scrollContainer = document.getElementById('scroll-container')

    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (responseBody) {
            // Convert the HTML string into a document object
            var parser = new DOMParser();
            var doc = parser.parseFromString(responseBody, 'text/html');
            let newContent = doc.getElementById('cd-main-content');

            setTimeout(function () {
                scrollContainer.innerHTML = '';
                scrollContainer.appendChild(newContent);
                eventsCursor();
                transitionPageEvent();

                if (userAgentForScrollSmooth()) {
                    scroller.resizeRequest = 1;
                    updateScroller();
                }

                scrollTo(0, 0);
                tlTransitionPage.reverse();
                formEvent();
            }, 700);

            btn.classList.remove("is-active");

            if (!boolFromHistory) tlTransitionMenu.reverse();

            isAnimating = false;
        });

    if (url != window.location && bool) {
        //add the new page to the window.history
        //if the new page was triggered by a 'popstate' event, don't add it
        window.history.pushState({
            path: url
        }, '', url);
    }
}

//////////
// CURSOR
//////////

// CURSOR FOLLOW MOUSE POSITION VAR
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


// CURSOR FOLLOW MOUSE POSITION
TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseOfWindowX - posX) / 9;
        posY += (mouseOfWindowY - posY) / 9;

        otherPosX += (mouseOfWindowX - otherPosX) / 2;
        otherPosY += (mouseOfWindowY - otherPosY) / 2;

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

// UPDATE MOUSE POSITION WHEN MOUSE MOVE
document.addEventListener('mousemove', function (e) {

    // Update mouse position
    mouseX = e.pageX;
    mouseY = e.pageY;

    // Stock mouse position relative of screen
    mouseOfWindowX = e.clientX;
    mouseOfWindowY = e.clientY;
});



// FUNCTIONS UPDATE CURSOR CLASS
function addCursorClick(el) {
    cursor.classList.add("active-click");
    follower.classList.add("active-click");
    el.classList.add("hover");
}

function removeCursorClick(el) {
    cursor.classList.remove("active-click");
    follower.classList.remove("active-click");
    el.classList.remove("hover");
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


// FUNCTION ANIMATION TURBULENCE
function turbulenceAnimation(elTurbulence, elDisplacement) {

let tlTurb = new TimelineMax({
    paused: true,
    reverse: true
});


    tlTurb.fromTo(elTurbulence, .05, {
        attr: {
            baseFrequency: '0 0'
        }
    }, {
        attr: {
            baseFrequency: '0.01 0.01'
        }
    }).to(elTurbulence, 2, {
            attr: {
                baseFrequency: '0 0'
            }
        })
        .fromTo(elDisplacement, 2, {
            attr: {
                scale: '20'
            }
        }, {
            attr: {
                scale: '0'
            }
        }, "=-2")

    tlTurb.play();
}

// UPDATE MOUSE POSITION WHEN USE SCROLL
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

    // cursor project scroll
    [].forEach.call(document.querySelectorAll('.item-projet'), function (el) {
        // Item relative to container parent
        var offsetTopProject = el.offsetTop + el.parentNode.parentNode.parentNode.offsetTop - mouseOfWindowY;
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

    // cursor btn scroll
    [].forEach.call(document.querySelectorAll('.click'), function (el) {
        var offsetTopProject = el.offsetTop + el.parentNode.parentNode.parentNode.parentNode.offsetTop - mouseOfWindowY;
        var offsetBottomProject = offsetTopProject + el.offsetHeight;

        var offsetLeftProject = el.offsetLeft - mouseOfWindowX;
        var offsetRightProject = offsetLeftProject + el.offsetWidth;

        if (lastScrolledTop > offsetTopProject && lastScrolledTop < offsetBottomProject &&
            lastScrolledLeft > offsetLeftProject && lastScrolledLeft < offsetRightProject) {
            addCursorClick(el);

            shouldSkip = true;
        } else if (!shouldSkip) {
            removeCursorClick(el);
        }
    });
}


// CHANGE CURSOR HOVER EVENTS
function eventsCursor() {
    // Change cursor when mouse enter in click item
    [].forEach.call(document.querySelectorAll('.click'), function (el) {
        el.addEventListener('mouseenter', function () {
            addCursorClick(el);
        })
    });

    // Change cursor when mouse enter in click item
    [].forEach.call(document.querySelectorAll('.click'), function (el) {
        el.addEventListener('mouseleave', function () {
            removeCursorClick(el);
        })
    });

    // Change cursor when mouse enter in project
    [].forEach.call(document.querySelectorAll('.item-projet'), function (el) {
        el.addEventListener('mouseenter', function () {
            addCursorProject(el);
            let elTurbulence = document.getElementById('turbulence-' + el.dataset.id);
            let elDisplacement = document.getElementById('displacement-' + el.dataset.id);
            
            turbulenceAnimation(elTurbulence, elDisplacement, el.dataset.id);
        })
    });

    // Change cursor when mouse leave in project
    [].forEach.call(document.querySelectorAll('.item-projet'), function (el) {
        el.addEventListener('mouseleave', function () {
            removeCursorProject(el);
            let elTurbulence = document.getElementById('turbulence-' + el.dataset.id);
            let elDisplacement = document.getElementById('displacement-' + el.dataset.id);
            turbulenceAnimation(elTurbulence, elDisplacement);

        })
    });
}


//////////
// FORM
//////////
function updatePageform(formContact, pageNumber) {
    formContact.classList.remove('page-1', 'page-2', 'page-3', 'page-4');
    formContact.classList.add('page-' + pageNumber);
}

formEvent();

function formEvent() {
    // UPDATE PAGE STEP FORM

    let formContact = document.getElementById("form-contact");
    let containerNameField = document.getElementById('container-name-field');
    let containerEmailField = document.getElementById('container-email-field');
    let containerProjectField = document.getElementById('container-project-field');
    let containerServiceField = document.getElementById('container-service-field');
    let containerPhoneField = document.getElementById('container-phone-field');
    let containerWebsiteField = document.getElementById('container-website-field');

    let nameInput = document.getElementById('name-field-input');
    let emailInput = document.getElementById('email-field-input');
    let projectInput = document.getElementById('project-field-input');
    let serviceInput = document.getElementById('service-field-input');
    let phoneInput = document.getElementById('phone-field-input');
    let websiteInput = document.getElementById('website-field-input');

    let arrayInput = [nameInput, emailInput, projectInput, serviceInput, phoneInput, websiteInput];

    let containerNameFieldError = document.getElementById('error-name-field-container');
    let containerEmailFieldError = document.getElementById('error-email-field-container');
    let containerProjectFieldError = document.getElementById('error-project-field-container');
    let containerServiceFieldError = document.getElementById('error-service-field-container');
    let containerPhoneFieldError = document.getElementById('error-phone-field-container');
    let containerWebsiteFieldError = document.getElementById('error-website-field-container');

    let containerSuccesformSend = document.getElementById('response-email-send');


    const btnSendForm = document.querySelector('#send-btn-form');


    // Change cursor when mouse leave in project
    [].forEach.call(document.querySelectorAll('.btn-next-page-form'), function (el) {
        el.addEventListener('click', function () {

            if (el.classList.contains("btn-next-page-form__page-1")) {
                updatePageform(formContact, 2);
            } else if (el.classList.contains("btn-next-page-form__page-2")) {
                updatePageform(formContact, 3);
            } else if (el.classList.contains("btn-next-page-form__page-3")) {
                updatePageform(formContact, 4);
            };
        })
    });

    // Change cursor when mouse leave in project
    [].forEach.call(document.querySelectorAll('.btn-previous-page-form'), function (el) {
        el.addEventListener('click', function () {

            if (el.classList.contains("btn-previous-page-form__page-1")) {
                updatePageform(formContact, 0);
            } else if (el.classList.contains("btn-previous-page-form__page-2")) {
                updatePageform(formContact, 1);
            } else if (el.classList.contains("btn-previous-page-form__page-3")) {
                updatePageform(formContact, 2);
            } else if (el.classList.contains("btn-previous-page-form__page-4")) {
                updatePageform(formContact, 3);
            };
        })
    });

    // Change cursor when mouse leave in project
    [].forEach.call(document.querySelectorAll('.form-field'), function (el) {
        el.addEventListener('input', function () {
            el.parentNode.classList.remove("container-field-error");
        })
    });

    // SEND FORM AJAX

    // event btn send form
    btnSendForm.addEventListener("click", () => {

        var requestForm = new XMLHttpRequest();
        requestForm.open('POST', adminAjax, true);
        requestForm.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        requestForm.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // get response and convert to Object
                let response = JSON.parse(requestForm.response);

                if (response.status == 'error') {
                    let errors = response.errors;

                    let pageToRedirect;

                    if (Object.values(errors).indexOf("missing_name") > -1) {
                        containerNameField.classList.add('container-field-error');
                        containerNameFieldError.innerHTML = "Un nom est nécéssaire";
                        pageToRedirect = 1;
                    } else if (Object.values(errors).indexOf("name_invalid") > -1) {
                        containerNameField.classList.add('container-field-error');
                        containerNameFieldError.innerHTML = "Le nom n'est pas valide";
                        pageToRedirect = 1;

                    } else {
                        containerNameField.classList.remove('container-field-error');
                    }

                    if (Object.values(errors).indexOf("missing_email") > -1) {
                        containerEmailField.classList.add('container-field-error');
                        containerEmailFieldError.innerHTML = "Une adresse email est nécéssaire";
                        pageToRedirect = 1;

                    } else if (Object.values(errors).indexOf("email_invalid") > -1) {
                        containerEmailField.classList.add('container-field-error');
                        containerEmailFieldError.innerHTML = "L'adresse email n'est pas valide";
                        pageToRedirect = 1;

                    } else {
                        containerEmailField.classList.remove('container-field-error');
                    }

                    if (Object.values(errors).indexOf("missing_project") > -1) {
                        containerProjectField.classList.add('container-field-error');
                        containerProjectFieldError.innerHTML = "Une description du projet est nécéssaire";
                        if (!pageToRedirect) pageToRedirect = 2;
                    } else {
                        containerProjectField.classList.remove('container-field-error');
                    }

                    if (Object.values(errors).indexOf("missing_service") > -1) {
                        containerServiceField.classList.add('container-field-error');
                        containerServiceFieldError.innerHTML = "Une description du service est nécéssaire";
                        if (!pageToRedirect) pageToRedirect = 3;

                    } else {
                        containerServiceField.classList.remove('container-field-error');
                    }

                    if (Object.values(errors).indexOf("missing_phone") > -1) {
                        containerPhoneField.classList.add('container-field-error');
                        containerPhoneFieldError.innerHTML = "Un numéro de téléphone est nécéssaire";
                        if (!pageToRedirect) pageToRedirect = 4;

                    } else if (Object.values(errors).indexOf("phone_invalid") > -1) {
                        containerPhoneField.classList.add('container-field-error');
                        containerPhoneFieldError.innerHTML = "Le numéro de téléphone n'est pas valide";
                        if (!pageToRedirect) pageToRedirect = 4;
                    } else {
                        containerPhoneField.classList.remove('container-field-error');
                    }

                    updatePageform(pageToRedirect);

                } else if (response.status == 'succes') {
                    containerSuccesformSend.classList.add('show');
                    formContact.reset();
                    updatePageform(1);
                }

            } else {
                console.log('l\'envoi à échoué');
            }
        };

        requestForm.onerror = function () {
            console.log('onerror');
        };

        let dataNameInput = nameInput.value;
        let dataEmailInput = emailInput.value;
        let dataProjectInput = projectInput.value;
        let dataServiceInput = serviceInput.value;
        let dataPhoneInput = phoneInput.value;
        let dataWebsiteInput = websiteInput.value;

        requestForm.send('action=verification_form&name=' + dataNameInput + '&email=' + dataEmailInput + '&project=' + dataProjectInput + '&service=' + dataServiceInput + '&phone=' + dataPhoneInput + '&website=' + dataWebsiteInput);
    })
}



/////////////
// SCROLL REVEAL
/////////////
var controller = new ScrollMagic.Controller();

let i = 0;

[].forEach.call(document.querySelectorAll('.reveal-header-image'), function (el) {
    i = i + 200;
    setTimeout(function () {
        el.classList.add('active');
    }, i);

    i = i + 800;
});


[].forEach.call(document.querySelectorAll('.reveal-header-text-line'), function (el) {

    setTimeout(function () {
        el.classList.add('active');
    }, i);

    i = i + 100;
});


[].forEach.call(document.querySelectorAll('.reveal-header-adjectif'), function (el) {

    setTimeout(function () {
        el.classList.add('active');
    }, i);

    i = i + 200;
});





// const revealParagraphe = gsap.utils.toArray('.reveal-paragraphe');
// revealParagraphe.forEach((image, i) => {
//     ScrollTrigger.create({
//         trigger: image,
//         toggleClass: 'active',
//         start: "top 60%",
//         endTrigger: 'footer'

//     })
// });





// const revealImageOp = gsap.utils.toArray('.reveal-image-opacity');
// revealImageOp.forEach((imageContainer, i) => {
//     ScrollTrigger.create({
//         trigger: imageContainer,
//         toggleClass: 'active',
//         start: "top 60%",
//         endTrigger: 'footer'
//     })
// });


// const revealParagraphe = gsap.utils.toArray('.reveal-paragraphe');
// revealParagraphe.forEach((text, i) => {
//     ScrollTrigger.create({
//         trigger: text,
//         toggleClass: 'active',
//         start: "top 60%",
//         endTrigger: 'footer'
//     })
// });



gsap.registerPlugin(ScrollTrigger);

// const revealImage = gsap.utils.toArray('.reveal-image');
// revealImage.forEach((imageContainer, i) => {
//     ScrollTrigger.create({
//         trigger: imageContainer,
//         toggleClass: 'active',
//         start: "top 60%",
//         endTrigger: 'footer'
//     })
// });

let revealContainers = document.querySelectorAll(".reveal-image");

revealContainers.forEach((container) => {
    let image = container.querySelector(".img");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            toggleActions: "play none none reverse",
            start: "top 60%"
        }
    });

    tl.set(container, {
        autoAlpha: 1
    });
    tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
    });
});



gsap.from("#section-services .service-item", {
    scrollTrigger: {
        trigger: "#section-services .services-col",
        toggleActions: "play none none reverse",
        start: "top 60%"
    },
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.1
});

// const reveal = gsap.utils.toArray('.reveal-text');
// reveal.forEach((text, i) => {
//     ScrollTrigger.create({
//         trigger: text,
//         toggleClass: "active",
//         start: "top 60%",
//         endTrigger: 'footer',
//     })
// });

// let revealContainersText = document.querySelectorAll("#section-a-propos");

// const reveal = gsap.utils.toArray('#section-a-propos .reveal-text');
// reveal.forEach((text, i) => {

//     console.log(text);
//     gsap.from(text, {
//         scrollTrigger: {
//             trigger: revealContainersText,
//             toggleActions: "play none none reverse",
//             start: "top 60%",
//             toggleClass: "active",
//             endTrigger: 'footer',
//             markers: true
//         }
//     });

// });

// gsap.from("#section-a-propos .reveal-paragraphe", {
//     scrollTrigger: {
//         trigger: revealContainersText,
//         toggleActions: "play none none reverse",
//         start: "top 60%"
//     },
//     y: 400,
//     duration: 1,
//     ease: "none",
//     opacity: 0

// });

// REVEAL TEXT BACKGROUND
[].forEach.call(document.querySelectorAll('.reveal-text'), function (el) {
    var triggerElement = el.closest("section");
    new ScrollMagic.Scene({
            triggerElement: triggerElement,
            reverse: true, // only do once
        })
        .setClassToggle(el, "active") // add class to reveal
        .addTo(controller)
});

// REVEAL TEXT PARAGRAPHE FROM BOTTOM
[].forEach.call(document.querySelectorAll('.reveal-b'), function (el) {
    var triggerElement = el.closest("section");
    new ScrollMagic.Scene({
            triggerElement: triggerElement,
            reverse: true, // only do once
        })
        .setClassToggle(el, "active") // add class to reveal
        .addTo(controller)
});



[].forEach.call(document.querySelectorAll('.item-projet'), function (el) {

    let picOverlay = el.querySelectorAll('.overlay');
    let projetNumber = el.querySelectorAll('.number-projet');
    let projectTitle = el.querySelectorAll('.title-projet');

    let animateIn = new TimelineMax();

    animateIn.from(projetNumber, {
            y: "100%",
            ease: "power1.out",
            duration: 1
        })
        .fromTo(picOverlay, {
            skewX: 30,
            scale: 1.5,
        }, {
            skewX: 0,
            xPercent: 110,
            transformOrigin: "0% 95%",
            ease: Power4.easeOut,
            duration: 3.5

        }, '=-.5')
        .from(projectTitle, {
            y: "100%",
            ease: "power1.out",
            duration: 1
        }, '=-3')

    var scene = new ScrollMagic.Scene({
        triggerElement: el,
        reverse: true // only do once
    }).setTween(animateIn).addTo(controller)

});