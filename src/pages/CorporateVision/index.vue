<template>
  <div class="corporate">
    <BannerTitleAnimation :titleImage="require('@/assets/images/vision-title.png')"
      :backgroundImg="require('@/assets/images/corporateVision.png')" />
    <div class="introduction">
      <img src="@/assets/images/introduction-title.png" alt="" class="introduction-img">
      <div class="introduction-section">
        元素驱动（MiNT BiO）是一家集技术研发、生产应用推广为一体的合成生物科技公司，由西湖大学张科春教授于2021年8月创办，总部位于浙江杭州。
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
          <div class="timeline-list-item-time">{{ item.time }}</div>
          <div class="timeline-list-item-content">{{ item.content }}</div>
        </div>
      </div>

      <div class="buttons">
        <div class="prev" :class="{ 'disabled': isPrevDisabled }" @click="scrollTimeline('prev')">
          &lt;
        </div>
        <div class="next" :class="{ 'disabled': isNextDisabled }" @click="scrollTimeline('next')"> &gt; </div>
      </div>

    </div>

    <div class="story sector border-gradient">
      <div class="story-item">
        <div class="top">
          <div class="top-left">
            <img src="@/assets/images/story-1.png" alt="">
          </div>
          <div class="top-right space-between">
            <div>
              <div class="margin-bottom">
                <p>张科春</p>
                <p> 创始人&首席科学家</p>
              </div>
              <div class="margin-bottom">
                <p>西湖大学教授</p>
                <p>牧原实验室主任</p>
              </div>
            </div>


            <img src="@/assets/images/story-3.png" class="img-right">
          </div>
        </div>
        <div class="bottom">
          创始人张科春教授本科毕业于中国科学技术大学，博士毕业于加州理工学院，从事合成生物相关研究20余年，具有独特的交叉学科研究背景。他开发了第一种可规模化生产的弹性生物降解高分子材料，创建了世界第一个可持续高分子研究中心并获得美国自然科学基金经费4000万美元的重点支持。研究成果2022年被选为美国推进生物制造的首批九个重点项目之一。2015年获得明尼苏达大学年轻教授的最高荣誉McKnight
          Land-Grant Professorship，2014 年获得University of Minnesota Innovator award.
          2019年，张科春教授选择归国，加入西湖大学创建生物制造和新材料实验室。
        </div>
      </div>

      <div class="story-item">
        <div class="top">
          <div class="top-left">
            <img src="@/assets/images/story-2.png" alt="">
          </div>
          <div class="top-right">
            <div class="margin-bottom">
              <p>刘旻昊</p>
              <p>联合创始人&创始董事</p>
            </div>
            <div>
              <p>西湖大学教授</p>
              <p>西湖大学校长助理</p>
              <p> 西湖大学董事会秘书</p>
              <p> 西湖大学未来产业研究中心副主任</p>
              <p> 新质生产力培育平台负责人</p>
              <p> 杭州市西湖教育基金会副理事长</p>
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

    <div class="scientific sector border-gradient">
      <div class="scientific-title">
        <div class="scientific-title-left">
          <div><span>前端</span><span class="opacity-0">科研</span><span>攻坚</span></div>
          <div><span class="opacity-0">前端</span><span class="orange-text">科研</span><span class="opacity-0">攻坚</span>
          </div>
        </div>
        <div class="scientific-title-middle">
          <p>从实验室走向生产线</p>
          <p>是合成生物行业必经之路</p>
          <p>迈向生物智造时代</p>
          <p>元素驱动已做好准备</p>
        </div>
        <div class="scientific-title-right">
          <div class="scientific-title-left">
            <div><span>后端</span><span class="opacity-0">落地</span><span>量产</span></div>
            <div><span class="opacity-0">后端</span><span class="orange-text">落地</span><span class="opacity-0">量产</span>
            </div>
          </div>

        </div>
      </div>
      <div class="scientific-card">
        <div class="scientific-card-left">
          <div class="scientific-card-left-item" @mousemove="itemMove(cardList[0])" @mouseleave="itemLeave(cardList[0])"
            :style="activeIndex === 0 ? 'opacity: 0.6;' : 'opacity: 1'">
            <div class="top">中心团队</div>
            <div class="middle"><img src="@/assets/images/number-1.png" alt=""></div>
            <div class="bottom">承担前端科研、实验及小试。</div>
          </div>
          <div class="scientific-card-left-item" @mousemove="itemMove(cardList[1])"
            :style="activeIndex === 1 ? 'opacity: 0.6;' : 'opacity: 1'" @mouseleave="itemLeave(cardList[1])">
            <div class="top">中心团队</div>
            <div class="middle"><img src="@/assets/images/number-1.png" alt=""></div>
            <div class="bottom">承担前端科研、实验及小试。</div>
          </div>
        </div>
        <div class="scientific-card-right">
          <transition name="fade">
            <img :src="imgSrc" :key="imgSrc">
          </transition>

        </div>
      </div>

    </div>

    <div class="project sector">
      <img src="@/assets/images/project.png">
    </div>
    <div class="banner sector border-gradient">
      <img src="@/assets/images/banners.png" class="banner-img">
    </div>

  </div>
</template>

<script>
import BannerTitleAnimation from '@/components/BannerTitleAnimation'
export default {
  name: " CorporateVision", components: { BannerTitleAnimation }, setup() { return { titleStyle: { top: '47%' } }; },
  data() {
    return {
      imgSrc: require('@/assets/images/scientific.png'), activeIndex: 0, timeList: [{
        time: '2021.08', content: '与牧原集团战略合作完成首批饲料添加氨基酸量产交付。'
      }, {
        time: '2021.09',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      }, {
        time: '2021.10',
        content: '与��原集团战略合作完成首批生物多功能��维（BFO）生物应用量产交付。'
      },],
      cardList: [{
        index: 0, textTop: '中心团队', textMiddle:
          require('@/assets/images/number-1.png'), textBottom: '承担前端科研、实验及小试。', imRight:
          require('@/assets/images/scientific.png'),
      }, {
        index: 1, textTop: '中心团队', textMiddle:
          require('@/assets/images/number-1.png'), textBottom: '承担前端科研、实验及小试。', imRight:
          require('@/assets/images/scientific-2.png'),
      }], isPrevDisabled: true, isNextDisabled: false,
      timelineElement: null,
    };
  }, mounted() {
    this.timelineElement = document.querySelector('.timeline-list');
    this.timelineElement.addEventListener('scroll', this.handleScroll); this.updateButtonState();
  },
  beforeDestroy() {
    if (this.timelineElement) {
      this.timelineElement.removeEventListener('scroll',
        this.handleScroll);
    }
  }, methods: {
    handleScroll() { this.updateButtonState(); }, updateButtonState() {
      if
        (!this.timelineElement) return; const { scrollLeft, scrollWidth, clientWidth } = this.timelineElement;
      this.isPrevDisabled = scrollLeft <= 0; this.isNextDisabled = scrollLeft + clientWidth >= scrollWidth;
    },
    scrollTimeline(direction) {
      if (!this.timelineElement) return;

      const scrollStep = 300; // 每次滚动的距离
      if (direction === 'prev') {
        this.timelineElement.scrollLeft -= scrollStep;
      } else if (direction === 'next') {
        this.timelineElement.scrollLeft += scrollStep;
      }
      this.updateButtonState();
    },

    itemMove(item) {
      this.imgSrc = item.imRight;
      this.activeIndex = item.index;
    },
    itemLeave(item) {
      this.imgSrc = item.imRight
      this.activeIndex = item.index
    }
  }
};
</script>
<style lang="less" scoped>
@import "@/style/variable.less";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  display: none;
}

.corporate {
  .introduction {
    padding: 100px 160px;

    &-img {
      width: 80%;
      margin: 80px auto;
    }

    &-section {
      margin-bottom: 16px;
      font-family: MiSans VF;
      font-size: 24px;
      font-weight: 450;
      line-height: 39px;
      text-align: left;
      color: #fff;
    }


  }

  .timeline {
    position: relative;

    .buttons {
      width: 104px;
      display: flex;
      justify-content: space-between;
      height: 22px;
      position: absolute;
      bottom: 0;
      right: 80px;

      div {
        width: 22px;
        height: 22px;
        border: 1px solid #fff;
        background: #595c5f;
        color: #FF7200;
        cursor: pointer;
        transition: background-color 0.3s;

        &.disabled {
          background: #ccc;
          color: #666;
          cursor: not-allowed;
        }
      }
    }

    &-list {
      margin: 100px 0;
      color: #fff;
      display: flex;
      flex-shrink: 0;
      overflow: scroll;
      scroll-behavior: smooth;
      flex-direction: row;
      padding-left: 60px;
      padding-bottom: 40px;

      &::-webkit-scrollbar {
        display: none;
      }

      &-item {

        &-time {
          padding: 0 60px;
          font-family: MiSans VF;
          font-size: 60px;
          font-weight: 450;
          text-align: left;
          border-bottom: 1px solid #fff;
          width: 100%;

        }

        &-time:first-child {
          padding-left: 0;
        }

        &-content {
          padding: 60px 80px 60px 0;
          font-family: MiSans VF;
          font-size: 20px;
          font-weight: 520;
          text-align: left;

        }



      }


    }
  }

  .story {
    display: flex;
    gap: 30px;
    font-family: MiSans VF;
    font-size: 24px;
    color: #fff;
    line-height: 32px;

    .margin-bottom {
      margin-bottom: 20px;
    }

    &-item {
      width: 50%;

      .top {
        height: 492px;
        display: flex;
        flex-direction: row;
        gap: 32px;
        margin-bottom: 40px;

        &-left {
          width: 50%;

          img {
            width: 100%;
            height: 492px;
            object-fit: cover;
            border-radius: 20px;
          }
        }

        &-right {
          display: flex;
          flex-direction: column;
          padding: 20px 0;

          .img-right {
            width: 98%;
          }
        }

        .space-between {
          justify-content: space-between;
        }
      }
    }
  }

  .scientific {
    color: #fff;
    font-family: MiSans VF;
    font-size: 60px;
    font-weight: 520;

    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;

      .opacity-0 {
        opacity: 0;
      }

      &-middle {
        font-family: MiSans VF;
        font-size: 17px;
        font-weight: 450;
        text-align: center;
        color: rgba(241, 243, 247, 0.5);
        height: 82px;
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
          border-image: linear-gradient(156.52deg, rgba(255, 255, 255, 0.4) 2.12%, rgba(255, 255, 255, 0.0001) 39%, rgba(255, 255, 255, 0.0001) 54.33%, rgba(255, 255, 255, 0.1) 93.02%);

          img {
            height: 60px;
          }

          font-size: 14px;
        }
      }

      &-right {
        width: 824px;

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
    img {
      width: 100%;
    }
  }

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
