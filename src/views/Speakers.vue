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
                        <h4 class="participants__organization">{{item.organization}}</h4>
                        <h4 class="participants__area">{{item.areaOfScientificInterest}}</h4>
                        <h4 class="participants__theme">{{item.theme}}</h4>
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

.participants__organization {
  margin: 8px 0;
  font-size: 14px;
  font-weight: 400;
  color: rgba(#000, .3);
}

.participants__theme {
  margin: 8px 0;
  font-weight: 400;
  font-style: italic;

  &:before {
    background-image: url('../assets/img/contract.svg');
    background-size: 16px 16px;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 7px;
    content:"";
  }
}

.participants__area {
  font-weight: 400;

  &:before {
    background-image: url('../assets/img/atom.svg');
    background-size: 16px 16px;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 7px;
    content:"";
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
        align-self: center;
      }
    }

    .participants__info {
        margin-left: 50px;

      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 30px;
        text-align: center;
      }

        .participants__name {
            font-size: 30px;
            line-height: 130%;
        }

        .participants__info-about {
            margin-top: 20px;


          @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 10px;
          }
        }
    }
}
</style>
