
  <template>
  <!--基础存放容器-->
  <div class="swiper-container">
    <!-- 需要进行轮播的部分 -->
    <div class="swiper-wrapper">
      <!-- 每个节点 -->
      <div class="swiper-slide">
        <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5563/banner8.png" alt="图片1" />
      </div>
      <div class="swiper-slide">
        <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5563/banner9.png" alt="图片2" />
      </div>
      <div class="swiper-slide">
        <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5563/banner7.png" alt="图片3" />
      </div>
    </div>

    <!--如果需要使用分页器-->
    <div class="swiper-pagination swiper-pagination-white"></div>

    <!-- 如果需要使用前进后退按钮 -->
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>
</template>



<script>
import swiper from "swiper";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        //设置轮播的循环方式
        loop: true,

        //设置自动播放间隔时间
        autoplay: 2000,

        // 轮播效果,默认为平滑轮播
        effect: "slide",

        //分页器
        pagination: ".swiper-pagination",

        //前进后退按钮
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",

        // 用户中断轮播后续播
        autoplayDisableOnInteraction: false,
      });
    },
  },
};
</script>


<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.css";
.swiper-container {
  width: 1000px;
  height: 650px;
  margin-top: 40px;
}

.swiper-slide img {
  width: 100%;
  object-fit: cover;
}
</style>
