<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no">
    <title><?php wp_title('|', true, 'right'); ?></title>

    <?php wp_head(); ?>
</head>

<body>
    <main id="main">

        <!-- CURSOR JS -->
        <div class="cursor"></div>
        <div class="cursor-follower"></div>




        <div id="navbar">
            <div class="content-navbar">

                <div id="container-logo">
                    <!-- <a href="/">
                        <img id="logo-nav" src="<?= get_template_directory_uri() ?>/images/logo.png" alt="Dorian LA ROSA, Freelance Developpeur">
                    </a> -->
                </div>


                <svg class="hamburger click" viewBox="0 0 100 80" width="40" height="40">
                    <rect class="line-1"></rect>
                    <rect class="line-2" x="25" y="30"></rect>
                    <rect class="line-3" x="50" y="60"></rect>
                </svg>
            </div>
        </div>

        <nav class="nav">

            <div class="parts-bg-nav">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="nav__inner">
                <div class="nav--items ">
                    <div class="nav--item click">
                        <div class="nav--item-link">
                            <a href="/" class="nav--link">
                                <span class="number-of-link">01</span>
                                <span class="nav--link-text">accueil</span>
                            </a>
                        </div>
                    </div>

                    <div class="nav--item click">
                        <div class="nav--item-link">
                            <a href="/realisations/" class="nav--link">
                                <span class="number-of-link">02</span>

                                <span class="nav--link-text">Réalisations</span>
                            </a>
                        </div>
                    </div>
                    <div class="nav--item click">
                        <div class="nav--item-link">
                            <a href="/a-propos/" class="nav--link">
                                <span class="number-of-link">03</span>

                                <span class="nav--link-text">a propos</span>
                            </a>
                        </div>
                    </div>

                    <div class="nav--item click">
                        <div class="nav--item-link">
                            <a href="/contact/" class="nav--link">
                                <span class="number-of-link">04</span>

                                <span class="nav--link-text">contact</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div class="marbles-container">
                    <div class="marble-image">

                    </div>
                    <div class="marble-image">

                    </div>
                </div>
            </div>
        </nav>

        <div id="scroll-container" class="scroll-container">