<template>
  <div>
    <preview-layout />
  </div>
</template>

<script>
import general_mixin from "@/mixins/general_mixin";
import file_upload_mixin from "@/mixins/file_upload_mixin";
import form_mixin from "@/mixins/form_mixin";
import PreviewLayout from "../../components/dashboard/mortgage/PreviewLayout2.vue";

export default {
  layout: "form",
  components: { PreviewLayout },
  mixins: [general_mixin, form_mixin, file_upload_mixin],
  // middleware:['review','auth'],
  // middleware:['is_loggedin', 'auth'],
  data() {
    return {};
  },
  watch: {
    "$store.state.portal.profile.step": function () {
      console.log("step changes 1");
      this.prefillForm();
    },
  },
  computed: {
    form() {
      this.$store.state.portal.profile;
    },
    document() {
      let d = this.$store.state.dashboard.document_list;
      return d;
    },
  },
  methods: {
    prefillForm() {
      let r = this.$store.state.auth.user;
      console.log(r.data);
      this.$store.dispatch("portal/getProfileAction")
      // this.$store.commit("portal/setProfile", r.data);
      // this.$store.dispatch("portal/setProfileKey");
    },
    submitForm() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0a1c44",
        cancelButtonColor: "#c71f40",
        confirmButtonText: "Yes,  Submit!",
      }).then((result) => {
        if (result.isConfirmed) {
          // this.loading = true;

          this.$store.commit("portal/SET_PROFILE_STEP", 8);
          console.log("is iokay");
          this.$store.dispatch("portal/getProfileAction")
          this.$store
            .dispatch("portal/setProfileAction",{})
            .then((res) => {
              // this.loading = false;
              this.$router.push("/submitted");
            })
            .catch((err) => {
              // this.loading = false;
            });
        }
      });
    },

    triggerUpload(item) {
      this.active_file = item;
      let f = document.getElementById(item.id);
      f.click();
    },
    mapUploadResultToForm(cloud) {
      this.form.filename = cloud.secure_url;
      this.form.filename_id = cloud.public_id;
      this.form.resource_type = cloud.resource_type;
      this.form.is_uploaded = 1;
      this.form.id = this.active_file.id;
    },
    addFile(file) {
      this.current_file_name = file.name;
      if (file.size > 1000000) {
        this.$apptoast.error("file size should be less than 1 MB!");
        return;
      }
      this.appLoading(true);
      console.log(file);

      let cloudname =
        "profiling_documents/" + this.form.doc_value + "_" + this.form.user_id;
      this.uploadFileToCloudinary(file, cloudname)
        .then((res) => {
          console.log(res);
          this.mapUploadResultToForm(res);
          this.$store
            .dispatch("dashboard/uploadDocumentAction", this.form)
            .then((res) => {
              this.appLoading(false);
            });
        })
        .catch((err) => {
          console.log(err);
          this.appLoading(false);
        });
    },
    removeFile(item) {
      this.form.is_uploaded = 0;
      this.form.id = item.id;
      this.form.filename_id = item.filename_id;
      this.form.filename = item.filename;
      let ids = [];
      ids.push(item.filename_id);
      this.$store
        .dispatch("dashboard/uploadDocumentAction", this.form)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    },
    fetchData() {
      this.$store.dispatch("portal/getProfileAction")
      // this.$store.dispatch("portal/setProfileKey");
      this.$store.dispatch("portal/getCourses");
    },
  },

  created() {
    this.$store.commit("portal/GO_TO_STEP", 8);
    this.$store.commit("portal/IS_COMPLETED", 1)
    this.prefillForm();
    this.fetchData();
  },
  mounted() {
    this.$nuxt.$on("submit_profile_form", (param) => {
      if (param) {
        this.submitForm();
      }
    });
  },
  unmounted() {
    this.$refs.profileform.reset();
  },
};
</script>

<style lang="scss" scoped></style>
