<?php
/* Template Name: Contact page */

get_header();
?>
<section id="header-section">
    <div class="strokes strokes__black">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="wrapper-section">
        <div class="content-header">
            <h1 class="title-page">Contact</h1>
            <p class="intro-page">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quod minus ipsa. Magnam, voluptas ducimus. Dolorum aliquid, aspernatur corrupti tempora autem, tempore deserunt vel tenetur voluptate, ipsa dolorem repellendus quam.
            </p>
        </div>
    </div>
</section>

<section id="section-list-contact">
    <div class="strokes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="wrapper-section">
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="item-contact">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <span>Besançon, France</span>
                </div>

            </div>
            <div class="col-12 col-lg-4">
                <div class="item-contact">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                    </svg>
                    <span>06 29 35 66 33</span>

                </div>

            </div>
            <div class="col-12 col-lg-4">
                <div class="item-contact">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                    </svg>
                    <span>hello@dorianlarosa.fr</span>

                </div>

            </div>
        </div>

        <div class="container-texts">
            <div class="container-text">
                <p class="text-item">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, iste reiciendis! Facilis possimus illum adipisci. Suscipit iusto reprehenderit inventore? Numquam est doloremque hic nihil adipisci sed nostrum? Aliquam, esse hic.
                </p>
                <p class="text-item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium omnis commodi ex nisi impedit quisquam temporibus, veritatis cupiditate repudiandae dolorem voluptatum rerum similique corporis quod deleniti, hic, qui at! </p>
            </div>

            <div class="container-text">
                <p class="text-item">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta totam a, aperiam velit asperiores modi rem sequi magni ullam harum officiis dolor unde nemo ipsum non dicta quia exercitationem voluptatibus. </p>
                <p class="text-item">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem libero placeat facere laborum illo et voluptatem, ipsam optio ut distinctio voluptatum expedita, perspiciatis adipisci enim nostrum exercitationem corporis fuga at? </p>
            </div>
        </div>
    </div>

</section>

<section id="section-social-networks">
    <div class="strokes strokes__black">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="wrapper-section">

        <div class="row">
            <div class="col-12 col-md-4 container-network-link">
                <span class="network-link click"><a href="#">Linkedin</a></span>
            </div>
            <div class="col-12 col-md-4 container-network-link">
                <span class="network-link click"><a href="#">Instagram</a></span>
            </div>
            <div class="col-12 col-md-4 container-network-link">
                <span class="network-link click"><a href="#">Twitter</a></span>
            </div>
        </div>
    </div>

</section>

<?php get_template_part('parts/form-section'); ?>

<?php get_footer(); ?>