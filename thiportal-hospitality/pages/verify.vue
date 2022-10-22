<template>
  <div>
    <v-row align-center justify="center" fill-height class="card_row">
      <v-card class="side_card"></v-card>
      <v-col cols="12" sm="8" md="6" class="right_card">
        <v-card class="elevation-0 justify-center mt-10 card_right">
          <v-card-title class="font-weight-black"> Welcome </v-card-title>
          <v-card-subtitle> Enter the code sent to your mail </v-card-subtitle>
          <v-spacer />
          <v-card-text>
            <v-form ref="verify_form">
              <v-text-field
                outlined
                type="number"
                max="6"
                label="Code"
                ref="code"
                v-model="form.code"
                :rules="[rules.required, rules.pin]"
              />
              <action-button
                type="submit"
                height="48px"
                text="Verify"
                :block="true"
                color="primary"
                :action="verifyMycode"
              ></action-button>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-spacer></v-spacer>
            <v-btn
              text
              color="secondary"
              style="text-transform: capitalize"
              @click="retry"
            >
              <span style="font-size: 15px">Resend code</span></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import general_mixin from "@/mixins/general_mixin";
export default {
  name: "verify",
  layout: "verifyDefault",
  //  middleware:['dashboard'],
  mixins: [general_mixin],
  data() {
    return {
      form: {
        code: "",
      },
    };
  },
  computed: {},
  methods: {
    retry() {
      this.$store.dispatch("app/resendCode", this.form).then((res) => {
        let m = res.data.data;
        toast.success(m);
      });
    },
    async verifyMycode() {
      if (!this.$refs.verify_form.validate()) {
        return;
      }
      this.appLoading(true);
      try {
        let result = await this.$store.dispatch(
          "app/verifyUserMailAction",
          this.form
        );
        if (result) {
          let r = result.data;
          console.log(r);
          this.appLoading(false);
          this.$auth.setUser(result);

          this.$apptoast.success("Email verified successfully");
          this.$router.push("/profiling");
        }
        this.appLoading(false);
      } catch (err) {
        this.appLoading(false);
        let e = err.response.data.message;
        console.log(e);
        if (e) {
          this.$apptoast.error(e);
        } else {
          this.$apptoast.error("could not verified email, try again");
        }
      }
    },
    backToLogin() {
      this.$store.dispatch("logoutAction");
    },
  },
  created() {
    this.$nuxt.$emit("title-change", "Verify Phone");
  },
};
</script>
<style scoped>
.side_card {
  background-image: url("/image/thi-image.jpg");
  background-size: cover;
  background-color: #8f70a4;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  height: 95vh;
  width: 50%;
  overflow: hidden;
}
.right_card {
  background-color: #fff;
  height: 95vh;
  width: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.text_log {
  color: red;
  display: flex;
  background-color: transparent;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: 290px;
  margin-top: -130px;
  text-transform: capitalize;
}
v-btn--text {
  background-color: transparent;
}
v-btn--text::before {
  background-color: transparent;
}
v-btn--text::after {
  background-color: transparent;
}
v-btn:before {
  background-color: transparent;
}
v-btn::after {
  background-color: transparent;
}
v-btn:hover {
  background-color: transparent;
}
.text_log:hover {
  background-color: transparent;
  border: transparent;
}
.card_right {
  box-shadow: 3px 6px 6px 10px rgb(255, 255, 255) !important;
  width: 80%;
}
.card_row {
  display: flex;
  overflow: hidden;
}
.new {
  overflow: hidden;
}

@media (min-width: 220px) and (max-width: 640px) {
  .side_card {
    display: none;
  }
  .card_right {
    width: 80%;
  }
}
@media (min-width: 641px) and (max-width: 768px) {
  .side_card {
    display: none;
  }
  .card_right {
    width: 80%;
  }
}
@media (min-width: 769px) and (max-width: 1020px) {
  .side_card {
    display: none;
  }
  .card_right {
    width: 80%;
  }
}
@media (min-width: 1021px) and (max-width: 1200px) {
  .card_right {
    width: 80%;
  }
}
</style>
