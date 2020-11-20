// BURGER MENU

const {
    gsap
} = window;

const btn = document.querySelector('.hamburger');


// Toggle class menu burger
btn.addEventListener("click", () => {
    console.log('yo;')
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
        ).set(".hamburger", {
            pointerEvents: "all",
        });
}

// Function hide menu
function hide() {

    let tl = gsap.timeline();

    gsap.set(".nav__inner, .hamburger", {
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
        "-=.8").set(".hamburger", {
        pointerEvents: "all",
    }).to(
        ".nav", {
            visibility: 'hidden'
        }
    );

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

function addCursorBtn(el) {
    cursor.classList.add("active-btn");
    follower.classList.add("active-btn");
    el.classList.add("hover");
}

function removeCursorBtn(el) {
    cursor.classList.remove("active-btn");
    follower.classList.remove("active-btn");
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

    // cursor btn scroll
    [].forEach.call(document.querySelectorAll('.btn'), function (el) {
        var offsetTopProject = el.offsetTop - mouseOfWindowY;
        var offsetBottomProject = offsetTopProject + el.offsetHeight;

        var offsetLeftProject = el.offsetLeft - mouseOfWindowX;
        var offsetRightProject = offsetLeftProject + el.offsetWidth;


        if (lastScrolledTop > offsetTopProject && lastScrolledTop < offsetBottomProject &&
            lastScrolledLeft > offsetLeftProject && lastScrolledLeft < offsetRightProject) {
            addCursorBtn(el);
            shouldSkip = true;
        } else if (!shouldSkip) {
            removeCursorBtn(el);
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

// Change cursor when mouse enter in btn item
[].forEach.call(document.querySelectorAll('.btn'), function (el) {
    el.addEventListener('mouseenter', function () {
        addCursorBtn(el);
    })
});

// Change cursor when mouse enter in btn item
[].forEach.call(document.querySelectorAll('.btn'), function (el) {
    el.addEventListener('mouseleave', function () {
        removeCursorBtn(el);
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


// SEND FORM AJAX




// EVENT BTN SEND FORM

let containerNameField = document.getElementById('container-name-field');
let containerEmailField = document.getElementById('container-email-field');
let containerProjectField = document.getElementById('container-project-field');
let containerServiceField = document.getElementById('container-service-field');
let containerPhoneField = document.getElementById('container-phone-field');
let containerWebsiteField = document.getElementById('container-website-field');

let containerNameFieldError = document.getElementById('error-name-field-container');
let containerEmailFieldError = document.getElementById('error-email-field-container');
let containerProjectFieldError = document.getElementById('error-project-field-container');
let containerServiceFieldError = document.getElementById('error-service-field-container');
let containerPhoneFieldError = document.getElementById('error-phone-field-container');
let containerWebsiteFieldError = document.getElementById('error-website-field-container');

const btnSendForm = document.querySelector('#send-btn-form');

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

                if (Object.values(errors).indexOf("missing_name") > -1) {
                    containerNameField.classList.add('container-field-error');
                    containerNameFieldError.innerHTML = "Un nom est nécéssaire";
                }
                if (Object.values(errors).indexOf("missing_email") > -1) {
                    containerEmailField.classList.add('container-field-error');
                    containerEmailFieldError.innerHTML = "Une adresse email est nécéssaire";
                }
                if (Object.values(errors).indexOf("missing_project") > -1) {
                    containerProjectField.classList.add('container-field-error');
                    containerProjectFieldError.innerHTML = "Une description du projet est nécéssaire";
                }
                if (Object.values(errors).indexOf("missing_service") > -1) {
                    containerServiceField.classList.add('container-field-error');
                    containerServiceFieldError.innerHTML = "Une description du service est nécéssaire";
                }
                if (Object.values(errors).indexOf("missing_phone") > -1) {
                    containerPhoneField.classList.add('container-field-error');
                    containerPhoneFieldError.innerHTML = "Un numéro de téléphone est nécéssaire";
                }


            } else if (response.status == 'succes') {
                console.log('Envoi réussi');
            }

        } else {
            console.log('l\'envoi à échoué');
        }
    };

    requestForm.onerror = function () {
        console.log('onerror');
    };


    let dataNameInput = document.getElementById('name-field-input').value;
    let dataEmailInput = document.getElementById('email-field-input').value;
    let dataProjectInput = document.getElementById('project-field-input').value;
    let dataServiceInput = document.getElementById('service-field-input').value;
    let dataPhoneInput = document.getElementById('phone-field-input').value;
    let dataWebsiteInput = document.getElementById('website-field-input').value;

    requestForm.send('action=verification_form&name=' + dataNameInput + '&email=' + dataEmailInput + '&project=' + dataProjectInput + '&service=' + dataServiceInput + '&phone=' + dataPhoneInput + '&website=' + dataWebsiteInput);
})