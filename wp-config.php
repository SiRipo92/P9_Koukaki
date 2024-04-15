<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '{%< ]h@q93|*C[?bvst}^YL)imp3E[nj:p5}:uU(`}, 9V7ufx0BPVpqtK>DeidJ' );
define( 'SECURE_AUTH_KEY',   '`}>2,w5pu0zteR|Z..MJ!yTv>k<_InVPorXUzd1gQ*y1lc]!AR89!?` ,TE+S<Re' );
define( 'LOGGED_IN_KEY',     'B2)@jixR3:oI9_a[qI*`af[5Y[g ;AHjUrEjX3-{b)-4)pSp9O!?s.#2{9KJlBOr' );
define( 'NONCE_KEY',         '3_[O)9[:AM5SYKsLu|CBb)t{Uz:gIhE.r?b,.firM6_asO_q5y#]N0$ap)7$H8Du' );
define( 'AUTH_SALT',         'cBx9=i5}^H$co`(|/u&S.3,u_4pVJw&wmGDD(+:)WCXg^_fBtXU7i{n8P7`v]K}w' );
define( 'SECURE_AUTH_SALT',  ':B/<|{hQ{z11;-!^3yH9tnFHh%l?(F/]Pf)-jmX%R;(duKZ42}YFbyc~GkehoNq#' );
define( 'LOGGED_IN_SALT',    'yoZY22q0>Qa*X_DlXZ2mBIQL61#%sBdsh_Zaq@>cMq}?8SJeP$xi;s=4{wQtPbOo' );
define( 'NONCE_SALT',        '9*m*|#lfJD ifp[K/E{!8[OK[W|S]rl+Aji0t?rCpid?gT)b<Hv3.5Z6gN/<[Fnd' );
define( 'WP_CACHE_KEY_SALT', ':3iNGH4M$e}P|vMs&6<C>m5u/Pz,ewB[1 4/2VBVj,^mLyu*NuTC-!$/C7j;+<*A' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
