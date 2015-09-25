# Style Guide

## Color Palette

**Monochromatic Theme Colors**

$theme-colors: (
    PRIMARY: **#252525**            // DARK GREY
    ACCENT: **05C3F9**              // SKY BLUE
    SECONDARY: **#383838**          // LIGHT GREY
    BASE: **#FFFFFF**               // WHITE ------ DOCUMENT BACKGROUND
);

*The basic style here is white text on a dark background with a white base. The bright, sky blue takes is used as an accent and the main 'light grey' color is used against the primary dark grey.*

**Border Colors**

// PRIMARY (GREY) BUTTON/LINK BORDER & SECTION H1 UNDERLINE
PRIMARY: mix(white, map-get($theme-colors, primary), 45.5%)

// BORDER FOR ACCENT (BLUE) BUTTON/LINK
ACCENT: mix(black, map-get($theme-colors, accent), 30.1%)

// QUOTES & TEAM MEMBER IMAGE BORDER
PROFILE: mix(black, map-get($theme-colors, accent), 11%)

// BORDER FOR WHITE BUTTON/LINK
BASE: mix(black, map-get($theme-colors, accent), 35%)

// BOTTOM INPUT FIELD BORDER
INPUT: mix(white, map-get($theme-colors, primary), 39%)  

*Repeated variations of the main color palette used to accent different modules/components in the comp. All these colors are relative to the main 4 palette colors by using the Sass mix function.*

**Text Colors**

 $text-colors: (
  PRIMARY: #ffffff,
  SECONDARY: #000000,
  PLACEHOLDER: mix(white, map-get($theme-colors, primary), 30%)
);

**Miscellaneous Colors Reference**

$hero-background: #162327;
$hover-other-apps: mix(white, #252525, 6.5%); 
$divider-color: mix(white, #252525, 18.5%);
$star-color: #ff9c1c;
$disabled-color: #e0e0e0;

## Typography

**Font Families**
- Roboto
- Roboto Condensed
- Raleway
- Custom "AppBox" Icon Set
- AppBox Logo in 'Strasua' font

**Font Sizes**

Base: 16px;

$font-smaller:      0.75em;    // 12px
$font-small:        0.875em;   // 14px
$font-regular:      0.9375em;  // 15px
$font-large:        1em;       // 16px
$blockquote:        1.0625em;  // 17px
$font-larger:       2em;       // 32px
$font-hero:         2.5em;     // 40px

*Repeated font sizes are referenced in variables for consistency. Future consideration to add a type-scale for the comp.*

**Font Weights**

$font-weight-l:     300;
$font-weight-r:     400;
$font-weight-m:     500;
$font-weight-sb:    600;
$font-weight-b:     700;

*Repeated font-weights used in the comp.*

**Line Heights**

$primary-lh:        1.67;
$secondary-lh:      1.375;

*In the future, our style guide would include a more modular approach. Although we have a lot of variables, this project could benefit from a clear type scale. Not only that but a defined vertical rhythm of font-size/line-height. Repeated/shared element padding could be mapped out in a modular scale as well to help the site have greater consistency and be more easily maintained.*

## Sass Architecture

SASS
main.scss
    - BASE
        + _INDEX.scss
        + _base.scss
        + _icons.scss  
        + _reset.scss
        + _typography.scss
    - COMPONENTS
        + _INDEX.scss
        + _form.scss
        + _navigation.scss
        + _buttons.scss
        + _carousel.scss
    - LAYOUT
        + _INDEX.scss
        + _header.scss
        + _hero.scss
        + _footer.scss
    - UTILS
        + _INDEX.scss
        + _mixins.scss
        + _variables.scss
        + _functions.scss
        + _placeholders.scss

## Vendors

Bourbon for common mixins.

## Approach
- Prepare the document with Semantically Awesome HTML
- Break down the styles used in the comp
    + See reference files 'guide-to-typography.md'
- Componentize the comp
    + See reference files 'home-dark-components.pdf'
- Construct the components
    + _form.scss
    + _app-review-media.scss
    + _header-arrow-tagline.scss
    + _app-store-item-preview.scss 
    + _header-underline.scss
    + _bundle.scss
    + _navigation.scss
    + _buttons.scss
    + _newsletter.scss
    + _carousel.scss
    + _review.scss
    + _download.scss
    + _search.scss
    + _feature-media.scss
    + _to-top.scss
    + _flag.scss            
    + _video.scss
- Adjust the layout of the components
