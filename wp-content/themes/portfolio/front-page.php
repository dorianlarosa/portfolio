<?php get_header(); ?>



<section id="header-home-section">
    <div class="strokes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="marbre reveal-header-image reveal-header-image__from-right">

    </div>
    <div class="wrapper-section">
        <div class="content-header">
            <div class="pre-title">
                <span class="reveal-header-text-line reveal-header-text-line__primary">
                    Dorian LA ROSA - Développeur
                </span>
            </div>
            <h1 class="title-page ">
                <span class="text-item reveal-header-text-line reveal-header-text-line__action">J'accompagne les entreprises à</span>
                <span class="text-item reveal-header-text-line reveal-header-text-line__action">développer
                    <span class="text-action">des sites</span>
                    qui font la
                    <span class="text-action">difference</span>
                </span>
            </h1>
            <div class="adjectifs">
                <span class="reveal-header-adjectif">Créatif</span>
                <span class="reveal-header-adjectif">Freelance</span>
                <span class="reveal-header-adjectif">Développeur</span>
            </div>
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
        <h2 class="title-white">
            <span class="line-title reveal-text reveal-text__white">
                Construire un site 
            </span>
            <span class="line-title reveal-text reveal-text__white">
               qui à de <span class="text-action">l'impact</span>
            </span>
        </h2>
        <p class="text-section text-white reveal-paragraphe">
            Il est primordial de se démarquer des autres sites web, c'est la raison pour laquelle j'accompagne les marques les plus ambitieuse dans leurs développement
        </p>


        <div class="row">
            <div class="col-12 col-lg-6 marble-col">

                <div class="container-marble reveal-image">
                    <div class="marble img">

                    </div>
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
                        </span>
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

        <h2> <span class="reveal-text reveal-text__primary">Un artisan du <span class="text-action">web</span></span></h2>
        <div class="row">

            <div class="col-12 col-lg-6 col-element col-element__text">
                <p class="pre-title">
                    <span class="reveal-text reveal-text__primary">
                        En savoir d'avantage sur moi
                    </span>
                </p>
                <h3>
                    <span class="reveal-text reveal-text__action">
                        Mes engagements
                    </span>
                </h3>
                <p class="text-section reveal-paragraphe">
                    Les gens les appellent souvent simplement des sites Web, des applications ou des plates-formes. La plupart du temps, j'essaye de concevoir des expériences utilisateur.
                </p>
                <a data-type="page-transition" href="/a-propos/" class="link-btn btn click reveal-paragraphe">
                    Découvrir
                </a>
            </div>

            <div class="col-12 col-lg-6 col-element col-element__image">
                <div class="container-image reveal-image-opacity">
                    <div class="portrait img">

                    </div>
                </div>
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
        <h2 class="title-white">
            <span class="line-title reveal-text reveal-text__white">
                Dernières
            </span>

            <span class="line-title reveal-text reveal-text__white">
                <span class="text-action">réalisations</span>
            </span>
        </h2>

        <?php get_template_part('parts/list-realisations'); ?>
    </div>

</section>

<?php get_template_part('parts/form-section'); ?>

<?php get_footer(); ?>