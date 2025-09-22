import React from 'react';
import styles from './Desktop1.module.css';

/**
 * PUBLIC_INTERFACE
 * Desktop1 component reproduces the Figma screen "Desktop-1".
 * It uses absolute-positioned layers and design tokens to match the static layout.
 */
export default function Desktop1() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.scaler} ${styles.scalerResponsive}`}>
        <main id="desktop-1-13-2" className={styles.canvas} aria-label="Desktop-1 Screen">
          {/* Ellipses */}
          <div className={`${styles.abs} ${styles.ellipse} ${styles.ellipse2}`} />
          <div className={`${styles.abs} ${styles.ellipse} ${styles.ellipse1}`} />

          {/* Group 1 */}
          <div className={`${styles.abs} ${styles.group1}`}>
            <div className={`${styles.abs} ${styles.textBurgerClub} ${styles.textBurgerClubPos}`}>Burger Club</div>
            <div className={`${styles.abs} ${styles.textTheUltimate} ${styles.textTheUltimatePos}`}>THE ULTIMATE</div>
            <div className={`${styles.abs} ${styles.textSlogan} ${styles.textSloganPos}`}>Savor the Flavor, Join the Club!</div>
          </div>

          {/* Hero rectangle placeholder (image area) */}
          <div
            className={`${styles.abs} ${styles.heroRect}`}
            role="img"
            aria-label="Burger cinematic placeholder"
          />

          {/* Frames 5 to 8 */}
          <div className={`${styles.abs} ${styles.frame5}`} />
          <div className={`${styles.abs} ${styles.frame6}`} />
          <div className={`${styles.abs} ${styles.frame7}`} />
          <div className={`${styles.abs} ${styles.frame8}`} />

          {/* Dots group */}
          <div className={`${styles.abs} ${styles.dots}`}>
            <div className={`${styles.abs} ${styles.dot} ${styles.dot1}`} />
            <div className={`${styles.abs} ${styles.dot} ${styles.dot2}`} />
            <div className={`${styles.abs} ${styles.dot} ${styles.dot3}`} />
          </div>

          {/* Navbar */}
          <nav className={`${styles.abs} ${styles.navbar}`} aria-label="Primary">
            <div className={`${styles.abs} ${styles.navFrame1}`} />
            <div className={`${styles.abs} ${styles.navFrame2}`} />
            <div className={`${styles.abs} ${styles.navFrame3}`} />
            <div className={`${styles.abs} ${styles.navFrame4}`} />

            <div className={`${styles.abs} ${styles.textNav} ${styles.textHome}`}>Home</div>
            <div className={`${styles.abs} ${styles.textNav} ${styles.textMenu}`}>Menu</div>
            <div className={`${styles.abs} ${styles.textNav} ${styles.textAbout}`}>About</div>
            <div className={`${styles.abs} ${styles.textNav} ${styles.textShop}`}>Shop</div>

            <div className={`${styles.abs} ${styles.textBrand} ${styles.textBrandPos}`}>BURGUR CLUB</div>
          </nav>
        </main>
      </div>
    </div>
  );
}
