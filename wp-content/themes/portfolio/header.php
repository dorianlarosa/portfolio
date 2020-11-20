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
    <main>

        <!-- CURSOR JS -->
        <div class="cursor"></div>
        <div class="cursor-follower"></div>


        <div id="navbar" class="container-fluid">
            <div class="container navbar-content">

                <div id="container-logo">
                    <a href="/">
                        <img id="logo-nav" src="<?= get_template_directory_uri() ?>/images/logo.png" alt="Dorian LA ROSA, Freelance Developpeur">
                    </a>
                </div>

                <!-- <div class="menu-btn">
                <div class="content">
                    <span class="text">
                        Open
                    </span>
                    <span class="text">
                        Close
                    </span>
                </div>
            </div> -->
                <!-- <div class="hamburger-container"> -->
                    <svg class="hamburger click" viewBox="0 0 100 80" width="40" height="40">
                        <rect class="line-1"></rect>
                        <rect class="line-2" x="25" y="30"></rect>
                        <rect class="line-3" x="50" y="60"></rect>
                    </svg>
                <!-- </div> -->

                <nav class="nav">
                    <div class="nav__inner">
                        <div class="nav--transition-slide"></div>
                        <div class="nav--items click">
                            <div class="nav--item">
                                <div class="nav--item-link">
                                    <a href="#" class="nav--link">
                                        <span class="nav--link-text" data-text="projects">projects</span>
                                        <div class="nav--link-icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="nav--item-line"></div>
                            </div>

                            <div class="nav--item click">
                                <div class="nav--item-link">
                                    <a href="#" class="nav--link">
                                        <span class="nav--link-text" data-text="a propos">a propos</span>
                                        <div class="nav--link-icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="nav--item-line"></div>
                            </div>
                            <div class="nav--item click">
                                <div class="nav--item-link">
                                    <a href="#" class="nav--link">
                                        <span class="nav--link-text" data-text="services">services</span>
                                        <div class="nav--link-icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="nav--item-line"></div>
                            </div>

                            <div class="nav--item click">
                                <div class="nav--item-link">
                                    <a href="#" class="nav--link">
                                        <span class="nav--link-text" data-text="contact">contact</span>
                                        <div class="nav--link-icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="nav--item-line"></div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>