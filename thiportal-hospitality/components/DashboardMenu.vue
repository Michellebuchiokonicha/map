<template>
    <div>
        <div class="wrapper">
            <div class="logo">
                 <h2>Logo</h2>
                <img src="/image/new_logo.png" alt="logo">
            </div>
            <v-btn depressed dark class="start-btn active"> <v-icon color="#039C71">mdi-plus</v-icon> Start new Application</v-btn>
            <v-divider class="divider"></v-divider>
            <v-btn dark depressed class="start-btn"> <div class="grid-icon"><img src="/image/dashboard.png" alt="grid"> </div> Dashboard</v-btn>
            <v-btn dark depressed class="start-btn"> <div class="grid-icon"><img src="/image/dashboard.png" alt="grid"> </div> Option 1</v-btn>
            <v-btn dark depressed class="start-btn"> <div class="grid-icon"><img src="/image/dashboard.png" alt="grid"> </div> Multiple Options</v-btn>
             <v-btn dark depressed class="start-btn"> <div class="grid-icon"><img src="/image/dashboard.png" alt="grid"> </div> Option 2</v-btn>
             <div class="flag-man-box">
                 <v-divider></v-divider>
                 <div class="card">
                     <div class="easy-way-text"></div>
                     <div class="middle-text"> <br></div>
                     <div class="flag-man"><img src="/image/flag.png" alt=""></div>
                     <v-btn depressed dark outlined class="get-btn">Get the App</v-btn>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"dashboard"
    }
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: auto;
}
.wrapper{
    width: 100%;
    min-height:auto;
    overflow-y: hidden;
    padding:0.65rem 0.45rem;
}

.logo{
    width: 100%;
    height: 64px;
    margin-bottom: 2rem;
}
.logo h2{
    font-size:1.5rem;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #0a1c44;

}
.start-btn{
    height:4rem!important;
    width:14.3rem!important;
    border-radius: 8px;
    font-size: 0.875rem!important;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left!important;
    background:#E9F2E9!important;
    // background: transparent!important;
    color: #0a1c44;
    border:1px solid #0a1c44;
    margin-bottom:1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.start-btn.active{
    background:#E9F2E9!important;
     color: #0a1c44 !important;
}
.start-btn:hover{
    background:#E9F2E9!important;
    color: #0a1c44;
}
.grid-icon{
    margin-left:1rem;
    margin-right:0.75rem;
}
.v-divider{
    background: #E9F2E9;
    height: 1rem;
    margin-bottom:1.5rem;
}
.flag-man-box{
    margin-top: 10rem;
}
.card{
    height: 391px;
    width:14rem;
    border-radius: 8px;
    background:#FFFFFF;
    margin-top:3.3rem;
    padding:1rem 1.5rem;
}
.easy-way-text{
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #0a1c44;
    margin-bottom:0.75rem;
}
.middle-text{
    font-size:0.75rem;
    font-weight: 325;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: #999999;
}

.flag-man{
    width: 100%;
    height: calc(100%-500px);
}

.get-btn{
    height: 39px!important;
    width:189px!important;
    border-radius: 8px;
    padding: 11px, 51px, 11px, 51px;
    color: #0a1c44;
    font-size:0.875rem!important;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;

}

</style>
