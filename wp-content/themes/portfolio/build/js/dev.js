/////////////
// SMOOTH SCROLL
/////////////

// var html = document.documentElement;
// var body = document.body;

// var scroller = {
//   target: document.querySelector("#scroll-container"),
//   ease: 0.05, // <= scroll speed
//   endY: 0,
//   y: 0,
//   resizeRequest: 1,
//   scrollRequest: 0,
// };

// var requestId = null;

// TweenLite.set(scroller.target, {
//   rotation: 0.01,
//   force3D: true
// });

// window.addEventListener("load", onLoad);

// function onLoad() {    
//   updateScroller();  
//   window.focus();
//   window.addEventListener("resize", onResize);
//   document.addEventListener("scroll", onScroll); 
// }

// function updateScroller() {

//   var resized = scroller.resizeRequest > 0;

//   if (resized) {    
//     var height = scroller.target.clientHeight;
//     body.style.height = height + "px";
//     scroller.resizeRequest = 0;
//   }

//   var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

//   scroller.endY = scrollY;
//   scroller.y += (scrollY - scroller.y) * scroller.ease;

//   if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
//     scroller.y = scrollY;
//     scroller.scrollRequest = 0;
//   }

//   TweenLite.set(scroller.target, { 
//     y: -scroller.y 
//   });

//   requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
// }

// function onScroll() {
//   scroller.scrollRequest++;
//   if (!requestId) {
//     requestId = requestAnimationFrame(updateScroller);
//   }
// }

// function onResize() {
//   scroller.resizeRequest++;
//   if (!requestId) {
//     requestId = requestAnimationFrame(updateScroller);
//   }
// }

const body = document.body,
    scrollWrap = document.getElementsByClassName("scroll-container")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;
//height = 4784;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

// BURGER MENU

const {
    gsap
} = window;

const btn = document.querySelector('.hamburger');


// Toggle class menu burger
btn.addEventListener("click", () => {
    if (btn.classList.contains('is-active')) {
        btn.classList.remove("is-active");
        hide();
    } else {
        btn.classList.add("is-active");
        show();
    }
})

// Function show
function show() {

    let tl = gsap.timeline();

    gsap.set(".nav__inner, .hamburger", {
        pointerEvents: "none",
    });

    if (window.innerWidth < 1200) {
        // Mobile version
        tl.to(
                ".nav", {
                    display: 'block',
                    visibility: 'visible'
                },
                "-=.8")
            .fromTo(".parts-bg-nav div", {
                width: "0%",
            }, {
                duration: 1,
                width: "17%",
                ease: "power4.out",
                stagger: 0.05,
            }).fromTo(".marbles-container .marble-image", {
                maxWidth: "0%",
            }, {
                duration: 0,
                maxWidth: "45%",
                ease: "power4.out"
            }).set(".nav__inner", {
                pointerEvents: "all",
            }).fromTo(".nav--link", {
                    translateY: "100%",
                }, {
                    duration: 2.60,
                    translateY: "0%",
                    ease: "elastic.inOut",
                    stagger: 0.25,
                },
                "-=1.75"
            ).set(".hamburger", {
                pointerEvents: "all",
            });
    } else {
        // Desktop version
        tl.to(
                ".nav", {
                    display: 'block',
                    visibility: 'visible'
                },
                "-=.8")
            .fromTo(".parts-bg-nav div", {
                width: "0%",
            }, {
                duration: 1,
                width: "17%",
                ease: "power4.out",
                stagger: 0.05,
            }).fromTo(".marbles-container .marble-image", {
                    maxWidth: "0%",
                }, {
                    duration: 1,
                    maxWidth: "45%",
                    ease: "power4.out",
                    stagger: 0.15,
                },
                "-=.5")
            .set(".nav__inner", {
                pointerEvents: "all",
            }).fromTo(".nav--link", {
                    translateY: "100%",
                }, {
                    duration: 2.60,
                    translateY: "0%",
                    ease: "elastic.inOut",
                    stagger: 0.25,
                },
                "-=1.7"
            ).set(".hamburger", {
                pointerEvents: "all",
            });
    }

}

// Function hide menu
function hide() {

    let tl = gsap.timeline();

    gsap.set(".nav__inner, .hamburger", {
        pointerEvents: "none",
    });

    if (window.innerWidth < 1200) {
        // Mobile version
        tl.to(".nav--item-line", {
            duration: 0.6,
            scaleX: 0,
            transformOrigin: 'right center',
            ease: "Expo.inout",
            stagger: -0.15
        }).to(".nav--link", {
                duration: 2.60,
                translateY: "100%",
                ease: "elastic.inOut",
                stagger: -0.25,
            },
            "-=2").fromTo(".marbles-container .marble-image", {
            maxWidth: "45%",
        }, {
            duration: 0,
            maxWidth: "0%",
            ease: "power4.out"
        }).to(".parts-bg-nav div", {
                width: "0%",
                duration: 1,
                ease: "power4.in",
                stagger: 0.05,
            },
            "-=1.5").to(
            ".nav", {
                visibility: 'hidden',
                display: 'none'
            }
        ).set(".hamburger", {
            pointerEvents: "all",
        });
    } else {
        tl.to(".nav--item-line", {
            duration: 0.6,
            scaleX: 0,
            transformOrigin: 'right center',
            ease: "Expo.inout",
            stagger: -0.15
        }).to(".nav--link", {
                duration: 2.60,
                translateY: "100%",
                ease: "elastic.inOut",
                stagger: -0.25,
            },
            "-=2").fromTo(".marbles-container .marble-image", {
                maxWidth: "45%",
            }, {
                duration: 1.5,
                maxWidth: "0%",
                ease: "power4.out",
                stagger: 0.15,
            },
            "-=1").to(".parts-bg-nav div", {
                width: "0%",
                duration: 1,
                ease: "power4.in",
                stagger: 0.05,
            },
            "-=1").to(
            ".nav", {
                visibility: 'hidden',
                display: 'none'
            }
        ).set(".hamburger", {
            pointerEvents: "all",
        });
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
    })
});

// Change cursor when mouse leave in project
[].forEach.call(document.querySelectorAll('.item-projet'), function (el) {
    el.addEventListener('mouseleave', function () {
        removeCursorProject(el);
    })
});



//////////
// FORM
//////////

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

function updatePageform(pageNumber) {
    formContact.classList.remove('page-1', 'page-2', 'page-3', 'page-4');
    formContact.classList.add('page-' + pageNumber);
}
// Change cursor when mouse leave in project
[].forEach.call(document.querySelectorAll('.btn-next-page-form'), function (el) {
    el.addEventListener('click', function () {

        if (el.classList.contains("btn-next-page-form__page-1")) {
            updatePageform(2);
        } else if (el.classList.contains("btn-next-page-form__page-2")) {
            updatePageform(3);
        } else if (el.classList.contains("btn-next-page-form__page-3")) {
            updatePageform(4);
        };
    })
});

// Change cursor when mouse leave in project
[].forEach.call(document.querySelectorAll('.btn-previous-page-form'), function (el) {
    el.addEventListener('click', function () {

        if (el.classList.contains("btn-previous-page-form__page-1")) {
            updatePageform(0);
        } else if (el.classList.contains("btn-previous-page-form__page-2")) {
            updatePageform(1);
        } else if (el.classList.contains("btn-previous-page-form__page-3")) {
            updatePageform(2);
        } else if (el.classList.contains("btn-previous-page-form__page-4")) {
            updatePageform(3);
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
                console.log(errors);

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