<template>
    <div>
    </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
    export default {
        name:"dashboard",
        mixins:[general_mixin]
    }
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: auto;
}
a{
    text-decoration: none;
}
.credit-report{
    height:350px;
    width:100%;
    border-radius: 8px;
    background:#fff;
    padding:2rem;
    margin-top:1rem;
}
.image{
    width: 150px;
    height: 150px;
    margin:0 auto;
}
.credit-text{
    color: #c71f40;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:2rem;
}
.available-text{
    color: #999999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align:center;
    margin-top: 4rem;
}
.wrapper{
    height: 300px;
    width: 100%;
    border-radius: 8px;
    background: #fff;
}
.wrap{
    padding: 1.5rem 1.5rem 0 1.5rem;
}
.text-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
}
.bottom-text-box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    margin-top: -1.5rem;
    border-top: 1px solid hsla(0,0%,73.3%,.5568627450980392);
    border-bottom: 1px solid hsla(0,0%,73.3%,.5568627450980392);
    margin-top: 0.75rem;
}
.apply-btn{
    display:block;
    border: 1px solid #c71f40;
    color: #c71f40;
    border-radius: 6px;
    font-size:0.875rem!important;
    padding: 8px 54px!important;
    font-weight: 700;
    margin: 20px auto;
    transition: all .4s;
}
.apply-btn:hover{
    background: #c71f40!important;
    color: #fff!important;
}
.right-text{
    width: 50%;
    padding: 20px 19px;
    border-left: 1px solid hsla(0,0%,73.3%,.5568627450980392);
    width: 50%;
}
.equity-text{
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:#c71f40;
}
.v-avatar{
    height: 80px;
    width: 80px;
    border-radius: 100%;
}
small{
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    color: #999999;
}
.cash{
    font-size: 20px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.005em;
    text-align: left;
    color: #666666;
}
@media(max-width: 800px){
     .wrap{
    padding: 1.7rem 0.25rem 0  0.25rem;
    }

    .wrapper{
    width:100%;
    padding:0.15rem 0 0.15rem 0.35rem;
    }
    .bottom-text-box{
        padding:0px;
    }
    .right-text{
        padding: 10px;
    }
    .cash.naira{
        font-size:18px;
    }
    .credit-report{
        padding:3rem 2rem;
    }
}
</style>
