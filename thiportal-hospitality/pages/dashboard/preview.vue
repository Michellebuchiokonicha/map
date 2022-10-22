<template>
    <div>
      <breadcrumb page="My Profile">
            <template v-slot:right>

            </template>
        </breadcrumb>
          

           <preview-layout/>
    </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import file_upload_mixin from '@/mixins/file_upload_mixin'
import form_mixin from '@/mixins/form_mixin'
import FormBottom from '@/components/navigation/FormBottom.vue'
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
import ActionButton from '@/components/ActionButton.vue'
import PreviewLayout from '../../components/dashboard/mortgage/PreviewLayout.vue'

      export default {
        name:"mortgage",
        layout:'dashboard',
        components: { FormBottom,BottomNavigation,ActionButton,PreviewLayout},
        mixins:[general_mixin,form_mixin,file_upload_mixin],
        data(){
            return{
                search: '',
                show:false,
                current_file_name:'',
                apploading:false,
                form:{
                  filename:'',
                  filename_id:'',
                  is_uploaded:0,
                  resource_type:'',
                  id:''
                },
                active_file:''

            }
        },
          computed:{
            document(){
               let d = this.$store.state.dashboard.document_list;
        return d;
            }
          },
          methods:{
        submitForm(){
      //  return  this.$store.dispatch("profile/saveEmploymentInfoFormAction",this.form).then((res)=>{
      //       let main_form = this.$store.state.profile.profile;
      //        this.$store.dispatch("profile/savePersonalAndEmploymentDataAction",main_form).then((res)=>{
      //           this.appLoading(false);
      //          this.goNextStep(3);
      //           //  this.goNextFormStep('profiling/employment');
                  // this.$router.push('/profiling/upload')
      //        }).catch(err=>{
      //          let e = err.response.data;
      //           this.appLoading(false);
      //        })
      //     })

      },
            
            triggerUpload(item){
              this.active_file =item;
              let f = document.getElementById(item.id);
              f.click();

            },
            mapUploadResultToForm(cloud){
              this.form.filename = cloud.secure_url;
              this.form.filename_id = cloud.public_id;
              this.form.resource_type = cloud.resource_type;
              this.form.is_uploaded=1;
              this.form.id = this.active_file.id
            },
            addFile(file){
              this.current_file_name=file.name
              if(file.size > 1000000){
                this.$apptoast.error('file size should be less than 1 MB!')
                return ;
              }
              this.appLoading(true);
               console.log(file);

               let cloudname ='profiling_documents/'+ this.form.doc_value+'_'+this.form.user_id;
               this.uploadFileToCloudinary(file,cloudname).then((res)=>{
                 console.log(res);
                 this.mapUploadResultToForm(res);
                 this.$store.dispatch("dashboard/uploadDocumentAction",this.form).then(res=>{
                     this.appLoading(false);
                 })

               }).catch(err=>{
                 console.log(err);
                  this.appLoading(false);
               })
            },
            removeFile(item){
                this.form.is_uploaded=0;
                this.form.id = item.id;
                this.form.filename_id = item.filename_id
                this.form.filename = item.filename
                let ids = [];
                  ids.push(item.filename_id);
                // this.deleteFilesFromCloudinary(item.filename_id).then((res)=>{
                //  console.log(res);
                 this.$store.dispatch("dashboard/uploadDocumentAction",this.form).then(res=>{
                    //  this.appLoading(false);
                 }).catch(err=>{
                 console.log(err);
                  // this.appLoading(false);
               })

              //  }).catch(err=>{
              //    console.log(err);
              //     this.appLoading(false);
              //  })

            }
          },

          created(){
        

    },
    mounted(){
        this.$nuxt.$on('submit_profile_form',(param)=>{
        if(param){
          if(this.$refs.profileform){
             this.submitForm();
          }

        }
      })
    },
     unmounted() {
      this.$refs.profileform.reset();
    },

    }
</script>

<style lang="scss" scoped>

</style>

