<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__content">
        <div class="title--gray">CONTACTS</div>

        <div class="contacts__inner">
          <p class="contacts__text">
            <span class="display-block">Оrganizing committee</span>
            E-mail:
            <a
              href="mailto:hpc.ua.conf@gmail.com?cc=hpc.ua.conf@gmail.com"
              class="contacts__link"
            >hpc.ua.conf@gmail.com.</a>
          </p>
          <p class="contacts__text">
            <span class="bold">Vadim Tulchinsky</span>, Glushkov Institute of Cybernetics
            <span
              class="display-block"
            >Phones: +380 (44) 526-36-03, +380 (66) 221-80-66.</span>
          </p>
          <p class="contacts__text">
            <span class="bold">Alla Kogan</span>, Igor Sikorsky Kyiv Polytechnic Institute
            <span
              class="display-block"
            >Phones: +380 (44) 204-94-10, +380 (50) 815-30-34</span>
          </p>
          <p class="contacts__text contacts__text--gray">
            *Please note that our contact E-mail is for questions/quotes only. Please do not submit your papers
            to this E-mail.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contacts__content {
  padding: 40px 15px;
  background-color: #fff;
  color: #000;
}

.contacts__text {
  padding-top: 10px;
}

.contacts__text--gray {
  color: gray;
}

.contacts__link {
  text-decoration: underline;
}

.display-block {
  display: block;
}
</style>
