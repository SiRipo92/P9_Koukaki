<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

    <header id="masthead" class="site-header">
       <nav id="site-navigation" class="main-navigation">
       
       <div class="burger-menu__header">
            <a class="title-nav" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
       </div>
       <div class="mobile-nav__container">
            <img class="nav__logo" src="<?php echo get_stylesheet_directory_uri(). '/assets/images/nav/nav-logo.png'; ?>" alt="navigation logo">
            <ul>
                <li class="nav__link"><a href="#story">Histoire</a></li>
                <li class="nav__link"><a href="#characters-swiper">Personnages</a></li>
                <li class="nav__link"><a href="#place">Lieu</a></li>
                <li class="nav__link"><a href="#studio">Studio Koukaki</a></li>
                <li class="nav__link-footer"><a href="#">STUDIO KOUKAKI</a></li>
            </ul>   
            <div class="image-container__nav">
                <img class="nav__image purple-cat" src="<?php echo get_stylesheet_directory_uri(). '/assets/images/nav/purple-cat.png'; ?>" alt="purple cat">
                <img class="nav__image orange-cat" src="<?php echo get_stylesheet_directory_uri(). '/assets/images/nav/orange-cat.png'; ?>" alt="orange cat">
                <img class="nav__image black-cat" src="<?php echo get_stylesheet_directory_uri(). '/assets/images/nav/black-cat.png'; ?>" alt="black cat">
            </div>
        </div>

        </nav>
        
   </header><!-- #masthead -->

