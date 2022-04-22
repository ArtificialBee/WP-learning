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
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
//define( 'DB_NAME', 'postgres' );
define( 'DB_NAME', 'wordpress-ucenje' );

/** Database username */
//define( 'DB_USER', 'postgres' );
define( 'DB_USER', 'root' );

/** Database password */
// define( 'DB_PASSWORD', 'E1d.V3i8N,1997' );
define( 'DB_PASSWORD', '' );

/** Database hostname */
// define( 'DB_HOST', 'db.yrjsdwtwobnjhburkegp.supabase.co' );
// define('DB_PORT','6543');
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'zB/N`t&U3e @`uG#X|rWIxTIJHjj:sxT2=DAJ]yvzmYGugigo<:i>N W|,[aL-fH' );
define( 'SECURE_AUTH_KEY',  'KivXjClAt>=a-$T*V3[OF@k&rk7%(@Q{+VoSA+0?f>@]3USDWy&nvzPg2wW:g{8Q' );
define( 'LOGGED_IN_KEY',    'Xg/a }#pNlA[9Ji)<,3/E*nPT+ZoM|r,i}Lj#gPq=_LtmfNsC%RggOiNv-rwnRLR' );
define( 'NONCE_KEY',        'e,#:8MR_h,HamM9$ )h9p@>iZYE}p N&DA3)FTu%2!$5IZ=Lt(-x6%i]*U&%}T7m' );
define( 'AUTH_SALT',        'BL<(Gk~60GLY7:GiJGWnsI&8(12?;=C^+%!ZypOw15ozI#}-.MEu=F,%$l;h)RWS' );
define( 'SECURE_AUTH_SALT', '*S=a7K87So5:l]v$ig`CfY(UA?||7gcJ2UQJq>MZJOKh9nm1ez+KD4B|lF-?Z<.r' );
define( 'LOGGED_IN_SALT',   '/jb~+[|ibK@HCc5~}XyNnT#eay.Z<!tt8^;&)CK;A)<;PXj98[B-Y3F{JEH`1[Hi' );
define( 'NONCE_SALT',       'DfK(zC=t)aGbJ)eA%wo^g0Lh9?X-jt Pe%j!RN(up8apt<C?hmNoE{sP,Pj=;+kR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_ucenje_';

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */
define('WP_HOME','http://localhost/wordpress-ucenje');
define('WP_SITEURL','http://localhost/wordpress-ucenje');

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
