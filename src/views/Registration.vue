<template>
  <section class="registration">
    <div class="container">
      <div class="frame">
        <div class="form__nav" v-if="!isHidden">
          <ul class="form__nav-links">
            <li class="signup-active">
              <a class="btn">Participation request:</a>
            </li>
          </ul>
        </div>
        <div class="success" v-if="isHidden">
          <img
            src="../assets/img/success.png"
            alt="success"
            class="img-success"
          />
        </div>
        <form
          class="form-signin"
          method="post"
          name="form"
          @submit.prevent="submitHandler"
          v-if="!isHidden"
        >
          <div class="input-field">
            <label for="name_of_participant">First name: *</label>
            <input
              class="form-styling"
              type="text"
              name="name_of_participant"
              v-model="firstName"
              :class="{
                invalid: $v.firstName.$dirty && !$v.firstName.required,
              }"
            />
            <span
              class="invalid-text"
              v-if="$v.firstName.$dirty && !$v.firstName.required"
              >This field is required</span
            >
          </div>

          <div class="input-field">
            <label for="name_of_participant">Second name: *</label>
            <input
              class="form-styling"
              type="text"
              name="name_of_participant"
              v-model="lastName"
              :class="{
                invalid: $v.lastName.$dirty && !$v.lastName.required,
              }"
            />
            <span
              class="invalid-text"
              v-if="$v.lastName.$dirty && !$v.lastName.required"
              >This field is required</span
            >
          </div>

          <div class="input-field">
            <label for="name_of_participant">Middle name: *</label>
            <input
              class="form-styling"
              type="text"
              name="name_of_participant"
              v-model="middleName"
              :class="{
                invalid: $v.middleName.$dirty && !$v.middleName.required,
              }"
            />
            <span
              class="invalid-text"
              v-if="$v.middleName.$dirty && !$v.middleName.required"
              >This field is required</span
            >
          </div>

          <div class="input-field">
            <label for="email">Email: *</label>
            <input
              class="form-styling"
              type="email"
              name="email"
              v-model="email"
              :class="{
                invalid:
                  ($v.email.$dirty && !$v.email.required) ||
                  ($v.email.$dirty && !$v.email.email),
              }"
            />
            <span
              class="invalid-text"
              v-if="$v.email.$dirty && !$v.email.required"
              >This field is required</span
            >
            <span
              class="invalid-text"
              v-else-if="$v.email.$dirty && !$v.email.email"
              >Enter correct email</span
            >
          </div>

          <!-- <div class="input-field">
            <label for="phone">Phone:</label>
            <input
              class="form-styling"
              type="tel"
              name="phone"
              v-model="phone"
              :class="{
                invalid: $v.phone.$dirty,
              }"
            />
            <span class="invalid-text" v-if="$v.phone.$dirty"
              >Enter correct phone</span
            >
          </div>-->

          <div class="input-field">
            <label for="phone">Phone: *</label>
            <phone-mask-input
              placeholder="start with your country code"
              v-model="phone"
              autoDetectCountry
              showFlag
              wrapperClass="wrraper-example"
              inputClass="form-styling"
              flagClass="flag-example"
              :class="{
                invalid: $v.phone.$dirty && !$v.phone.required,
              }"
            />
            <span
              class="invalid-text"
              v-if="$v.phone.$dirty && !$v.phone.required"
              >This field is required</span
            >
            <!-- <span class="invalid-text" v-if="$v.phone.$dirty">Enter correct phone</span> -->
          </div>

          <div class="input-field">
            <label for="organization">Organization: *</label>
            <input
              class="form-styling"
              type="text"
              name="organization"
              v-model="organization"
              :class="{
                invalid: $v.organization.$dirty && !$v.organization.required,
              }"
            />
            <span
              class="invalid-text"
              v-if="$v.organization.$dirty && !$v.organization.required"
              >This field is required</span
            >
          </div>

          <div class="input-field">
            <label for="authors_of_conference_paper"
              >TITLE OF CONFERENCE PAPER: *</label
            >
            <input
              class="form-styling"
              type="text"
              name="authors_of_conference_paper"
              v-model="authors"
              :class="{
                invalid: $v.authors.$dirty && !$v.authors.required,
              }"
            />
            <span
              class="invalid-text"
              v-if="$v.authors.$dirty && !$v.authors.required"
              >This field is required</span
            >
          </div>

          <div class="input-field">
            <!-- <div class="overlay" @click="showFilteredCountries = false"></div> -->
            <label for="country">Country: *</label>
            <input
              class="form-styling"
              type="text"
              name="country"
              v-model="country"
              autocomplete="off"
              @focus="showFilteredCountries = true"
              :class="{
                invalid: $v.country.$dirty && !$v.country.required,
              }"
            />

            <div v-if="filteredCountries && showFilteredCountries">
              <ul class="filtered-countries">
                <li
                  v-for="filteredCountry in filteredCountries"
                  :key="filteredCountry"
                  @click="setCountry(filteredCountry)"
                >
                  {{ filteredCountry }}
                </li>
              </ul>
            </div>

            <!---
            <select
              name="country"
              v-model="country"
              :class="{
                invalid: $v.country.$dirty && !$v.country.required,
              }"
            >
              <option value="Choose country" selected disabled>Choose country</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Belarus">Belarus</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Europe">Europe</option>
              <option value="Ireland">Ireland</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="USA">USA</option>
              <option value="another-country">Another country</option>
            </select> -->
            <span
              class="invalid-text"
              v-if="$v.country.$dirty && !$v.country.required"
              >This field is required</span
            >
          </div>

          <div class="input-field">
            <label for="info_about_yourself"
              >Brief information about yourself:</label
            >
            <textarea
              name="info_about_yourself"
              id
              cols="30"
              rows="15"
              v-model="informationAboutYourself"
            ></textarea>
          </div>

          <div class="input-field">
            <label for="scientific_interest"
              >Area of scientific interest: *</label
            >
            <textarea
              name="scientific_interest"
              id
              cols="30"
              rows="15"
              v-model="areaOfScientificInterest"
              :class="{
                invalid:
                  $v.areaOfScientificInterest.$dirty &&
                  !$v.areaOfScientificInterest.required,
              }"
            ></textarea>
            <span
              class="invalid-text"
              v-if="
                $v.areaOfScientificInterest.$dirty &&
                  !$v.areaOfScientificInterest.required
              "
              >This field is required</span
            >
          </div>

          <div class="input-field">
            <label for="photo">Photo:</label>
            <label for="photo" class="label_photo">Choose your photo</label>
            <input
              type="file"
              class="photo"
              ref="file"
              accept="image/*"
              id="photo"
              name="photo"
              multiple
              @change="onImageUpload()"
            />
          </div>

          <div>
            <img class="photo_preview" :src="imageSrc" v-show="showPreview" />
          </div>

          <vue-recaptcha
            ref="recaptcha"
            size="invisible"
            :sitekey="sitekey"
            @verify="register"
            @expired="onCaptchaExpired"
          />

          <button type="submit" class="btn-signup">Sign Up</button>
        </form>
        <div class="registration-results">
          <p class="typo__p" v-if="submitStatus === 'OK'">
            Registration completed successfully
          </p>
          <p class="typo__p red" v-if="submitStatus === 'ERROR'">
            Please fill the form correctly.
          </p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
          <p class="typo__p red" v-if="submitStatus === 'SERVER-ERROR'">
            {{ error }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhoneMaskInput from "vue-phone-mask-input";
import axios from "axios";
import { required, email, numeric } from "vuelidate/lib/validators";
import VueRecaptcha from "vue-recaptcha";

export default {
  data: () => ({
    firstName: null,
    lastName: null,
    middleName: null,
    country: null,
    organization: null,
    authors: null,
    areaOfScientificInterest: null,
    email: null,
    phone: null,
    informationAboutYourself: null,
    imageSrc: null,
    showPreview: false,
    file: null,
    submitStatus: null,
    error: null,
    sitekey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
    isHidden: false,
    showFilteredCountries: false,
    filteredCountries: [],
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua & Barbuda",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia & Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo",
      "Congo Democratic Republic",
      "Costa Rica",
      "Cote D'Ivoire",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea North",
      "Korea South",
      "Kosovo",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar (Burma)",
      "Namibia",
      "Nauru",
      "Nepal",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestinian State*",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russia",
      "Rwanda",
      "Samoa",
      "San Marino",
      "Sao Tome & Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "St. Kitts & Nevis",
      "St. Lucia",
      "St. Vincent & The Grenadines",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "The Netherlands",
      "The Philippines",
      "Togo",
      "Tonga",
      "Trinidad & Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States Of America",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City (Holy See)",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ],
  }),

  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    middleName: {
      required,
    },
    country: {
      required,
    },
    organization: {
      required,
    },
    authors: {
      required,
    },
    areaOfScientificInterest: {
      required,
    },
    imageSrc: {},
    email: {
      required,
      email,
    },
    phone: {
      required,
    },
    informationAboutYourself: {},
  },

  mounted() {
    this.filteredCountries = this.countries;
  },

  watch: {
    country() {
      this.filterCountries();
    },
  },

  methods: {
    filterCountries() {
      if (this.country == null) {
        this.filteredCountries = this.countries;
      }
      this.filteredCountries = this.countries.filter((item) => {
        return item.toLowerCase().startsWith(this.country.toLowerCase());
      });
    },

    setCountry(country) {
      this.country = country;
      this.showFilteredCountries = false;
    },

    async onImageUpload() {
      this.file = this.$refs.file.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.imageSrc = reader.result;
        }.bind(this),
        false
      );
      if (this.file) {
        if (/\.(jpe?g|png)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },

    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        this.submitStatus = "ERROR";
        return;
      } else {
        this.submitStatus = "PENDING";
        // this.submitStatus = "OK";

        this.$refs.recaptcha.execute();
      }
    },

    register(recaptchaToken) {
      const formData = JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        country: this.country,
        organization: this.organization,
        authors: this.authors,
        areaOfScientificInterest: this.areaOfScientificInterest,
        photo: this.imageSrc || null,
        email: this.email,
        phone: this.phone,
        informationAboutYourself: this.informationAboutYourself || null,
        recaptchaToken: recaptchaToken,
      });

      axios
        .post(`${process.env.VUE_APP_LOCALHOST}/api/participants`, formData, {
          headers: { "Content-Type": "application/json; charset=utf-8" },
        })
        .then((response) => {
          this.submitStatus = "OK";

          this.firstName = "";
          this.lastName = "";
          this.middleName = "";
          this.country = "";
          this.organization = "";
          this.authors = "";
          this.areaOfScientificInterest = "";
          this.imageSrc = "";
          this.email = "";
          this.phone = "";
          this.informationAboutYourself = "";
          this.showPreview = false;
          this.isHidden = true;
        })
        .catch((e) => {
          this.error = e.response.data.error;
          this.submitStatus = "SERVER-ERROR";
        });
    },

    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
  },

  components: {
    VueRecaptcha,
  },
};
</script>

<style lang="scss">
// .overlay {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 0;
// }

.filtered-countries {
  margin-top: 20px;

  li {
    background-color: rgba(#fff, 0.2);
    color: #fff;
    padding: 5px 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(#000, 0.4);
    border-radius: 10px;
  }
}

.invalid {
  border: 1px solid red !important;
}

.red {
  color: red;
}

.success {
  display: flex;
  justify-content: center;
}

.img-success {
  width: 100px;
  height: 100px;
}

.invalid-text {
  display: block;
  margin-top: 10px;
  color: #ff3333;
}

.input-field {
  // width: 350px;
  margin-bottom: 20px;
}

.typo__p {
  text-align: center;
  margin-top: 20px;
}

.frame {
  width: 430px;
  height: auto;
  background: linear-gradient(rgba(35, 43, 85, 0.75), rgba(35, 43, 85, 0.95));
  background-size: cover;
  padding: 40px 0;
  margin-left: auto;
  margin-right: auto;
  border-top: solid 1px rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.5s ease;

  .form__nav {
    width: 100%;
    padding: 0 0 30px 37px;
    opacity: 1;
    transition: all 0.5s ease;

    ul {
      li {
        padding-left: 10px;
        font-size: 18px;
        display: inline;
        text-align: left;
        text-transform: uppercase;
        padding-right: 10px;
        color: #ffffff;
      }
    }
  }

  .form-signin {
    width: 430px;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;

    font-size: 16px;
    font-weight: 300;
    padding-left: 37px;
    padding-right: 37px;
    transition: opacity 0.5s ease, transform 0.5s ease;

    input,
    textarea,
    .input {
      color: #ffffff;
      font-size: 13px;
    }

    select {
      cursor: pointer;
    }

    .form-styling,
    select {
      color: #ffffff;
      outline: none;
      width: 100%;
      height: 35px;
      padding-left: 15px;
      border: none;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.2);
    }

    option {
      color: #000;
    }

    textarea {
      resize: none;
      outline: none;
      width: 100%;
      padding: 15px 0 0 15px;
      border: none;
      border-radius: 20px;
      margin-bottom: 20px;
      background: rgba(255, 255, 255, 0.2);
    }

    label {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 13px;
      padding-left: 15px;
      padding-bottom: 10px;
      color: rgba(255, 255, 255, 0.7);
      display: block;
    }

    input:focus,
    .input:focus,
    textarea:focus {
      background: rgba(255, 255, 255, 0.3);
      border: none;
      padding-right: 40px;
      transition: background 0.5s ease;
    }

    .btn-signup {
      cursor: pointer;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 13px;
      text-align: center;
      color: #ffffff;
      padding: 8px 0;
      width: 100%;
      height: 35px;
      border: none;
      outline: none;
      border-radius: 20px;
      margin-top: 23px;
      background-color: #1059ff;
    }

    input[type="file"] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    .label_photo {
      background: #006699;
      border: none;
      text-transform: none;
      border-radius: 10px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      outline: none;
      padding: 10px 25px;
      transition: all 0.3s;
      display: flex;
      align-items: center;

      &:hover {
        background-color: darken(#006699, 10%);
      }

      &::before {
        content: url("../assets/img/upload (1).png");
        padding-right: 10px;
      }
    }

    .photo_preview {
      margin-top: 10px;
      width: 100%;
      height: auto;
    }
  }
}

.wrraper-example {
  display: flex;

  span {
    margin-left: 10px !important;
  }
}

input::placeholder {
  color: rgba(#fff, 0.7);
}
</style>
