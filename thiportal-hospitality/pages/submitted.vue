<template>
    <div class="side_card"></div>
</template>
<script>
export default {
  // middleware: ['auth'],
     name:"submitted",
    layout:'course',

     methods:{
        showWarning() {
      // Use sweetalert2
      this.$swal(
  // position: 'top-center',
  // icon: 'You have completed your application',
  // title: 'You have completed Your applicat ion and it is under review.',
  // height: '2000px',
  // showConfirmButton: false,
  'Submitted Successfully!',
       'Your application has been submitted.',
      'success',
);
    },
  },
  beforeMount(){
        this.showWarning()
    },
}
</script>
<style>
.side_card{
    background-image: url("/image/thi-image.jpg");
    background-size: cover;
    background-color: #8f70a4;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    height: 97vh;
    width: 100%;
    /* overflow: hidden; */
  }
  
</style>