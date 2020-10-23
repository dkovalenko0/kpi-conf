<template>
  <div class="app-main-layout">
    <div class="header-layout">
      <Header />
      <Nav />
    </div>

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="footer-layout">
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/app/Nav";
import Header from "../components/app/Header";
import Footer from "../components/app/Footer";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true
  }),
  components: {
    Header,
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
.app-main-layout {
  position: fixed;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  background: url("../assets/img/bg.jpg") no-repeat center/cover;

  display: flex;
  flex-direction: column;



  .app-content {
    margin: 55px 0;
    flex-grow: 1;

  }
}
</style>
