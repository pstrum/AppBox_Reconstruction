#Component Examples

## Hover Overlay

```html
.app-store-item-preview {
  background-color: color('base');
  font-family: $primary-font;
  font-size: $font-smaller;
  position: relative;

  .review-text-overlay {
    opacity: 0;
    height: 300px;
    width: 270px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 8em 2em;
    color: text('primary');
    font-size: $font-smaller;
    line-height: 2;
    text-align: center;
    transition: all 0.3s ease-in 0s;
  }

  & span {
    text-decoration: line-through;
    color: $disabled-color;
  }

  figcaption {
    padding: 2em;
    color: color('primary');
    h2 {
      font-weight: $font-weight-sb;
      font-size: $font-regular;
    }
    img {
      margin-top: 0.7em;
    }
    p {
      font-family: $primary-alt-font;
      font-size: 1.125rem;
      margin-top: 1em;
    }
  }

  &:hover .review-text-overlay {
    opacity: 1;
    background-color: $hover-other-apps;
  }
}
```

## Buttons

```html
@mixin button($background, $border) {
  box-shadow: none;
  border-top: solid 3px;
  border-bottom: solid 3px;
  border-left: solid 1px;
  border-right: solid 1px;
  border-color: $border;
  border-radius: 3rem;
  text-decoration: none;
  text-align: center;
  background-color: $background;
  color: color('base');
  margin: 0 auto;
}

%btn-hover {
  background-color: color('accent');
  border-color: #0394be;
}

.btn-small {
  @include button(color('accent'), #0394be);
  font-size: .75em;
  padding: .4em 1.2em;
  text-transform: uppercase;
}

.btn-med {
  @include button(transparent, color('secondary'));
  text-transform: uppercase;
  &:hover {
    @extend %btn-hover;
  }
}

.btn-large {
  @include button(transparent, border('primary'));
  padding: 1em;
  &:hover {
    @extend %btn-hover;
  }
}
```
## SLIDER

```html

.swiper-1 {
  height: calc(25em - 20vw);
  width: 90%;
  @media screen and (min-width: $break) {
    width: 85%;
    height: calc(19em - 7vw);
  }
}

.swiper-2 {
  height: 510px;
  width: 95%;
  @media screen and (min-width: 50em) {
    width: 85%
  }
}

.swiper-wrapper-1 {
  @media screen and (min-width: $break) {
    width: 60%;
    margin: 0 auto;
  }
}

.swiper-wrapper-2 {
  li {
    height: 435px;
    margin: 0 1.5%;
    width: 270px;
  }
}

.swiper-pagination-bullet {
  background: none;
  height: 10px;
  width: 10px;
  border: 1px solid color(base);
  opacity: 1;
}

.swiper-container-vertical {
  > .swiper-pagination {
    top: 15%;
    .swiper-pagination-bullet {
      margin: 7px 0;
    }
  }
}

.swiper-pagination-bullet-active {
  background: color(base);
}
```

## Search Button/Field
```
.search-field {

  input {
    padding-bottom: .5em;
    margin-bottom: 0;
    width: 1em;
    font-family: $primary-font;
    font-size: $font-small;
    font-weight: $font-weight-l;
    text-transform: uppercase;
    background: url('/img/search.svg') no-repeat;
    background-position: left .2em;
    background-size: 1em;
    border: none;
    -webkit-appearance: none;
    @include transition(all .3s ease-in);
    &:hover {
      opacity: .5;
      cursor: pointer;
    }
  }

  input:focus {
    width: 40%;
    margin-left: 10%;
    padding-left: 1em;
    background-color: rgba(255,255,255,.2);
    border-bottom: 1px solid border(primary);
    &:hover {
      opacity: 1;
    }
    @media screen and (min-width: $break) {
      width: 14em;
    }
  }
}
```
