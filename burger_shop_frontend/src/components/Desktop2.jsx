import React from 'react';
import styles from './Desktop2.module.css';

/**
 * PUBLIC_INTERFACE
 * Desktop2 component reproduces the Figma screen "Desktop-2 (Menu grid)".
 * Uses absolute positioning and CSS module tokens to match the static layout.
 */
export default function Desktop2() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.scaler} ${styles.scalerResponsive}`}>
        <main id="desktop-2-15-70" className={styles.canvas} aria-label="Desktop-2 Screen">

          {/* Dots group */}
          <div className={`${styles.abs} ${styles.group2}`}>
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

          {/* MENU Heading */}
          <div className={`${styles.abs} ${styles.textMenuHeading}`}>MENU</div>

          {/* Frame 18 row (cards 9-12) */}
          <section className={`${styles.abs} ${styles.frame18}`} aria-label="Top Menu Categories">
            <div className={`${styles.abs} ${styles.card} ${styles.frame9}`}>
              <div className={`${styles.abs} ${styles.img1597}`} role="img" aria-label="New In the Club image placeholder" />
              <div className={`${styles.abs} ${styles.cardCaption}`}>New In the Club</div>
            </div>
            <div className={`${styles.abs} ${styles.card} ${styles.frame10}`}>
              <div className={`${styles.abs} ${styles.img17123}`} role="img" aria-label="Burger image placeholder" />
              <div className={`${styles.abs} ${styles.cardCaption}`}>BURGER</div>
            </div>
            <div className={`${styles.abs} ${styles.card} ${styles.frame11}`}>
              <div className={`${styles.abs} ${styles.img17135}`} role="img" aria-label="Sides image placeholder" />
              <div className={`${styles.abs} ${styles.cardCaption}`}>SIDES</div>
            </div>
            <div className={`${styles.abs} ${styles.card} ${styles.frame12}`}>
              <div className={`${styles.abs} ${styles.img17134}`} role="img" aria-label="Fries image placeholder" />
              <div className={`${styles.abs} ${styles.cardCaption}`}>FRIES</div>
            </div>
          </section>

          {/* Frame 17 row (cards 13-16) */}
          <section className={`${styles.abs} ${styles.frame17}`} aria-label="More Menu Categories">
            <div className={`${styles.abs} ${styles.card} ${styles.frame13}`}>
              <div className={`${styles.abs} ${styles.img17133}`} role="img" aria-label="Desserts and Beverages image placeholder" />
              <div className={`${styles.abs} ${styles.cardCaption} ${styles.multiline}`}>DESERTS AND <br/>BEVERAGES</div>
            </div>
            <div className={`${styles.abs} ${styles.card} ${styles.frame14}`}>
              <div className={`${styles.abs} ${styles.img17132}`} role="img" aria-label="Launch offer image placeholder" />
              <div className={`${styles.abs} ${styles.cardCaption} ${styles.multiline}`}>LAUNCH OFFER <br/>@99</div>
            </div>
            <div className={`${styles.abs} ${styles.card} ${styles.frame15}`}>
              <div className={`${styles.abs} ${styles.img17129}`} role="img" aria-label="Wraps image placeholder" />
              <div className={`${styles.abs} ${styles.cardCaption}`}>WRAPS</div>
            </div>
            <div className={`${styles.abs} ${styles.card} ${styles.frame16}`}>
              <div className={`${styles.abs} ${styles.img17128}`} role="img" aria-label="Salads image placeholder" />
              <div className={`${styles.abs} ${styles.cardCaption}`}>SALADS</div>
            </div>
          </section>

          {/* Decorative rectangles */}
          <div className={`${styles.abs} ${styles.deco} ${styles.deco17125}`} role="img" aria-label="Decorative image placeholder" />
          <div className={`${styles.abs} ${styles.deco} ${styles.deco17126}`} role="img" aria-label="Decorative image placeholder" />
          <div className={`${styles.abs} ${styles.deco} ${styles.deco17124}`} role="img" aria-label="Decorative image placeholder" />
          <div className={`${styles.abs} ${styles.deco} ${styles.deco17130}`} role="img" aria-label="Decorative image placeholder" />
          <div className={`${styles.abs} ${styles.deco} ${styles.deco17137}`} role="img" aria-label="Decorative image placeholder" />
          <div className={`${styles.abs} ${styles.deco} ${styles.deco17127}`} role="img" aria-label="Decorative image placeholder" />
          <div className={`${styles.abs} ${styles.deco} ${styles.deco17136}`} role="img" aria-label="Decorative image placeholder" />
        </main>
      </div>
    </div>
  );
}
