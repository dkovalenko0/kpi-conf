<template>
  <div class="header">
    <div class="header__top">
      <div class="container">
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

<style lang="scss">
.header {
  width: 100%;
  height: 245px;
}

.header__top {
  height: 45px;
  background-color: #cccccc;
}

.header__list {
  display: flex;
  justify-content: flex-end;
}

.header__item {
  display: inline-block;

  &:not(:last-child):after {
    content: "|";
    color: #000;
    padding: 0 8px;
  }
}

.header__link {
  padding-top: 12px;
  color: #000;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
}

.header__hero {
  height: 200px;
  background-color: #006699;
}

.header__s {
  padding-top: 40px;

  display: flex;
  justify-content: space-between;
}

.header__title {
  color: #fff;
  font-size: 42px;
  line-height: 1.1;
}

.header__text {
  padding-top: 10px;

  font-size: 28px;
  line-height: 1.1;
  max-width: 87%;
}
</style>
