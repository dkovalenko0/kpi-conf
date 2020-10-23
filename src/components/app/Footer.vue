<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__copyright">
          <div class="footer__text">
            <span>HPC-UA 2020</span>
            <p>
              2020 High Performance Computing Conference
              Kyiv / Ukraine
            </p>
            <p>© Copyright 2020 HPC-UA - All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 170px;
  background-color: #006699;
}

.footer__content {
  padding: 40px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1180px) {
    padding: 40px 30px;
  }
}

.footer__copyright {
  max-width: 800px;
}

.footer__item {
  display: inline-block;

  &:not(:last-child):after {
    content: "|";
    color: #fff;
    padding: 0 8px;
  }
}

.footer__text {
  padding-top: 15px;
}

.footer__text span {
  display: block;
}

.footer__link {
  color: #fff;
  font-size: 16px;
  text-decoration: underline;
}
</style>
