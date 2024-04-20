<?php

get_header();
?>
<!-- ************************************ SECTION HERO BANNER -->
<main id="primary" class="site-main">
    <section class="hero-header">
        <div class="banner-container">
            <div class = "banner">
                <video id= "bg-video" class="banner__video" autoplay muted loop>
                    <source src="<?php echo get_stylesheet_directory_uri() . '/assets/videos/Studio+Koukaki-video.mp4'; ?>" type="video/mp4">
                </video>
            </div>
            <div class= "hero-header__logo">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            </div>
    </section>
<!-- ************************************ SECTION STORY-->

<!--  STORY__ARTICLE -->
    <section id="story" class="story">
        <article id="story__article" class="story__article animation-item">
                <h2 class="observed-item"><span class ="story__title">L'histoire</span></h2>
                <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        
<!--  STORY_CHARACTERS / SWIPER SLIDER TEMPLATE  -->    
<?php get_template_part ('template-partials/page-characters');?>

<!--  STORY__PLACE -->
        <article id="place" class="place animation-item">
            <div class="place__text">
                <h3><span class= "place__title">Le Lieu</span></h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>
        </article>
    </section>

<!-- ************************************ SECTION STUDIO--> 

    <section id="studio" class= "animation-item">
        <h2 class="observed-item"><span class="studio__title">Studio Koukaki<span></h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>


<!--    STUDIO__NOMINATION -->
<?php get_template_part ('template-partials/page-nomination'); ?>

</main>
<?php 
get_footer();
