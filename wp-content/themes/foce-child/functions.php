<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // Add the parent style
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // My custom CSS
    wp_enqueue_style( 'custom-style', get_stylesheet_directory_uri() . '/sass/custom.css' );

    // Add the Swiper CSS
    wp_enqueue_style( 'swiper-bundle-css', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css', array(), true );
    wp_enqueue_script('swiper-bundle-js', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), true);

    // Add jQuery from a CDN
    wp_enqueue_script('jquery'); 

    // Add custom script
    wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery'), '1.0.0', true );
    
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}