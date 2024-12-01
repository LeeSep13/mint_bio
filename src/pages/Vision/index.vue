<template>
  <div class="vision">
    <div class="vision-title">
      <img class="grid-image" src="@/assets/images/grid.png" alt="vision_grid" />
      <img class="mint-image" src="@/assets/images/mint.png" alt="vision_mint" />
      <p class="vision-title-text">与合作伙伴共担ESG责任</p>
    </div>
    <div class="vision-module1">
      <img src="./images/banner1.png" alt="vision_banner1" />
    </div>
    <div class="vision-module2">
      <div class="vision-module2-left">
        <p class="vision-module2-left-title">白色污染</p>
        <img
          class="vision-module2-left-img"
          src="./images/banner2_left.png"
          alt="vision_module2_left"
        />
        <ul class="vision-module2-left-text">
          <li>海洋飘浮着 5 亿+块不可降解的塑料垃圾</li>
          <li>每人每年吞入 5万+个微塑料颗粒=50+张信用卡</li>
        </ul>
      </div>
      <div class="vision-module2-right">
        <p class="vision-module2-right-title">资源枯竭</p>
        <img
          class="vision-module2-right-img"
          src="./images/banner2_right.png"
          alt="vision_module2_right"
        />
        <ul class="vision-module2-right-text">
          <li>地球土壤、土地和水资源状况持续恶化，均已“濒临极限”</li>
          <li>到2050年，难以满足将近100亿全球人口的粮食需求</li>
        </ul>
      </div>
    </div>
    <div class="vision-module3">
      <div class="vision-module3-title">
        <p class="vision-module3-title-text1">生物智造</p>
        <p class="vision-module3-title-text2">势在必行</p>
      </div>
      <div class="vision-module3-content">
        <div class="vision-module3-content-left">
          <p class="vision-module3-content-left-text">
            据世界经合组织 (OECD) 的案例分析表明，<br />生物技术的应用可以
          </p>
          <p class="vision-module3-content-left-more">了解更多</p>
          <div class="vision-module3-content-left-list">
            <img src="./images/banner3_list_info.png" alt="banner3_list_info" />
          </div>
        </div>
        <div class="vision-module3-content-right">
          <img src="./images/trend.png" alt="" />
        </div>
      </div>
    </div>
    <div class="vision-module4">
      <div class="vision-module4-w">
        <div class="vision-module4-top">
          <div class="vision-module4-top-title">
            <p class="vision-module4-top-title-text1">响应</p>
            <p class="vision-module4-top-title-text2">号召</p>
          </div>
          <div class="vision-module4-top-description">
            <img src="./images/semicolon_icon.png" alt="semicolon" />
            <p class="vision-module4-top-description-text">
              生物制造是我国新兴战略行业之一，<br />是创新、质优、高效能的新质生产力代表。
            </p>
          </div>
        </div>
        <div class="vision-module4-bottom">
          <div
            class="vision-module4-bottom-card"
            v-for="item in cardData"
            :key="item.key"
          >
            <img src="./images/book_icon.png" alt="book_icon" />
            <div class="vision-module4-bottom-card-content">
              <p class="vision-module4-bottom-card-content-text1">
                {{ item.title }}
              </p>
              <p class="vision-module4-bottom-card-content-text2">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vision-module5">
      <div class="vision-module5-title">
        <p class="vision-module5-title-text1">60%</p>
        <p class="vision-module5-title-text2">
          未来60%的物质<br />可以通过生物制造生产
        </p>
      </div>
      <div class="vision-module5-content">
        <div class="vision-module5-content-img1">
          <p class="vision-module5-content-img1-title">
            生物智造 [ 产品解决方案 ]
          </p>
          <p class="vision-module5-content-img1-desc">
            匹配元素驱动现有产品，并针对性您的应用领域针对性优化。
          </p>
        </div>
        <div class="vision-module5-content-img2">
          <div class="vision-module5-content-img2-item1">
            <p class="vision-module5-content-img2-item1-text">生物降解新材料</p>
            <p class="learn-more-btn">了解更多</p>
          </div>
          <div class="vision-module5-content-img2-item2">
            <p class="vision-module5-content-img2-item2-text">生物合成氨基酸</p>
            <p class="learn-more-btn">了解更多</p>
          </div>
        </div>
        <div class="vision-module5-content-img3">
          <p class="vision-module5-content-img3-title">
            生物智造 [ 定制解决方案 ]
          </p>
          <p class="vision-module5-content-img3-desc">
            元素驱动将针对您的需求，进行菌种定制、优化、产品延展等<br />生物智造全流程服务。
          </p>
          <p class="vision-module5-content-img3-btn">匹配顾问</p>
        </div>
        <div class="vision-module5-content-img4">
          <img src="./images/process.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Vision",
  components: {},
  data() {
    return {
      cardData: [
        {
          key: 0,
          title: "《“十四五”塑料污染治理行动方案》",
          content:
            "科学稳妥推广塑料替代产品。加大可降解塑料关键核心技术攻关和成果转化，不断提升产品质量和性能，降低应用成本。",
        },
        {
          key: 1,
          title: "《“十四五”生物经济发展规划》",
          content:
            "培育壮大生物经济支柱产业。加快生物技术广泛赋能健康、农业、能源、环保等产业，促进生物技术与信息技术深度融合，全面提升生物产业多样化水平，推动生物经济高质量发展。",
        },
        {
          key: 2,
          title: "《新产业标准化领航工程实施方案(2023-2035年)》",
          content:
            "聚焦元宇宙、脑机接口、量子信息、人形机器人、生成式人工智能、生物制造、未来显示、未来网络、新型储能等9大未来产业。",
        },
        {
          key: 3,
          title: "《加快非粮生物基材料创新发展三年行动方案》",
          content:
            "到 2025 年，非粮生物基材料产业基本形成自主创新能力强、产品体系不断丰富、绿色循环低碳的创新发展生态，非粮生物质原料利用和应用技术基本成熟，部分非粮生物基产品竞争力与化石基产品相当，高质量、可持续的供给和消费体系初步建立。",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.vision {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #11161b;
  &-title {
    width: 61.75rem;
    height: 29.25rem;
    line-height: 29.25rem;
    text-align: center;
    position: relative;
    &-text {
      font-size: 4.375rem;
      font-weight: 500;
      background: radial-gradient(
        123.44% 123.44% at 56.63% 100%,
        #ececee 6.77%,
        rgba(255, 255, 255, 0.45) 100%
      );
      background-clip: text;
      color: transparent;
      z-index: 1;
    }
    .grid-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 41.5625rem;
      height: 29.375rem;
      z-index: 0; /* 确保网格图在下面 */
    }

    .mint-image {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 61.75rem;
      height: 10.8125rem;
      z-index: 0; /* 确保Mint图在网格图下面 */
    }
  }
  &-module1 {
    margin-top: 5.4375rem;
    img {
      width: 89rem;
    }
  }
  &-module2 {
    display: flex;
    margin: 10.625rem 0 10.625rem 9.5rem;
    &-left-title,
    &-right-title {
      margin-bottom: 1.875rem;
      padding: 1.25rem;
      width: 3.5rem;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 6.25rem;
    }
    &-left-text,
    &-right-text {
      margin-top: 1.8125rem;
      margin-left: 0.9375rem;
      li {
        position: relative;
        font-size: 1.5rem;
        font-weight: 500;
        color: #fff;
        padding-left: 2rem;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background-color: #fff;
          border-radius: 50%;
        }

        &:not(:last-child) {
          margin-bottom: 1rem; /* 每项之间的间隔 */
        }
      }
    }
    &-left {
      margin-right: 1rem;
      &-img {
        width: 824px;
        height: 450px;
      }
    }
    &-right {
      &-img {
        width: 736px;
        height: 450px;
      }
    }
  }
  &-module3 {
    &-title {
      display: flex;
      gap: 1rem;
      &-text1,
      &-text2 {
        font-size: 3.75rem;
        font-weight: 500;
      }
      &-text1 {
        color: #ff7200;
      }
      &-text2 {
        color: #f1f3f7;
      }
    }
    &-content {
      display: flex;
      margin-top: 3.75rem;
      &-left {
        width: 524px;
        margin-right: 4.75rem;
        &-list {
          img {
            width: 532px;
            height: 418px;
          }
        }
        &-text {
          font-size: 1.5rem;
          color: #fff;
        }
        &-more {
          margin-top: 3.75rem;
          margin-bottom: 2.5rem;
          width: 7.75rem;
          height: 3.625rem;
          line-height: 3.625rem;
          text-align: center;
          font-size: 1rem;
          color: #fff;
          border-radius: 13.0625rem;
          border: 1px solid transparent;
          background-image: linear-gradient(#181a1d, #12161b),
            linear-gradient(
              156.52deg,
              rgba(255, 255, 255, 0.4) 2.12%,
              rgba(255, 255, 255, 0.0001) 60%,
              rgba(255, 255, 255, 0.0001) 54%,
              rgba(255, 255, 255, 0.1) 93.02%
            );
          background-origin: border-box;
          background-clip: content-box, border-box;
        }
      }
      &-right {
        img {
          width: 832px;
          height: 640px;
        }
      }
    }
  }
  &-module4 {
    margin-top: 10.625rem;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(
        to right,
        rgba(53, 52, 74, 1) 0%,
        rgba(53, 52, 74, 0.5) 33%,
        rgba(255, 255, 255, 1) 58%,
        rgba(255, 255, 255, 1) 60%,
        rgba(53, 52, 74, 0.5) 67%,
        rgba(53, 52, 74, 1) 100%
      )
      1;
    &-top {
      margin: 10.625rem 0 7.875rem 9.5rem;
      display: flex;
      &-title-text1,
      &-title-text2 {
        font-size: 3.75rem;
      }
      &-title {
        display: flex;
        &-text1 {
          color: #ff7200;
          margin-right: 1rem;
        }
        &-text2 {
          color: #f1f3f7;
        }
      }
      &-description {
        margin-left: 9.5rem;
        img {
          width: 2.875rem;
          height: 2.8125rem;
        }
        &-text {
          margin-left: 4.5rem;
          font-size: 24px;
          color: #fff;
        }
      }
    }
    &-bottom {
      margin-bottom: 10.625rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 0.875rem;
      &-card {
        display: flex;
        width: 44rem;
        height: 20.625rem;
        font-size: 1rem;
        color: #fff;
        border-radius: 1.25rem;
        border: 1px solid transparent;
        background-image: linear-gradient(#181a1d, #12161b),
          linear-gradient(
            156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 60%,
            rgba(255, 255, 255, 0.0001) 54%,
            rgba(255, 255, 255, 0.1) 93.02%
          );
        background-origin: border-box;
        background-clip: content-box, border-box;
        img {
          width: 2rem;
          height: 2.5rem;
          margin-top: 2.25rem;
          margin-left: 2.25rem;
        }
        &-content {
          margin-left: 2.0625rem;
          &-text1 {
            margin: 3rem 3.25rem 3.75rem 0;
            font-size: 1.5rem;
            font-weight: 500;
            color: #f1f3f7;
          }
          &-text2 {
            margin-right: 6.375rem;
            margin-bottom: 3.5rem;
            font-size: 1.25rem;
            color: #f1f3f7;
          }
        }
      }
    }
  }
  &-module5 {
    &-title {
      margin-top: 10.625rem;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      &-text1 {
        font-size: 12.5rem;
        font-weight: 500;
        color: #ff7200;
        line-height: 0.8;
        margin: 0;
      }
      &-text2 {
        font-size: 3rem;
        font-weight: 500;
        color: #f1f3f7;
        line-height: 1;
        margin: 0;
      }
    }
    &-content {
      margin-top: 10rem;
      margin-bottom: 10.625rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      column-gap: 1rem;
      row-gap: 6.25rem;
      &-img1,
      &-img3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 3.75rem;
        width: 944px;
        height: 460px;
        border-radius: 1.25rem;
        &-title {
          font-size: 1.875rem;
          font-weight: 500;
          color: #f1f3f7;
          margin-bottom: 2.5rem;
        }
        &-desc {
          font-size: 1.25rem;
          color: #f1f3f7;
        }
      }
      &-img1 {
        background: url("https://s3-alpha-sig.figma.com/img/c0f7/b496/7fe8994ebf060f1e6900ff576868c2f4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XqSf0~rJWuxvtx6935k-OG3E00dzm6xd1zrifsn~aOk1zhe-YUVx2PJKJB72YFOI1gvLaC5cw3D8kkxDol-gHlvTnrYTVEPwlMuL5cM7Eiy3lphyqSouoqgONWyKAb80FumIxLeDd~Bu0Ej6iy84kT1BKBh7iwdA0O226PT9XJKicqE2f9iM~L9uWFZ~N5Bbe1f8TwQSMgx7BoPstfBG1lBoT5SHG7dP2rz5REN7b6ixrrmcxcux6J60thixqfRz6KGHXylgtzkpDhu3GmUVHWwU1NMMhxdsRLZ~804UNsQfxzwCOxlKZuAjl-VozG6vdqUDRDbVeEOOCAT7ELIw4g__");
        background-size: cover;
        background-repeat: no-repeat;
      }
      &-img2 {
        &-item1,
        &-item2 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3.1875rem;
          border-radius: 1.25rem;
          &-text {
            font-size: 1.5rem;
            font-weight: 500;
            color: #fff;
          }
        }
        &-item1 {
          margin-bottom: 1rem;
          width: 464px;
          height: 222px;
          background: url("https://s3-alpha-sig.figma.com/img/4be7/4b07/3806fcc7d5bb5d541335afb18f7ecd96?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TFfNKqEqYW3WAlP9t0AHuexcTL5cD0KNE7WdBKjHmSk93mMOTpm9DQTkXaOrt4prcGfOP~8zh~fyRc~~pMgy5B6b7otdhQxKaBvIVq8RMq9cw2nLjd-2Mkqxk8QWgVHnX9wUmXxi7B1omnASRhP66Yf2CbKwRbwoQr1qSZ2fluc1ATHwes~c4XBmE8jM-XOU4kjHQqaQVw3X2qiTSntiFFd3XQ6Wzl24-trFcQ8RlAWy-hUVxnC5a3YVUJlJD2TsRihnbpSGeuSTiQ9uLepQg1pJ5cXuG8J558TUbIhuo5TknIryE~920IuG4CFo9dS9O-ORKiwx1bKeic8wg~GZOQ__");
          background-size: cover;
          background-repeat: no-repeat;
        }
        &-item2 {
          width: 464px;
          height: 222px;
          background: url("https://s3-alpha-sig.figma.com/img/3106/fe29/d57f2f5d48fc718d04be11725c94147d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cpMAT6MNMQKFbp4ITRMytXhsrhCH8xQEL3iQB4npjvCB7uan444ItmQiPe9pcOPRV1PP1L3oHB5iRCTUSkpb85f42XgvQkkfzrzAEBKEIPtw5enSZCMdPIM0eqFcvOT2o9cCPKrZfpbGLBMDavI6b4h8eUrVfLFPbauCTQTA4ME7C0Jng0f4SoN2lQEnkkR8WCSptZ3Knqu42o4oHNjI~Yg1PsIR-wFbeoDSJPypQt2UADml2O42hzV3ZWQQX~PyzAZkt-FntODIM1eq9yt00IjSexEoof9TISjx9OmwRc0vBg1IslxRzXY8R~7FCNzqLuDbBXo4Y3fnzzJIP48dHw__");
          background-size: cover;
          background-repeat: no-repeat;
        }
        .learn-more-btn {
          width: 6rem;
          height: 2.375rem;
          line-height: 2.375rem;
          text-align: center;
          font-size: .875rem;
          font-weight: 500;
          color: #f1f3f7;
          background-color: rgba(255, 114, 0, 0.8);
          border-radius: 13.0625rem;
        }
      }
      &-img3 {
        background: url("https://s3-alpha-sig.figma.com/img/cdcc/d8cd/4480e0f4dc2b4f560139f9ebe59dd9d1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6eXRIrMwMOs2g~PyCeH~6gpL1Kl9q2unSvy1TJM5h-d7q6QTNK2rTe0USvmtVlRwkmW2lmU44PRmc2M5t~PZ6ODYEfaB45DsiQcAmk4FAXjcQVC8hNwtbZiAjCgYpI-WYBFBa8DIanqXSZ7cYzDnJVszm4K59AOJKhWmlQB-u9rI2iRRvIJKIl4kb9YMGBZKHCGq~jeup4cOVFduQ5egHCqaQCxM0t2a~G2QRAhoeM61eFIdRUjE4i7WTVA6GgHZ4nYeUl4wLz-1EtNrnUD3HSDZx05Z0Bg~gtMTVFHLiEFO6P~OeZ6LJmDGRHPXZhNWNb4C398fVdUftTFk8BU6w__");
        background-size: cover;
        background-repeat: no-repeat;
        &-btn {
          margin-top: 5.4375rem;
          width: 7.75rem;
          height: 3.625rem;
          line-height: 3.625rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 500;
          color: #f1f3f7;
          background-color: rgba(40, 40, 40, 0.62);
          border-radius: 13.0625rem;
        }
      }
      &-img4{
        img{
          width: 464px;
          height: 460px;
        }
      }
    }
  }
}
</style>