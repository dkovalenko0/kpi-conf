<template>
  <section class="callforpapers">
    <div class="container">
      <div class="callforpapers__content">
        <div class="title--gray">CALL FOR PAPERS</div>
        <div class="callforpapers__inner border-top">
          <h1 class="title">Information mail</h1>
          <a href="assets/img/Information_mail_HPC.pdf" class="information-mail" download>
            Download the PDF
            version of HPC-UA 2020 Call For Papers
          </a>
        </div>
        <div class="callforpapers__inner border-top">
          <h1 class="title">Important Dates</h1>
          <ul class="callforpapers__dates-list">
            <li>
              Paper submission due:
              <span class="bold">August 23, 2020</span>
            </li>
            <li>
              Notification of paper acceptance:
              <span class="bold">August 28, 2020</span>
            </li>
            <li>
              Response of Reviewers:
              <span class="bold">September 13, 2020</span>
            </li>
            <li>
              Final Paper Submission:
              <span class="bold">September 27, 2020</span>
            </li>

            <li>
              Registration and full payment due:
              <span class="bold">September 30, 2020</span>
            </li>

            <li>
              Conference Program Announcement :
              <span class="bold">October 25, 2020</span>
            </li>
            <li>
              HPC-UA 2020:
              <span class="bold">November 06 - 07, 2020</span>
            </li>
          </ul>
        </div>

        <div class="callforpapers__inner border-top">
          <h1 class="title">Call for Research Papers and Posters</h1>
          <div class="pad-20">
            <p class="callforpapers__text">
              <span class="callforpapers__span bold">Research paper submission is open!</span>
              Prospective authors are invited to submit conference papers or poster
              presentations
              within
              the range of conference topics.
            </p>
            <p class="callforpapers__text">
              Original papers not being submitted to journals or other conferences will be considered. All
              submitted papers will be reviewed by the program committee to ensure their originality,
              significance, fundamental insights, potential long-term contribution, correctness, presentation
              and
              relevance. We encourage authors to present their work on practical studies and experiments,
              critique
              of existing works, emerging issues, and novel ideas under development. Conference papers
              and
              poster presentations must be submitted electronically after registration as a conference
              participant.
            </p>

            <p class="callforpapers__text">
              All of the authors of each presented paper must be registered as participants
              of the conference via conference Web site
              registration form
              <router-link class="callforpapers__mail" to="/registration">http://hpc.ugrid.org</router-link>for the paper
              to be included in the proceedings.
            </p>

            <ul class="callforpapers__papers-list">
              <span>Your submission must satisfy the following requirements:</span>
              <li>conference paper at least 4-6 pages,</li>

              <li>
                poster presentations up to A0 size, poster must be supplemented with an abstract,
                including all figures, tables, and references.
              </li>
            </ul>

            <p
              class="callforpapers__text"
            >Accepted papers will be published in the conference proceedings.</p>
            <p class="callforpapers__text">
              You can also submit your extended article at least 8-15 pages. Extended articles will be
              published in special issues of the scientific journals. The cost of
              publication is not included in the organizational fee. For publication of extended articles, you
              should contact the organizing committee via e-mail:
              <a
                class="callforpapers__mail"
                href="mailto:hpc.ua.conf@gmail.com?cc=hpc.ua.conf@gmail.com"
                target="_blank"
              >hpc.ua.conf@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="callforpapers__inner border-top">
          <h1 class="title">Call for Workshops / Exhibitions Section</h1>

          <div class="pad-20">
            <p class="callforpapers__text">
              Innovative products will be presented on the workshops as part of the proposed format of HPC-UA
              conference. The industrial exhibition will be held presenting software and hardware products
              ready for industrial and commercial use. Everyone, including students and young scientists with
              their innovative projects can take part in the workshops. Moreover, exhibitions with the
              participation of GlobalLogic will take place at the conference.
            </p>
            <p class="callforpapers__text">
              Each exhibition place will be equipped with one table, 1-2 chairs and 220V electric power supply
              with standard Euro-socket. Also it would be possible to stick a poster and/or make multimedia
              presentation. Exhibitors must bring their own computer and office equipment needed for the
              demonstration.
            </p>
            <p class="callforpapers__text">
              For authors of accepted papers an exhibition place is available free of charge. For private
              companies and vendors we have special exhibition package. Please contact us via e-mail:
              <a
                class="callforpapers__mail"
                href="mailto:hpc.ua.conf@gmail.com?cc=hpc.ua.conf@gmail.com"
                target="_blank"
              >hpc.ua.conf@gmail.com</a> for more details.
            </p>
            <ul class="callforpapers__papers-list">
              <span>In order to participate in the exhibition please send exibition request as follows:</span>
              <li>Name of the contact person (one of the authors);</li>
              <li>Report title;</li>
              <li>Name of the product or appliance;</li>
              <li>Abstract (up to one page);</li>
              <li>Equipment specifications (name, size, weight, power consumption);</li>
              <li>The presence of a poster (yes, no);</li>
              <li>The presence of a multimedia presentation (yes, no);</li>
              <li>Availability of brochures and flyers (yes, no).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.callforpapers__content {
  padding: 40px 15px;
  background-color: #fff;
  color: #000;
}

.callforpapers__inner {
  margin-top: 30px;
}

.information-mail {
  padding-top: 30px;
  text-decoration: underline;
}

.callforpapers__mail {
  text-decoration: underline;
  color: blue;
}

.callforpapers__dates-list {
  padding-top: 30px;
}

.callforpapers__papers-list {
  padding-top: 10px;
}

.callforpapers__papers-list li {
  list-style: disc inside;
}

.callforpapers__text {
  padding-top: 10px;
}

.callforpapers__span {
  display: block;
}
</style>
