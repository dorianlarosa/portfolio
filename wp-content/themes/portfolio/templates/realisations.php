<?php
/* Template Name: Réalisations page */

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
			<h1 class="title-page">Réalisations</h1>
			<p class="intro-page">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quod minus ipsa. Magnam, voluptas ducimus. Dolorum aliquid, aspernatur corrupti tempora autem, tempore deserunt vel tenetur voluptate, ipsa dolorem repellendus quam.
			</p>
		</div>
	</div>
</section>

<section id="section-list-réalisations">
	<div class="strokes">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="wrapper-section">

		<?php get_template_part('parts/list-realisations'); ?>

	</div>
</section>

<?php get_template_part('parts/form-section'); ?>

<?php get_footer(); ?>