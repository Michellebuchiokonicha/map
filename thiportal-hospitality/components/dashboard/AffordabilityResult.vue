<template>
    <div>
    </div>
</template>
<script>
import general_mixin from '@/mixins/general_mixin'
export default {
    name:"AllApplications",
    mixins:[general_mixin],
    props:{
        info:{type:Object},

    },
    data(){
        return{
            search:'',
            status:'',
            from:'',



        }
    },
    computed:{
     
    }


}
</script>
<style lang="scss" scoped>
    .value{
      font-weight: 800;
    }
    .dotted{
        border:1px dashed $dashboard_color;
    }
</style>
