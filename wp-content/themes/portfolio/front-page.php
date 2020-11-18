<?php get_header(); ?>



<section id="header-section" class="container-fluid">
    <div class="container-big-image-header">
        <img class="big-image-header" src="<?= get_template_directory_uri() ?>/images/big_image_header.jpg" alt="">
    </div>
    <div class="container-little-image-header">
        <img class="little-image-header" src="<?= get_template_directory_uri() ?>/images/little_image_header.jpg" alt="">
    </div>
    <div class="container">
        <div class="content-header">
            <h1 class="title-page">Création <span>de sites</span> qui font la <span>difference</span></h1>
            <span class="adjectifs">
                Créatif<br>
                Freelance<br>
                Développeur
            </span>
        </div>

    </div>
</section>

<section id="a-propos-section" class="container-fluid">
    <div class="container">

        <h2>Construire un site qui à de <span>l'impact</span></h2>
        <p class="text-section">Il est primordial de se démarquer des autres sites web, c'est la raison pour laquelle j'accompagne les marques les plus ambitieuse dans leurs développement</p>
        <div class="row element element-1">

            <div class="col-12 col-lg-6 order-lg-1 col-element">
                <p class="pre-title">Découvrez mes engagements</p>
                <h3>En savoir d'avantage sur moi</h3>
                <p class="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum veritatis, pariatur minima dolor doloribus, numquam facilis ducimus unde vero exercitationem!</p>
                <a href="#" class="link-btn btn">
                    Découvrir
                </a>
            </div>

            <div class="col-12 col-lg-6 col-element">
                <img class="mockup-mac" src="<?= get_template_directory_uri() ?>/images/mockup_mac.png" alt="">
            </div>
        </div>

        <div class="row element element-2">

            <div class="col-12 col-lg-6 col-element">
                <p class="pre-title">Découvrez mes engagements</p>
                <h3>En savoir d'avantage sur moi</h3>
                <p class="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum veritatis, pariatur minima dolor doloribus, numquam facilis ducimus unde vero exercitationem!</p>
                <a href="#" class="link-btn btn">
                    Découvrir
                </a>
            </div>

            <div class="col-12 col-lg-6 col-element">
                <img class="mockup-mac" src="<?= get_template_directory_uri() ?>/images/mockup_mac.png" alt="">
            </div>
        </div>
    </div>

</section>

<section id="section-projets" class="container-fluid">
    <div class="container">

        <h2>Découvrez quelques <span>projets</span> récent</h2>
        <p class="text-section">Il est primordial de se démarquer des autres sites web, c'est la raison pour laquelle j'accompagne les marques les plus ambitieuse dans leurs développement</p>

        <div class="content">
            <div class="item-projet">
                <div class="item-imgwrap">
                    <img class="item-img" src="<?= get_template_directory_uri() ?>/images/projets/vcn.jpg)" alt="">

                </div>
                <h3 class="title-projet">Vous C'est Nous</h3>
                <p class="description-projet">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia accusantium veniam vel a maiores quidem repellat
                </p>
            </div>
            <div class="item-projet">
                <div class="item-imgwrap">
                    <img class="item-img" src="<?= get_template_directory_uri() ?>/images/projets/soundpods.jpg)" alt="">
                </div>
                <h3 class="title-projet">MySoundPods</h3>

                <p class="description-projet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa est voluptatibus quod aperiam. </p>
            </div>
            <div class="item-projet">
                <div class="item-imgwrap">
                    <img class="item-img" src="<?= get_template_directory_uri() ?>/images/projets/egs.jpg)" alt="">
                </div>
                <h3 class="title-projet">EGS Securité</h3>

                <p class="description-projet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, hic sequi asperiores necessitatibus</p>
            </div>
            <div class="item-projet">
                <div class="item-imgwrap">
                    <img class="item-img" src="<?= get_template_directory_uri() ?>/images/projets/real.jpg)" alt="">
                </div>
                <h3 class="title-projet">Real Madrid</h3>

                <p class="description-projet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, hic sequi asperiores necessitatibus</p>
            </div>
            <div class="item-projet">
                <div class="item-imgwrap">
                    <img class="item-img" src="<?= get_template_directory_uri() ?>/images/projets/bornes.jpg)" alt="">
                </div>
                <h3 class="title-projet">MapElectric</h3>

                <p class="description-projet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, hic sequi asperiores necessitatibus</p>
            </div>
        </div>
    </div>

</section>


<?php get_footer(); ?>