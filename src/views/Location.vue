<template>
  <section class="location">
    <div class="container">
      <div class="location__content">
        <div class="location__info">
          <div class="location__info-top">
            <div class="title--gray">LOCATION</div>
            <div class="info__btns">
              <a href="#visa" class="info__btn info__btn--red">VISA POLICY</a>
              <a href="#about" class="info__btn info__btn--orange">ABOUT KYIV</a>
              <a href="#dishes" class="info__btn info__btn--green">SIGHTS</a>
            </div>
          </div>

          <div class="location__info-bot">
            <div class="info__map">
              <div class="info__title--min">Venue</div>
              <div class="location__text">
                <ul>
                  <li>
                    Opening Session
                    <span>
                      Council hall of NTUU "Igor
                      Sikorsky Kyiv Polytechnic Institute", building 6,
                      37 Peremohy ave., Kyiv
                      <a
                        class="location__text-link"
                        href="https://www.kpi.ua/en/node/7336"
                        target="_blank"
                      >https://www.kpi.ua/en/node/7336</a>
                      <a
                        class="location__text-link"
                        href="https://kpi.ua/en/k-6"
                        target="_blank"
                      >https://kpi.ua/en/k-6</a>
                    </span>
                  </li>

                  <li>
                    Keynote Session
                    <span>
                      NTUU "Igor Sikorsky Kyiv Polytechnic
                      Institute", Building 13, 14-v Politekhnichna str.,
                      Kyiv
                      <a
                        class="location__text-link"
                        href="https://www.kpi.ua/en/node/2756"
                        target="_blank"
                      >https://www.kpi.ua/en/node/2756</a>
                    </span>
                  </li>

                  <li>
                    Important information
                    <span>In connection with the continuation of the Covid epidemic, the organizing committee of Six International Conference on High Performance Computing (HPC-UA 2020) is looking at possible online format of the conference.</span>
                  </li>
                </ul>
              </div>
              <iframe
                src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.588777782956!2d30.45845571573128!3d50.44875987947511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce9d34d96a15%3A0x67d993dffc80196e!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC_0L7Qu9C40YLQtdGF0L3QuNGH0LXRgdC60LjQuSDQvNGD0LfQtdC5INC_0YDQuCDQndCi0KPQoyDQmtCf0Jg!5e0!3m2!1sru!2sua!4v1572529472475!5m2!1sru!2sua"
                width="500"
                height="250"
                frameborder="0"
                style="border:0;"
                allowfullscreen
              ></iframe>
            </div>

            <div class="info__hotels">
              <div class="info__title--min">Accomodation</div>
              <p class="location__text">
                There is a number of hotels in Kyiv, but you may be interested in
                apartments rent as a cheaper alternative:
              </p>
              <a href="http://doba.ua/" class="hotels__link" target="_blank">
                <img src="../assets/img/doba.png" alt="Doba.ua" />
              </a>
              <p class="location__text">
                Please
                <router-link class="info__link" to="/contacts">contact us</router-link>if you
                have any difficulties finding the best place to stay in Kyiv.
              </p>
            </div>
          </div>
        </div>
        <!-- /.location__info-->
        <div class="location__descrption">
          <div class="descrption__visa" id="visa">
            <div class="title--gray">VISA POLICY OF UKRAINE</div>
            <p class="location__text location__text--p25">
              Citizens of the following countries can enter Ukraine without a visa
              for an indefinite stay: Armenia, Azerbaijan, Belarus, Georgia,
              Moldova, Russia, Uzbekistan.
            </p>
            <p class="location__text location__text--p25">
              Citizens of the following countries can enter Ukraine without a visa
              for a stay up to 90 days, with minor exceptions: Andorra, Argentina,
              Austria, Belgium, Bosnia and Herzegovina (30 days), Brazil, Brunei
              (30 days), Bulgaria, Canada, Croatia, Cyprus, Czech Republic,
              Denmark, Estonia, Finland, France, Germany, Greece, Hong Kong (14
              days), Hungary, Iceland, Ireland, Israel, Italy, Japan, Kazakhstan,
              Kyrgyzstan, Latvia, Liechtenstein, Lithuania, Luxembourg, Macedonia,
              Malta, Monaco, Mongolia, Montenegro, Netherlands, Norway, Paraguay,
              Poland, Portugal, Romania, Serbia (30 days), Slovakia, Slovenia,
              Spain, South Korea, Sweden, Switzerland, Tajikistan, Turkey (30
              days), United Kingdom, USA.
            </p>
            <p class="location__text location__text--p25">
              If you need visa to visit our conference please inform Organizing
              Committee in advance, at least a month before your arrival. Very
              often embassies of Ukraine require hard copy of invitation with a
              stamp of Ministry of Internal Affairs from conference organizers.
              Please take into account that we need to spend up to two weeks for
              paper processing in the Ministry.
            </p>
            <p class="location__text location__text--p25">
              Please check up-to-date information about visa requirements
              <a
                href="http://mfa.gov.ua/en/consular-affairs/entering-ukraine/visa-requirements-for-foreigners"
                class="info__link"
                target="_blank"
              >here</a>.
            </p>
          </div>

          <div class="descrption__about" id="about">
            <div class="title--gray">ABOUT KYIV</div>
            <p class="location__text location__text--p25">
              There are cities that symbolise a nation, and Kyiv is one of them.
              Kyiv is the soul of Ukraine, playing a key part in the past, present
              and future of this country. One of the most beautiful cities in the
              world, Kyiv is covered in a sea of greenery, which can be seen
              everywhere - in its many parks, boulevards and gardens. At every
              corner of every street you will find beautiful historic sites.
            </p>
            <p class="location__text location__text--p25">
              Kyiv is the capital and the largest city of Ukraine, located in the
              north central part of the country on the Dnipro River, an important
              industrial, scientific, educational, and cultural centre of Eastern
              Europe. It is home to many high-tech industries, higher education
              institutions and world-famous historical landmarks.
            </p>
            <p class="location__text location__text--p25">
              During its history, Kyiv, one of the oldest cities in Eastern
              Europe, passed through several stages of great prominence and
              relative obscurity. The city probably existed as a commercial centre
              as early as the 5th century. In the 9th century the city became a
              capital of the Rus', the first East Slavic state. Even the great
              Tatar invasion that shook the civilised world in the 13th Century
              was unable to wipe it off the face of the earth. Then, at the
              beginning in the 17th century, Kyiv once again turned into a leading
              spiritual and cultural centre.
            </p>
            <p class="location__text location__text--p25">
              Today we are witnessing a great time in Kyiv’s and in Ukraine’s
              history. With the population of over three million, the same as
              Rome, Paris, and Madrid, changes are taking place at an amazing
              pace. At the same time, Kyiv faces challenges that other modern
              European cities face as well.
            </p>
          </div>

          <div class="descrption__sights" id="dishes">
            <div class="title--gray">KYIV SIGHTS</div>
            <div class="sights__list">
              <figure class="sights__figure">
                <img
                  class="sights__img"
                  src="../assets/img/khreshatik.jpeg"
                  alt="Khreschatyk street"
                />
                <figcaption>
                  <div class="info__title--min">Khreschatyk street</div>
                  <p class="location__text location__text--p25">
                    From its start at European Square to its terminus at
                    Bessarabs’ka Square, Kyiv’s most beloved street is not even
                    two kilometres long. Despite what has been called the most
                    impressive unbroken string of Stalinist architecture anywhere,
                    Khreschatyk’s wide chestnut lined sidewalks are ideal for a
                    relaxing stroll.
                  </p>
                  <p class="location__text location__text--p25">
                    On weekends and holidays, the street becomes a pedestrian only
                    thoroughfare where locals, travellers and street performers
                    mingle and frolic. It’s hard to imagine that this was once a
                    deep valley surrounded by dense forest. The valley was named
                    Khreschata (crossed) in reference to the many ravines that
                    converged in the area.
                  </p>
                  <p class="location__text location__text--p25">
                    Some of the city’s best shopping can be found both above and
                    below ground. Trendy malls have been dug beneath Bessarabs’ka
                    and Maidan Nezalezhnosti (Independence Square).
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img class="sights__img" src="../assets/img/maidan.jpeg" alt="Independence Square" />
                <figcaption>
                  <div class="info__title--min">Independence Square (Maidan Nezalezhnosti)</div>
                  <p class="location__text location__text--p25">
                    Kyiv’s central square has undergone major changes in recent
                    years, both above and below ground (you can see the Globus
                    Shopping Centre’s glassy domes). One of the main city squares,
                    it is located on the Khreshchatyk Street. The square has been
                    known under many different names, but it became known simply
                    as the Maidan due to the political events that took place
                    there in 2004 after the Ukrainian accession to independence
                    (The Orange Revolution).
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img
                  class="sights__img"
                  src="../assets/img/sophivski-sobor.jpeg"
                  alt="St. Sophia’s Cathedral"
                />
                <figcaption>
                  <div class="info__title--min">St. Sophia’s Cathedral (Sofiys'kyi Sobor)</div>
                  <p class="location__text location__text--p25">
                    Kyiv’s oldest standing church, St. Sophia’s was built in 1037
                    by Prince Yaroslav the Wise, who incidentally was laid to rest
                    inside. It was named after the famous St. Sophia’s Cathedral
                    in Constantinople.
                  </p>
                  <p class="location__text location__text--p25">
                    This majestic 13-cupola sanctuary adjoined Yaroslav’s Palace
                    and became a holy place of worship for Kyivites as well as a
                    political and cultural centre. With an interior of rich
                    frescoes and mosaics, many of which are still intact almost a
                    millennium later, the cathedral made a huge impression on the
                    ordinary worshippers of Kyiv. The azure and white bell tower
                    is 76 m high and was finished in 1752. The cathedral’s upper
                    Ukrainian Baroque section and gilded cupola were added in
                    1852.
                  </p>
                  <p class="location__text location__text--p25">
                    Today the entire complex is protected by Ukraine, and also
                    receives support from UNESCO. The 18th century refectory works
                    as a museum and contains archaeological artefacts and
                    architectural displays, such as models depicting Kyiv as it
                    looked before being razed by Mongol invaders in 1240.
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img
                  class="sights__img"
                  src="../assets/img/andriyvska-cerkva.jpeg"
                  alt="St. Andrew’s Church (Andriivs'ka Tserkva)"
                />
                <figcaption>
                  <div class="info__title--min">St. Andrew’s Church (Andriivs'ka Tserkva)</div>
                  <p class="location__text location__text--p25">
                    Famous Italian architect Bartolomeo Rastrelli was the
                    mastermind behind this attractive Baroque church that greets
                    the throngs at the top of Andriivs’kyi uzviz (Andrew’s
                    Descent).
                  </p>
                  <p class="location__text location__text--p25">
                    Built in 1754, it’s one of the rare buildings in Kyiv that has
                    managed to avoid serious damage or reconstruction. The elegant
                    silhouette of its one large dome and five lesser cupolas are
                    easily visible from Podil and beyond.
                  </p>
                  <p class="location__text location__text--p25">
                    Apostle Andrew, who was the first Christian to preach the
                    gospel in Kyivan Rus, was said to have erected a cross on this
                    very site. It was the wish of Peter the Great’s
                    religiously-minded daughter, Elizabeth, after her visit to
                    Kyiv in 1744 that this church be built.
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img
                  class="sights__img"
                  src="../assets/img/zoloti-vorota.jpeg"
                  alt="Golden Gate (Zoloti Vorota)"
                />
                <figcaption>
                  <div class="info__title--min">Golden Gate (Zoloti Vorota)</div>
                  <p class="location__text location__text--p25">
                    Zoloti Vorota, one of the most unique
                    architectural/archaeological sites in Kyiv, reopened in 2007
                    after a lengthy reconstruction.
                  </p>
                  <p class="location__text location__text--p25">
                    The remains of ancient Kyiv’s main gate were originally
                    constructed during the height of the Kyivan Rus, and are
                    included on the UNESCO World Heritage list.
                  </p>
                  <p class="location__text location__text--p25">
                    Painstakingly planned by historians and architects, the bright
                    new construction that entombs the ancient walls is considered
                    an exact replica of the original gate. From the platforms you
                    can see the views of Volodymys’ka street and surrounding area.
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img
                  class="sights__img"
                  src="../assets/img/rodina-matb.jpeg"
                  alt="Motherland (Rodina Mat’)"
                />
                <figcaption>
                  <div class="info__title--min">Motherland (Rodina Mat’)</div>
                  <p class="location__text location__text--p25">
                    The sculpture is a part of Museum of the Great Patriotic War.
                    It was opened in 1981. The stainless steel statue stands 62 m
                    (203 ft) tall upon the museum building with the overall
                    structure measuring 102 m (335 ft) and weighing 560 tons. The
                    sword in the statue's right hand is 16 m (52 ft) long weighing
                    9 tons, with the left hand holding up a 13 by 8 m (43 by 26
                    ft) shield with the State Emblem of the Soviet Union.
                  </p>
                  <p class="location__text location__text--p25">
                    The Memorial hall of the Museum displays marble plaques with
                    carved names of more than 11,600 soldiers and over 200 workers
                    of the home-front honored during the war with the title of the
                    Hero of the Soviet Union and the Hero of Socialist Labor. On
                    the hill beneath the museum, traditional flower shows are
                    held.
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img
                  class="sights__img"
                  src="../assets/img/arka-dryzhbi.jpeg"
                  alt="The Friendship of Nations Arch"
                />
                <figcaption>
                  <div class="info__title--min">The Friendship of Nations Arch</div>
                  <p class="location__text location__text--p25">
                    This steel rainbow was erected in 1983 to commemorate the
                    unification of Ukraine and Russia in 1653. The monument is
                    supposed to symbolize friendship and mutual respect between
                    the two nations. Crowds swarm the monument’s platform to enjoy
                    spectacular views of the Dnipro River and the vast steppes
                    beyond.
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img class="sights__img" src="../assets/img/dnipro.jpeg" alt="Dnipro River" />
                <figcaption>
                  <div class="info__title--min">Dnipro River</div>
                  <p class="location__text location__text--p25">
                    Usually on May 1, the Kyiv River Port officially opens its
                    season of tours on the Dnipro. Kyivites and visitors to the
                    capital have made cruising this famed river and its
                    tributaries one of their favourite leisure activities.
                  </p>
                  <p class="location__text location__text--p25">
                    From the water it’s possible to see Kyiv’s sites from a whole
                    new perspective and enjoy the awe inspiring beauty of the lush
                    forests that caress both banks. Aboard different tour boats
                    passengers can go as far as the Kyiv Sea or sweep down to the
                    southern suburb of Osokorky.
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img
                  class="sights__img"
                  src="../assets/img/shevchenko-park.jpeg"
                  alt="Shevchenko Park"
                />
                <figcaption>
                  <div class="info__title--min">Shevchenko Park</div>
                  <p class="location__text location__text--p25">
                    Shevchenko Park is a monument of gardening and landscape
                    architecture. So many gorgeous colours, sights and sounds are
                    packed into such a small area.
                  </p>
                  <p class="location__text location__text--p25">
                    The park is located on the corner of Volodymyrs’ka street and
                    Shevchenko bul’v., opposite Taras Shevchenko National
                    University.
                  </p>
                  <p class="location__text location__text--p25">
                    From the centre of the park, a solemn looking statue of Taras
                    Shevchenko (the greatest of the classic Ukrainian literary
                    figures) gazes down, like a stern yet loving father, on his
                    hedonistic spawn.
                  </p>
                </figcaption>
              </figure>

              <figure class="sights__figure">
                <img
                  class="sights__img"
                  src="../assets/img/nsc-olimpiyski.jpeg"
                  alt="NSC Olimpiyskiy"
                />
                <figcaption>
                  <div class="info__title--min">NSC Olimpiyskiy</div>
                  <p class="location__text location__text--p25">
                    This is a multifunctional sport arena which holds sport,
                    cultural, business, and many other events. It is the prime
                    venue in Ukraine and the 8th largest football stadium in the
                    world with a total capacity of 83,450.
                  </p>
                  <p class="location__text location__text--p25">
                    The stadium was founded in 1923. The last reconstruction works
                    lasted over 3 years and gave the stadium its modern and
                    incredible appearance. The official opening took place on 11
                    October, 2011.
                  </p>
                  <p class="location__text location__text--p25">
                    In June 2012 the Stadium hosted matches of the European
                    Football championship including the final game between Spain
                    and Italy on 1 July, 2012. Apart from sport events, NSC
                    Olimpiyskiy provides conference & banqueting facilities,
                    catering, photo shoot services.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <!-- /.location__content-->
    </div>
  </section>
</template>

<style lang="scss">
.location__info {
  padding: 30px 50px;
  width: 100%;
  min-height: 500px;
  background-color: #f0f0f0;
}

.location__info-top {
  display: flex;
  justify-content: space-between;
}

.location__info-bot {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.info__map {
  max-width: 515px;
}

.info__hotels {
  max-width: 415px;
}

.info__title--min {
  color: #5d9240;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.1;
}

.location__text {
  padding: 20px 0;
  color: #5e5e5e;

  ul,
  li {
    list-style: disc inside;
    font-weight: 600;
  }

  li {
    margin-top: 10px;
  }

  span {
    padding-top: 5px;
    display: block;
    font-weight: 400;
  }

  .location__text-link {
    padding-top: 5px;
    display: block;
  }
}

.info__link {
  color: #428b9b;

  &:hover {
    color: #bf1313;
  }
}

.location__descrption {
  padding: 30px 50px;
  background-color: #fff;
}

.descrption__visa {
  padding-bottom: 40px;
}

.descrption__about {
  padding-bottom: 40px;
}

.location__text--p25 {
  padding-top: 25px;
  padding-bottom: 0;
}

.sights__figure {
  overflow: hidden;
  margin-top: 25px;
}

.sights__img {
  padding: 0 20px 20px 0;
  float: left;
}
</style>
