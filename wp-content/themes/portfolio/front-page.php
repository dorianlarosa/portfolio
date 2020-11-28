<?php get_header(); ?>



<section id="header-home-section">
    <div class="strokes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="marbre">

    </div>
    <div class="wrapper-section">
        <div class="content-header">
            <div class="pre-title">
                Dorian LA ROSA - Développeur
            </div>
            <h1 class="title-page">J'accompagne les entreprises à développer <span>des sites</span> qui font la <span>difference</span></h1>
            <span class="adjectifs">
                Créatif<br>
                Freelance<br>
                Développeur
            </span>
        </div>

    </div>
</section>

<section id="section-services">
    <div class="strokes strokes__black">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="wrapper-section">
        <h2 class="title-white">Construire un site qui à de <span>l'impact</span></h2>
        <p class="text-section text-white">Il est primordial de se démarquer des autres sites web, c'est la raison pour laquelle j'accompagne les marques les plus ambitieuse dans leurs développement</p>


        <div class="row">
            <div class="col-12 col-lg-6 marble-col">

                <div class="marble marble-1">

                </div>

                <div class="marble marble-2">

                </div>
            </div>
            <div class="col-12 col-lg-6 services-col">
                <ul>
                    <li class="service-item">
                        <span class="number-service">01</span>
                        Conception et suivi de projet
                    </li>
                    <li class="service-item">
                        <span class="number-service">02</span>
                        Graphisme et identitée visuelle
                    </li>
                    <li class="service-item">
                        <span class="number-service">03</span>
                        Web design et ergonomie
                    </li>
                    <li class="service-item">
                        <span class="number-service">04</span>
                        Développement et réferencement
                    </li>
                    <li class="service-item">
                        <span class="number-service">05</span>
                        Refonte d'un site existant
                    </li>
                    <li class="service-item">
                        <span class="number-service">06</span>
                        Suivi de projet et maintenance
                    </li>
                </ul>
            </div>
        </div>

    </div>
</section>

<section id="section-a-propos">
<div class="strokes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="wrapper-section">

        <h2>Un artisan du <span>web</span></h2>
        <div class="row">

            <div class="col-12 col-lg-6 col-element col-element__text">
                <p class="pre-title">Découvrez mes engagements</p>
                <h3>En savoir d'avantage sur moi</h3>
                <p class="text-section">
                Les gens les appellent souvent simplement des sites Web, des applications ou des plates-formes. La plupart du temps, j'essaye de concevoir des expériences utilisateur.
                </p>
                <a href="#" class="link-btn btn click">
                    Découvrir
                </a>
            </div>

            <div class="col-12 col-lg-6 col-element col-element__image">
                <img class="portrait" src="<?= get_template_directory_uri() ?>/images/portrait.png" alt="">
            </div>
        </div>
    </div>

</section>

<section id="section-realisation">
    <div class="wrapper-section">
    <div class="strokes strokes__black">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
        <h2 class="title-white">Dernières <span>réalisations</span></h2>

        <?php get_template_part('parts/list-realisations'); ?>
    </div>

</section>

<?php get_template_part('parts/form-section'); ?>

<?php get_footer(); ?>