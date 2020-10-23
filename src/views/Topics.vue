<template>
  <section class="topics">
    <div class="container">
      <div class="topics__content">
        <div class="topics__inner">
          <h1 class="title--gray">TOPICS</h1>

          <div class="topics__grid">
            <!-- Cloud Computing -->
            <div class="topics__grid-block topics__grid-reverse">
              <div class="cloud-computing__block">
                <div class="cloud-computing__title topics__title">HPC</div>
                <div class="topics__text">
                  Explore problems and tasks of the state-of-the-art of HPC which are at the junction
                  technologies
                  of
                  Artificial Intelligence, Big Data Computing, High Performance Data Analytics, IoT.
                </div>
              </div>
              <div class="cloud-computing__block">
                <div class="cloud-computing__title topics__title">CLOUD</div>
                <div class="topics__text">
                  Many organizations have found that using the Cloud has a clear advantage over in-house
                  hardware.
                  Explore
                  how HPC is moving to the Cloud. Discuss development and management of Cloud systems and
                  their
                  applications.
                </div>
              </div>
              <div class="cloud-computing__block">
                <div class="cloud-computing__title topics__title">SECURITY</div>
                <div class="topics__text">
                  It is the various forms of technology developed created to store,
                  use and exchange information against any unauthorized access, misuse,
                  malfunction, modification, destruction, or improper disclosure, thereby preserving the
                  value,
                  confidentiality, integrity, availability,
                  intended use and its ability to perform permitted critical functions.
                </div>
              </div>
              <div class="cloud-computing__name topics__name">Cloud Computing</div>
            </div>

            <!-- Deep Learning -->
            <div class="topics__grid-block">
              <div class="deep-learning__name topics__name">Deep Learning</div>
              <div class="deep-learning__block">
                <div class="deep-learning__title topics__title">Machine Learning</div>
                <div class="topics__text">
                  Machine Learning uses computer implementations of mathematical algorithms that can
                  classify
                  data,
                  extract features or create insights. Machine Learning workloads straddles the
                  disciplines of
                  Artificial
                  Intelligence and Big Data Computing. Examine Machine Learning regards the intersection
                  between
                  HPC
                  and
                  Big Data Computing
                </div>
              </div>
              <div class="deep-learning__block">
                <div class="deep-learning__title topics__title">Artificial Intelligence</div>
                <div class="topics__text">
                  Artificial intelligence is developing into the next generation of computing.
                  It is impacting the future of virtually every industry and every human being.
                  Artificial intelligence is acting as the main driver of emerging technologies like big
                  data, robotics and IoT,
                  and it will continue to act as a technological innovator for the foreseeable future.
                </div>
              </div>
              <div class="deep-learning__block">
                <div class="deep-learning__title topics__title">Neural networks</div>
                <div class="topics__text">
                  Today the possibilities for using neural networks to process massive amounts of data are
                  limitless.
                  Neural networks can now be used to perform tasks that were once performed exclusively by
                  a human brain,
                  such as automatically recognizing faces and speech in images, as well as making
                  decisions based
                  on a set of data such as a person&acute;s previous experiences,
                  or the number of likes they have on a social network.
                </div>
              </div>
            </div>

            <!-- Software and Applications-->
            <div class="topics__grid-block topics__grid-reverse">
              <div class="software__block">
                <div class="software__title topics__title">Data Science</div>
                <div class="topics__text">
                  Focus on hot topics of Big Data and Big Analytics. Deep in emergent problems of
                  Artificial
                  Intelligence
                  methods and applications. Examine Blockchain technologies: algorithms, applications,
                  benefits,
                  risks
                  and
                  bottlenecks.
                </div>
              </div>
              <div class="software__block">
                <div class="software__title topics__title">Software</div>
                <div class="topics__text">
                  The domains of HPC and High Performance Data Analytics in particular are increasingly
                  based
                  on
                  parallel
                  software and algorithms. These are hot topics, enabling wide spread of HPC in various
                  areas
                  of
                  industry,
                  technology and science. Problems of efficient software development, smart adaptive
                  algorithms,
                  mathematical libraries and solvers are discussed.
                </div>
              </div>
              <div class="software__block">
                <div class="software__title topics__title">Applications</div>
                <div class="topics__text">
                  Tackle challenges in modelling real world processes, numeric experiments and simulation
                  in
                  physics,
                  astronomy, nano-technologies, computational biology, medicine, etc. Study theoretical
                  grounds
                  and
                  numeric methods of math modeling and optimization.
                </div>
              </div>
              <div class="software__name topics__name">Software and Applications</div>
            </div>

            <!-- Embedded Systems and Robotics -->
            <div class="topics__grid-block">
              <div class="embedded__name topics__name">Embedded Systems and Robotics</div>
              <div class="embedded__block">
                <div class="embedded__title topics__title">Robotics</div>
                <div class="topics__text">
                  If you look around, you can see that our everyday lives are already filled with robots.
                  The cars we drive, the printers we use, the smartphones we navigate our lives through,
                  and even the machines that clean dishes and clothes for us, are all some level of
                  robotic.
                </div>
              </div>
              <div class="embedded__block">
                <div class="embedded__title topics__title">IoT</div>
                <div class="topics__text">
                  There is an established connection between Internet of Things (IoT) and High Performance
                  Computing.
                  New
                  paradigms and devices for HPC are related to smart building management, smart logistics
                  and
                  smart
                  manufacturing leading to difficult combinatorial optimization of problems, etc.
                </div>
              </div>
              <div class="embedded__block">
                <div class="embedded__title topics__title">Embedded HPC</div>
                <div class="topics__text">
                  Recent years have brought an outburst of embedded electronics, many of them containing
                  very
                  powerful
                  microprocessor designs that outperform the capabilities of desktop computers available
                  ten
                  years
                  ago.
                  The Embedded HPC is the response for growing appetite on computational power in embedded
                  applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
.topics__content {
  padding: 40px 15px;
  background-color: #fff;
  color: #000;
}

.topics__grid-block {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;

  }
}

.topics__grid-reverse {
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
}

.topics__title {
  padding: 10px 0;

  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.cloud-computing__title {
  background-color: #4ead26;
}

.deep-learning__title {
  background-color: #bf1313;
}

.software__title {
  background-color: #0a93d3;
}

.embedded__title {
  background-color: #ed9625;
}

.topics__name {
  padding-top: 5px;

  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
}

.cloud-computing__name {
  color: #4ead26;
}

.deep-learning__name {
  color: #bf1313;
}

.software__name {
  color: #0a93d3;
}

.embedded__name {
  color: #ed9625;
}

.cloud-computing__block {
  border: 2px solid #4ead26;
}

.deep-learning__block {
  border: 2px solid #bf1313;
}

.software__block {
  border: 2px solid #0a93d3;
}

.embedded__block {
  border: 2px solid #ed9625;
}

.topics__text {
  padding: 5px;
}
</style>
