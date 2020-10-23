<template>
<section class="participants">
    <div class="container">
        <div class="participants__content">
            <div class="title__container">
                <h2 class="title--gray">Participants</h2>
            </div>

            <div class="participants__list">
                <div class="participants__item" v-for="item in participants" :key="item.id">
                    <!-- <img :src="item.photo || '../assets/img/person.png'" alt="photo" /> -->
                    <img :src="item.photo || require('../assets/img/person.png')" alt />
                    <div class="participants__info">
                        <h3 class="participants__name">{{ item.name }}</h3>
                        <h4 class="participants__theme"></h4>
                        <p class="participants__info-about">
                            {{ item.informationAboutYourself }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            participants: {},
        };
    },

    mounted() {
        axios
            .get(`${process.env.VUE_APP_LOCALHOST}/api/participants`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })

            .then((response) => (this.participants = response.data.data));
        // .then((response) => console.log(response.data.data));
    },
    //   methods: {
    //     getSpeakers() {
    //       axios
    //         .get(`${process.env.VUE_APP_LOCALHOST}/api/participants`, {
    //           headers: { "Content-Type": "application/json; charset=utf-8" },
    //         })
    //         .then((response) => {
    //           console.log(response);
    //         })
    //         .catch((e) => {
    //           this.error = e.response.data.error;
    //           this.submitStatus = "SERVER-ERROR";
    //         });
    //     },
    //   },

    //   created() {
    //     this.getSpeakers();
    //   },
};
</script>

<style lang="scss">
.participants__content {
    padding: 40px 15px;
    background-color: #fff;
    color: #000;

    .title__container {
        display: flex;
        justify-content: center;
    }
}

.participants__list {
    margin: 50px;

  @media (max-width: 768px) {
    margin: 0;
  }
}

.participants__item {
    display: flex;
    margin-top: 50px;
    padding: 30px;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 3px 0 49px 0 rgba(0, 0, 0, 0.16);

    @media (max-width: 768px) {
      flex-direction: column;
    }

    img {
        align-self: flex-start;
        width: 150px;
        height: auto;

      @media (max-width: 768px) {
        width: 200px;
      }
    }

    .participants__info {
        margin-left: 50px;

      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 30px;
      }

        .participants__name {
            font-size: 30px;
            line-height: 130%;
        }

        .participants__info-about {
            margin-top: 30px;


          @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 10px;
          }
        }
    }
}
</style>
