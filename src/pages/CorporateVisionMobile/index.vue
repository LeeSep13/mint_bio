<template>
  <div class="corporate">
    <BannerTitleAnimationMobile :titleImage="require('@/assets/images/vision-title.png')"
      :backgroundImg="require('@/assets/images/corporateVision.png')" :isShowHeader="false" />
    <div class="introduction">
      <div class="introduction-section">
        元素驱动（MiNT
        BiO）是一家集技术研发、生产应用推广为一体的合成生物科技公司，由西湖大学张科春教授于2021年8月创办，总部位于浙江杭州。
      </div>
      <div class="introduction-section">
        公司配备世界领先的研发团队及行业顶级的产业化团队，从头设计创新型合成生物路径，以人工智能技术为辅助进行颠覆性源头创新，自研多个合成生物平台核心技术。目前，公司通过前沿技术赋能产业，主要聚焦无豆粕日粮和可降解生物材料领域。现有核心产品处于世界领先水平，已与行业龙头展开深度战略合作，并已布局万吨级规模化量产，真正实现从科研到产业的跨越，实现降本增效、绿色生产的生物“智造”。
      </div>
      <div class="introduction-section">
        作为西湖大学新质生产力培育平台重点支持项目，元素驱动充分发挥自研技术平台优势，践行“新质生产力”理念。未来，元素驱动将继续深耕合成生物创新研究与应用，用科技助力生物制造、能源环境、新型材料等领域的产业升级。同时，公司产品管线也将覆盖更多应用场景，将绿色经济拓展到食品原料、生物能源、美妆材料、汽车制造等行业，共同朝碳达峰、碳中和目标迈进，助力地球可持续发展。
      </div>
    </div>
    <div class="timeline">
      <div class="timeline-list">
        <div class="timeline-list-item" v-for="(item, index) in timeList" :key="index">
          <div class="timeline-list-item-time" :style="{ color: item.color, width: item.width }">
            {{ item.time }}
          </div>
          <div class="timeline-list-item-content" :style="{ color: item.color, width: item.width }">
            {{ item.content }}
          </div>
        </div>
      </div>

    </div>

    <div class="story  border-gradient">
      <div class="story-img-box">
        <div class="story-img-box-item">
          <img src="@/assets/images/story-1.png" alt="" />
          <div class="plus" @click="toggleStoryItem">+</div>
        </div>
        <div class="story-img-box-item">
          <img src="@/assets/images/story-2.png" />
          <div class="plus" @click="toggleStoryItem2">+</div>

        </div>

      </div>
      <div :class="{ 'visible': isStoryItemVisible, 'story-item border-gradient story-item-left': true }">
        <div class="close-icon" @click="toggleStoryItem">X</div>
        <div class="top">
          <div class="top-left">
            <img src="@/assets/images/story-1.png" alt="" />
          </div>
          <div class="top-right space-between">
            <div>
              <div class="margin-bottom">
                <p>张科春</p>
                <p>创始人&首席科学家</p>
              </div>
              <div class="margin-bottom">
                <p>西湖大学教授</p>
                <p>牧原实验室主任</p>
              </div>
            </div>

            <img src="@/assets/images/story-3.png" class="img-right" />
          </div>
        </div>
        <div class="bottom">
          创始人张科春教授本科毕业于中国科学技术大学，博士毕业于加州理工学院，从事合成生物相关研究20余年，具有独特的交叉学科研究背景。他开发了第一种可规模化生产的弹性生物降解高分子材料，创建了世界第一个可持续高分子研究中心并获得美国自然科学基金经费4000万美元的重点支持。研究成果2022年被选为美国推进生物制造的首批九个重点项目之一。2015年获得明尼苏达大学年轻教授的最高荣誉McKnight
          Land-Grant Professorship，2014 年获得University of Minnesota Innovator
          award.
          2019年，张科春教授选择归国，加入西湖大学创建生物制造和新材料实验室。
        </div>
      </div>

      <div :class="{ 'visible': isStoryItemVisible2, 'story-item border-gradient story-item-right': true }">

        <div class="close-icon" @click="toggleStoryItem2">X</div>
        <div class="top">
          <div class="top-left">
            <img src="@/assets/images/story-2.png" alt="" />
          </div>
          <div class="top-right">
            <div class="margin-bottom">
              <p>刘旻昊</p>
              <p>联合创始人&创始董事</p>
            </div>
            <div>
              <p>西湖大学教授</p>
              <p>西湖大学校长助理</p>
              <p>西湖大学董事会秘书</p>
              <p>西湖大学未来产业研究中心副主任</p>
              <p>新质生产力培育平台负责人</p>
              <p>杭州市西湖教育基金会副理事长</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <p>
            刘旻昊2011年毕业于英国帝国理工学院，获得生物物理博士学位，2012年回国后在清华大学从事博士后研究工作;2016年起任清华大学助理研究员，同时担任北京市结构生物学高精尖中心副主任、行政办公室主任。
          </p>
          <p>
            自2014年起，刘旻吴参与西湖大学筹办，先后或同时担任西湖大学筹委会办公室主任、西湖大学董事会秘书、西湖大学校长助理，西湖教育基金会创始秘书长、副理事长等职务。
          </p>
        </div>
      </div>
    </div>

    <div class="scientific mobile-sector border-gradient">
      <div class="scientific-title">
        <div>
          <span>前端</span><span class="orange-text">科研</span><span>攻坚</span>
        </div>
        <div class="scientific-title-middle">
          <p>从实验室走向生产线是合成生物行业必经之路</p>
          <p>迈向生物智造时代，元素驱动已做好准备。</p>
        </div>
        <div>
          <span>后端</span><span class="orange-text">落地</span><span>量产</span>
        </div>


      </div>
      <div class="scientific-card">
        <div class="scientific-card-left">
          <div class="scientific-card-left-item" @mousemove="itemMove(cardList[0])" @mouseleave="itemLeave(cardList[0])"
            :style="activeIndex === 0 ? ' background: #6a6a6a; opacity:0.6;' : ''
              ">
            <div class="top button-top">中心团队</div>
            <div class="middle">
              <img src="@/assets/images/number-1.png" alt="" />
            </div>
            <div class="bottom">承担前端科研、实验及小试。</div>
          </div>
          <div class="scientific-card-left-item" @mousemove="itemMove(cardList[1])"
            :style="activeIndex === 1 ? ' background: #6a6a6a;opacity:0.' : ''" @mouseleave="itemLeave(cardList[1])">
            <div class="top button-top">研发团队</div>
            <div class="middle">
              <img src="@/assets/images/number-2.png" alt="" />
            </div>
            <div class="bottom">跨科学人才合作，探索前沿技术。</div>
          </div>
        </div>
        <div class="scientific-card-right">
          <transition name="fade">
            <img :src="imgSrc" :key="imgSrc" />
          </transition>
        </div>
      </div>
    </div>

    <div class="project">
      <img src="@/assets/images/project.png" />
    </div>
    <div class="banner-sector">
      <img src="@/assets/images/banners.png" class="banner-img" />
    </div>
  </div>
</template>

<script>
import BannerTitleAnimationMobile from "@/components/BannerTitleAnimationMobile";
export default {
  name: " CorporateVision",
  components: { BannerTitleAnimationMobile },
  setup() {
    return { titleStyle: { top: "47%" } };
  },
  data() {
    return {
      isStoryItemVisible: false,
      isStoryItemVisible2: false,
      imgSrc: require("@/assets/images/scientific.png"),
      activeIndex: 0,
      timeList: [
        {
          time: "2021.08",
          content: "创办于杭州",
        },
        {
          time: "2022.09",
          content: "与牧原集团战略合作完成首批饲料添加氨基酸量产交付。",
        },
        {
          time: "2022.11",
          content: "与商汤科技达成战略合作推动AI+合成生物前沿创新。",
        },
        {
          time: "2022.12",
          content: "异亮氨酸和缬氨酸300吨量产水平转化工艺优化成熟。",
        },
        {
          time: "2023.02",
          content: "与牧原集团合资成立河南牧元安粮公司。",
        },
        {
          time: "2023.04",
          content: "首次入围杭州市准独角兽榜单。",
        },
        {
          time: "2023.06",
          content: "牧原实验室成立，创始人张科春担任主任，科研力度再加强。",
        },
        {
          time: "2023.12",
          content: "河南牧元安粮年产3万吨项目开工。",
        },
        {
          time: "2024.02",
          content:
            "与建德市签约年产15万吨元素新材料项目,打造生物降解材料全产业链标杆。",
        },
        {
          time: "2024.06",
          content: "建德元素智造项目开工，一期年产3万吨, 计划2025年底投产。",
        },
        {
          time: "迎接生物智造时代",
          content:
            "60%的物质生产可通过生物制造方式实现, 合成生物带来的经济价值可达万亿元规模。",
          color: "#00965A",
          width: "480px",
        },
      ],
      cardList: [
        {
          index: 0,
          textTop: "中心团队",
          textMiddle: require("@/assets/images/number-1.png"),
          textBottom: "承担前端科研、实验及小试。",
          imRight: require("@/assets/images/scientific.png"),
        },
        {
          index: 1,
          textTop: "中心团队",
          textMiddle: require("@/assets/images/number-1.png"),
          textBottom: "承担前端科研、实验及小试。",
          imRight: require("@/assets/images/scientific-2.png"),
        },
      ],
      isPrevDisabled: true,
      isNextDisabled: false,
      timelineElement: null,
    };
  },
  mounted() {
    this.timelineElement = document.querySelector(".timeline-list");
    this.timelineElement.addEventListener("scroll", this.handleScroll);
    this.updateButtonState();
  },
  beforeDestroy() {
    if (this.timelineElement) {
      this.timelineElement.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      this.updateButtonState();
    },
    updateButtonState() {
      if (!this.timelineElement) return;
      const { scrollLeft, scrollWidth, clientWidth } = this.timelineElement;
      this.isPrevDisabled = scrollLeft <= 0;
      this.isNextDisabled = scrollLeft + clientWidth >= scrollWidth;
    },
    scrollTimeline(direction) {
      if (!this.timelineElement) return;

      const scrollStep = 1200; // 每次滚动的距离
      if (direction === "prev") {
        this.timelineElement.scrollLeft -= scrollStep;
      } else if (direction === "next") {
        this.timelineElement.scrollLeft += scrollStep;
      }
      this.updateButtonState();
    },

    itemMove(item) {
      this.imgSrc = item.imRight;
      this.activeIndex = item.index;
    },
    itemLeave(item) {
      this.imgSrc = item.imRight;
      this.activeIndex = item.index;
    },
    toggleStoryItem() {
      this.isStoryItemVisible = !this.isStoryItemVisible;
    },
    toggleStoryItem2() {
      this.isStoryItemVisible2 = !this.isStoryItemVisible2;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/style/variable.less";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); // 使用更复杂的缓动函数
}

.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}

.corporate {
  background-color: #11161b;

  .introduction {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 30px 0;

    &-img {
      width: 100%;
      margin: 60px auto;
    }

    &-section {
      width: 100%;
      margin-bottom: 20px;
      font-family: MiSans VF;
      font-size: 14px;
      line-height: 22px;
      font-weight: 450;
      text-align: left;
      color: #fff;
    }
  }

  .timeline {
    position: relative;

    &-list {
      margin: 60px 0;
      color: #fff;
      display: flex;
      flex-shrink: 0;
      overflow: scroll;
      scroll-behavior: smooth;
      flex-direction: row;
      padding-left: 45px;
      padding-bottom: 40px;

      &::-webkit-scrollbar {
        display: none;
      }

      &-item {
        &-time {
          padding: 0 20px 20px;
          font-family: MiSans VF;
          font-size: 24px;
          font-weight: 450;
          text-align: left;
          border-bottom: 1px solid rgba(241, 243, 247, 0.4);
          width: 100%;
        }

        &-time:first-child {
          padding-left: 0;
        }

        &-content {
          padding: 20px 40px 60px 0;
          font-family: MiSans VF;
          font-size: 12px;
          font-weight: 520;
          text-align: left;
          line-height: 22px;
        }
      }
    }
  }

  .story {
    padding: 80px 10px 40px;
    height: 431px;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    position: relative;

    &-img-box {
      display: flex;
      justify-content: space-between;

      &-item {
        position: relative;
        width: 200px;
        height: 210px;
        border-radius: 8px;


        img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          object-fit: cover;
        }

        .plus {
          width: 31px;
          height: 31px;
          line-height: 31px;
          text-align: center;
          border-radius: 6px;
          background: #FF7200;
          position: absolute;
          right: 8px;
          bottom: 8px;
          font-size: 24px;
          color: #fff;
        }

      }


    }

    .margin-bottom {
      margin-bottom: 20px;
    }

    &-item {
      position: absolute;
      background: #24272a;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.3s ease-in-out; // 平滑过渡效果
      z-index: 999;
      padding: 20px;
      box-sizing: border-box;

      .close-icon {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 16px;
        font-weight: 400;
        color: white;
      }

      border-radius: 12px;
      margin: 10px;
      padding: 60px 20px;
      width: 100%;

      .top {
        height: 170px;
        display: flex;
        flex-direction: row;
        gap: 32px;
        margin-bottom: 40px;

        &-left {
          width: 30%;

          img {
            width: 100%;
            height: 150px;
            border-radius: 4px;
            object-fit: cover;
          }
        }

        &-right {
          height: 100%;
          width: 70%;
          font-size: 14px;
          padding: 10px 0;
          position: relative;

          .img-right {
            width: 120px;
            position: absolute;
            right: 20px;
            bottom: 20px;
          }
        }

        .space-between {
          justify-content: space-between;
        }
      }
    }

    .story-item-right {
      top: 0;
      right: -100%;
    }

    .story-item-left {
      top: 0;
      left: -100%;
    }

    .story-item-right.visible {
      right: 0;
      top: 0;
    }

    .story-item-left.visible {
      left: 0;
      top: 0;
    }
  }
}

.scientific {
  color: #fff;
  font-size: 25px;
  font-weight: 520;

  &-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    font-size: 25px;

    &-middle {
      margin: 20px auto;
      font-size: 12px;
      font-weight: 450;
      text-align: center;
      color: rgba(241, 243, 247, 0.5);
    }
  }

  &-card {
    height: 680px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 80px;

    &-left {
      width: 50%;
      width: calc(100% - 840px);
      display: flex;
      flex-direction: column;
      align-items: space-between;
      gap: 16px;
      height: 680px;

      &-item {
        transition: opacity 0.3s ease;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50%;
        padding: 32px;
        border-radius: 20px;
        background: rgba(40, 40, 40, 0.6226);
        border: 1px solid;
        border-image: linear-gradient(156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 39%,
            rgba(255, 255, 255, 0.0001) 54.33%,
            rgba(255, 255, 255, 0.1) 93.02%);

        img {
          height: 60px;
        }

        .button-top {
          border: 1px solid #fff;
          border-radius: 50px;
          width: 96px;
          height: 50px;
          text-align: center;
          line-height: 50px;
        }

        font-size: 14px;
      }
    }

    &-right {
      width: 824px;
      display: flex;
      flex-direction: row;
      overflow: hidden;

      img {
        height: 680px;
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
      }
    }
  }
}

.project {
  padding: 60px 10px;

  img {
    width: 100%;
  }
}

.banner-sector {
  padding: 60px 10px;

  img {
    width: 100%;
  }
}
</style>
