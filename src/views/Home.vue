<template>
  <section class="home">
    <div class="container">
      <div class="home__banner">
        <div class="banner__inner">
          <div class="banner__pretitle">6rd International Conference</div>
          <div class="banner__title">High Performance Computing</div>
          <div class="banner__posttitle">HPC-UA 2020</div>
          <div class="banner__date">November 06 - 07, 2020 Kyiv / Ukraine</div>
        </div>
      </div>
      <!-- /.home__banner-->

      <div class="home__content">
        <div class="content__welcome border-top">
          <div class="welcome__leftside">
            <h1 class="title">Welcome to HPC-UA 2020!</h1>
            <p class="leftside__text first-p">
              We propose to examine the relation among High Performance
              Computing (HPC), Artificial Intelligence, Big Data and
              visualization, Internet of Things, Embedded HPC as the basic
              ingredients to create
              <br />state-of-the-art technologies of the Industry 4.0.
            </p>

            <div class="leftside__organizers">
              <div class="organizers__item">
                <div class="organizers__name glushkov">
                  V.M. Glushkov Institute of Cybernetics of NAS of Ukraine
                </div>
                <img
                  class="organizers__logo"
                  src="../assets/img/NAS-logo.jpg"
                  alt="NAS-logo"
                />
              </div>

              <div class="organizers__item">
                <div class="organizers__name kpi">
                  NTUU "Igor Sikorsky Kyiv Polytechnic Institute"
                </div>
                <img
                  class="organizers__logo"
                  src="../assets/img/kpi-logo.png"
                  alt="kpi-logo"
                />
              </div>

              <div class="organizers__item">
                <div class="organizers__name globallogic">
                  GlobalLogic Ukraine
                </div>
                <img
                  class="organizers__logo"
                  src="../assets/img/globallogic-logo.jpg"
                  alt="globallogic-logo"
                />
              </div>
            </div>
            <p class="leftside__text second-p">
              V.M. Glushkov Institute of Cybernetics of NAS of Ukraine, NTUU
              "Igor Sikorsky Kyiv Polytechnic Institute" and GlobalLogic Ukraine
              are pleased to announce the Six International Conference on High
              Performance Computing (HPC-UA 2020) being held in Kyiv, Ukraine,
              November, 2020. We are doing our best to increase the success of
              previous HPC-UA conferences and make it the largest HPC event in
              Ukraine.
            </p>
            <p class="leftside__text">
              This year GlobalLogic Ukraine is taking part at the HPC
              conference. "Innovating with a digital mindset" and "Next-gen
              product development for better business outcomes" are the main
              messages of GlobalLogic.
            </p>
            <p class="leftside__text">
              IT-industry representatives as well as international speakers will
              be discussing the themes within the scope of the main sections.
              Innovative products will be presented on the workshops as part of
              the proposed format of HPC conference. Everyone, including
              students and young scientists with their innovative projects can
              take part in the workshops. Moreover, exhibitions with the
              participation of GlobalLogic will take place at the conference.
            </p>
          </div>

          <aside class="welcome__rightside">
            <div class="rightside__dates rightside__block">
              <div class="dates__title rightside__title">Important Dates</div>
              <div class="dates__list">
                <ul>
                  <li class="dates__item">
                    <!-- <span class="dates__text dates__text--bold crossed">August 23, 2020</span> -->
                    <span class="dates__text dates__text--bold"
                      >October 10, 2020</span
                    >
                    <span class="dates__text">Paper submission</span>
                  </li>

                  <li class="dates__item">
                    <span class="dates__text dates__text--bold"
                      >October 18, 2020</span
                    >
                    <span class="dates__text">Final Paper Submission</span>
                  </li>

                  <li class="dates__item">
                    <span class="dates__text dates__text--bold"
                      >October 18, 2020</span
                    >
                    <span class="dates__text"
                      >Registration and full payment</span
                    >
                  </li>

                  <li class="dates__item">
                    <span class="dates__text dates__text--bold"
                      >November 06 - 07, 2020</span
                    >
                    <span class="dates__text">HPC-UA 2020</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="rightside__submission rightside__block">
              <div class="rightside__title">Paper Submission</div>
              <div class="submission__text">
                Paper Submission via
                <a
                  class="callforpapers__mail"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeJLI9uXVu-5CQuQSuPcEBfQODgcHDKUdT5pP5pqXD9rcKuUg/viewform?pli=1"
                  target="_blank"
                  >Paper Submission Form</a
                >
              </div>
            </div>

            <div class="rightside__submission rightside__block">
              <div class="rightside__title">
                Registration form for paper authors
              </div>
              <div class="submission__text">
                All of the authors of each presented paper must be registered as
                participants of the conference via conference
                <router-link class="callforpapers__mail" to="/registration"
                  >Web site registration form.</router-link
                >
              </div>
            </div>

            <div class="rightside__important-info rightside__block">
              <div class="rightside__title">Important information</div>
              <div class="submission__text">
                In connection with the continuation of the Covid epidemic the
                Six International Conference on High Performance Computing
                (HPC-UA 2020) will go virtual.
                <div class="important">
                  <span>
                    If you want to participate in the online conference as a
                    guest, please fill out the
                    <a
                      class="callforpapers__mail"
                      href="https://forms.gle/Wb2935Xkik32Xs3W6"
                      target="_blank"
                      >registration form for the guests of the online
                      conference,</a
                    >
                    so we will be able to send you invitations.
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div class="content__topics border-top">
          <h1 class="title">Significant dates</h1>

          <div class="significant-dates">
            <div>
              <img src="../assets/img/yu100.jpg" alt="NAS-logo" />
            </div>

            <div>
              Conference devoted to the 100th anniversary of Katerina
              Yushchenko, inventor of pointer and 1st universal Address
              language. Kateryna was born an 8th of December, but almost a
              hundred years ago, in 1919. She`s a native of the city of
              Chigirin, Ukraine. She studied at the Ukrainian Academy of
              Sciences, where she did her post-graduate studies...
              <a
                href="https://medium.com/a-computer-of-ones-own/kateryna-l-yushchenko-inventor-of-pointers-6f2796fa1798"
                class="conditions__link"
                target="_blank"
                >Kateryna L. Yushchenko - Inventor of Pointers</a
              >

              <a
                href="https://www.arnnet.com.au/slideshow/574529/pictures-9-programming-languages-women-who-created-them/"
                target="_blank"
                class="conditions__link"
                >9 programming languages and the women who created them</a
              >
            </div>
          </div>

          <div class="content__topics border-top">
            <h1 class="title">Topics</h1>

            <ul>
              <li>Cloud Computing</li>
              <li>Deep Learning</li>
              <li>Software and Applications</li>
              <li>Embedded Systems and Robotics</li>
            </ul>
          </div>

          <div class="content__partners border-top">
            <h1 class="title">Our partners</h1>

            <ul>
              <li>
                The journal «Information, Computing and Intelligent systems»:
                <a href="http://itvisnyk.kpi.ua/about" target="_blank"
                  >http://itvisnyk.kpi.ua/about</a
                >
              </li>
              <li>
                The journal "Cybernetics and Computer Technologies" (CCTech):
                <a href="http://cctech.org.ua/" target="_blank"
                  >http://cctech.org.ua/</a
                >
              </li>
              <li>
                International Theoretical Science Journal “Kibernetika i
                sistemnyj analiz”.
                <span style="display: block; padding-left: 23px"
                  >The journal is being translated into English in the United
                  States by Springer as "Cybernetics and Systems
                  Analysis":</span
                >

                <a href="http://www.kibernetika.org/" target="_blank"
                  >http://www.kibernetika.org/</a
                >
                <a href="https://www.springer.com/journal/10559" target="_blank"
                  >https://www.springer.com/journal/10559</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>


<style lang="scss">
.crossed {
  text-decoration: line-through;
}

.red {
  color: red;
}

.home__banner {
  margin-bottom: 55px;
  width: 100%;
  height: 400px;
  background: url("../assets/img/baner1.jpeg") no-repeat center/cover;

  color: #fff;
  line-height: 50px;
  font-weight: 400;
  text-align: center;
}

.banner__inner {
  padding-top: 110px;

  @media (max-width: 468px) {
    padding-top: 50px;
  }
}

.banner__pretitle {
  font-size: 22px;
}

.banner__title {
  font-size: 34px;
  font-weight: 600;
}

.banner__posttitle {
  font-size: 32px;
  font-weight: 600;
}

.banner__date {
  font-size: 26px;
}

.home__content {
  padding: 40px 15px;

  width: 100%;
  background-color: #fff;
  color: #000;
}

.content__welcome {
  display: flex;
  justify-content: space-between;
}

.title {
  padding-top: 10px;
  color: #33b0ea;
}

.first-p {
  text-align: center;
}

.leftside__text {
  padding-top: 20px;

  @media (max-width: 612px) {
    font-size: 14px;
  }
}

.welcome__leftside {
  max-width: 800px;

  @media (max-width: 1180px) {
    max-width: 600px;
    padding-right: 30px;
  }

  @media (max-width: 814px) {
    max-width: 400px;
  }

  @media (max-width: 612px) {
    max-width: 300px;
  }

  @media (max-width: 514px) {
    max-width: 270px;
  }
}

.leftside__organizers {
  padding: 20px 0 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1180px) {
   justify-content: center;
  }
}

.organizers__item {
  @media (max-width: 1180px) {
    margin: 15px;
  }


}

.organizers__name {
  padding: 10px;

  text-align: center;
  width: 220px;
  min-height: 60px;

  color: #fff;
  font-size: 14px;

  @media (max-width: 514px) {
    width: 150px;
  }
}

.glushkov {
  background-color: #4ead26;
}

.kpi {
  background-color: #0a93d3;
}

.globallogic {
  padding-top: 20px;
  background-color: #ed9625;
}

.organizers__logo {
  padding-top: 20px;
  width: 220px;
  height: auto;

  @media (max-width: 514px) {
    width: 150px;
  }
}

.welcome__rightside {
  width: 280px;
}

.rightside__block {
  margin-top: 20px;

  border: 2px solid #006699;
}

.rightside__title {
  padding: 10px 0;
  color: #fff;
  background-color: #006699;
  text-align: center;
}

.dates__list {
  font-size: 14px;
  padding: 5px;
}

.dates__item {
  padding: 5px 0 5px 5px;
}

.dates__text--bold {
  font-weight: 600;
}

.dates__text {
  display: block;

  @media (max-width: 612px) {
    font-size: 14px;
  }


}

.submission__text {
  padding: 5px 0 5px 5px;

  @media (max-width: 612px) {
    font-size: 14px;
  }
}

.content__topics {
  margin-top: 40px;

  ul {
    padding-top: 20px;
  }

  li {
    padding-top: 5px;
  }

  ul,
  li {
    list-style: disc inside;
  }
}

.significant-dates {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 20px;
    width: 124px;
    height: 186px;
  }
}

.conditions__link {
  padding-top: 10px;
  display: block;
  text-decoration: underline;
}

.content__partners {
  margin-top: 40px;
  ul {
    li {
      margin-top: 10px;

      a {
        margin-top: 5px;
        padding-left: 25px;
        display: block;
      }
    }
  }
}
</style>
