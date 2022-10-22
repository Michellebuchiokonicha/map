<template>
    <div class="div">
      <div class="apply">Your Application is now Under Review</div>
    </div>
</template>

<script>
    export default {
        layout:'course',
        
    }
</script>
   
<style lang="scss" scoped>
    .apply{
        display: flex;
        flex-direction: column;
        margin: auto;
        align-content: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        // margin-top: 20%;
        color: #c71f40;
        text-shadow: 2px 2px black;
        font-size: 2rem;
        font-weight: 700;
        background-image: url("/image/thi-image.jpg");
    background-size: cover;
    background-color: #8f70a4;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
        height: 93vh;
    }
</style>