<template>
  <div class="header">
    <div class="header__top">
      <div class="container header__top-container">
        <Slide :closeOnNavigation="true" width="320">
          <nav class="nav">
            <div class="container">
              <ul class="nav__list">
                <li class="nav__item">
                  <router-link to="/" class="nav__link" active-class="visited" exact visited>Home</router-link>
                </li>
                <li class="nav__item">
                  <router-link to="/topics" class="nav__link" active-class="visited">Topics</router-link>
                </li>
                <li class="nav__item">
                  <router-link to="/committees" class="nav__link" active-class="visited">Committees</router-link>
                </li>
                <li class="nav__item">
                  <router-link to="/program" class="nav__link" active-class="visited">Program</router-link>
                </li>
                <li class="nav__item">
                  <router-link to="/callforpapers" class="nav__link" active-class="visited">Call for papers</router-link>
                </li>
                <li class="nav__item">
                  <router-link to="/forauthors" class="nav__link" active-class="visited">For Authors</router-link>
                </li>
                <li class="nav__item">
                  <router-link to="/speakers" class="nav__link" active-class="visited">Speakers</router-link>
                </li>
                <li class="nav__item">
                  <router-link to="/location" class="nav__link" active-class="visited">Location</router-link>
                </li>
                <li class="nav__item">
                  <router-link to="/contacts" class="nav__link" active-class="visited">Contacts</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </Slide>

        <div class="header__list">
          <ul>
            <li class="header__item">
              <router-link class="header__link" to="/registration">Registration</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /.header__top -->

    <div class="header__hero">
      <div class="container">
        <div class="header__s">
          <router-link to="/" class="header__title">HPC-UA 2020</router-link>
        </div>
        <div class="header__text">2020 6th High Performance Computing Conference (HPC-UA)</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';

export default {
  components: {
    Slide
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 245px;

  .header__top-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.bm-burger-button {
  opacity: 0;


  @media (max-width:638px) {
    opacity: 1;
    top: 7px;
    left: 30px;
  }
}

.line-style {
  height: 10%;
}

.bm-item-list {
  margin-left: 0;

  .nav__item {
    text-align: center;
    margin-bottom: 30px;
  }

  .nav__link {

    font-size: 32px;
    color: #fff;
  }
}




.header__top {
  height: 45px;
  background-color: #cccccc;

  @media (max-width: 1180px) {
    padding: 0 30px;
  }
}

.header__link {
  color: #000;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
}

.header__hero {
  height: 200px;
  background-color: #006699;
  padding: 40px 0;

  @media (max-width: 1180px) {
    padding: 40px 30px;
  }
}

.header__s {
  display: flex;
  justify-content: space-between;
}

.header__title {
  color: #fff;
  font-size: 42px;
  line-height: 1.1;

  @media (max-width: 468px) {
    font-size: 36px;
  }
}

.header__text {
  font-size: 28px;
  line-height: 1.1;
  max-width: 87%;

  @media (max-width: 468px) {
    font-size: 22px;
    max-width: 100%;
  }
}
</style>
