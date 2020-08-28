<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";

export default {
  name: "app",

  computed: {
    layout() {
      return this.$route.meta.layout + "-layout";
    },
  },
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
/* Default styles */

* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #fff;

  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  display: inline-block;
}

p {
  margin: 0;
}

figure {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

.visited {
  color: #000 !important;
}

.title--gray {
  color: #5e5e5e;
  font-size: 38px;
  font-weight: 600;
  line-height: 1.5;
}

.title {
  padding-top: 10px;
  color: #33b0ea;
}

.border-top {
  border-top: 3px solid #006699;
}

.info__btn {
  padding: 15px 20px;
  color: #fff;
  font-weight: 600;

  transition: all 0.2s linear;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover {
    background-color: #428b9b;
  }

  &--red {
    background-color: #972924;
  }

  &--orange {
    background-color: #d64c00;
  }

  &--green {
    background-color: #507a2a;
  }
}

.bold {
  font-weight: 600;
}

.pad-20 {
  padding-top: 20px;
}

.important {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 0;

  &::before {
    content: "!";
    font-size: 100px;
    color: coral;
  }
}
</style>
