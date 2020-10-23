<template>
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
</template>

<style lang="scss" scoped>

.nav {
  padding-top: 100px;

  @media (max-width:900px) {
    padding-top: 50px;
  }

  @media (max-width:638px) {
    display: none;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.nav__list {
  width: 100%;
  height: 50px;
  background-color: #fff;

  display: flex;
}

.nav__item {
  height: 100%;
}

.nav__link {
  padding: 15px 15px;
  color: #777;

  @media (max-width:900px) {
    padding: 15px 10px;
  }

  @media (max-width:800px) {
    font-size: 14px;
  }

  @media (max-width:722px) {
    padding: 15px 5px;
  }

  &:hover {
    color: #000;
  }
}
</style>
