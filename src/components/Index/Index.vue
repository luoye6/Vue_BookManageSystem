<template>
  <div class="index">
    <swiperVue />
  </div>
</template>

<script>
import swiperVue from "../../components/Swiper/swiper.vue"
export default {
  name: "index",
  components:{
    swiperVue
  },
  created() {
      // const {data:res} = await this.$http.get('/user/test');
      // console.log(res);
    },

};
</script>
