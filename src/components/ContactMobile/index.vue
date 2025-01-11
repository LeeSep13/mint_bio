<template>
  <div class="contact">
    <el-popover placement="left-end" width="370" trigger="manual" :visible="visible" :show-arrow="false"
      popper-class="contact-popover-w" :popper-options="popperOptions">
      <div class="contact-popover">
        <div class="contact-popover-close" @click="visible = !visible">
          <img src="@/assets/images/close.png" alt="close" />
        </div>
        <div class="contact-popover-content">
          <div class="contact-popover-content-left">
            <p class="contact-popover-content-left-title">洽谈合作</p>
            <p class="contact-popover-content-left-tip">
              感谢您对元素驱动的关注，如您对生物智造产品 &
              <br />解决方案有兴趣或疑问，使用1分钟填写下方表格，<br />我们将尽快安排工作人员与您建联。
            </p>
            <div class="contact-popover-content-left-form">
              <div class="contact-popover-content-left-form-item">

                <div class="contact-popover-content-left-form-item-input">
                  <input type="text" placeholder="您的姓名..." />
                </div>

                <div class="contact-popover-content-left-form-item-input">
                  <input type="text" placeholder="您的邮箱..." />
                </div>

                <div class="contact-popover-content-left-form-item-input">
                  <input type="text" placeholder="您的电话..." />
                </div>

                <div class="contact-popover-content-left-form-item-input">
                  <input type="text" placeholder="您的留言...(请简单描述您的问题)" />
                </div>
              </div>
            </div>
          </div>
          <div class="contact-popover-content-connection">
            <p class="contact-popover-content-connection-title">
              您也可以通过以下渠道找到我们
            </p>
            <p class="contact-popover-content-connection-email">
              邮箱：mkt@mint-bio.com
            </p>
            <div class="contact-popover-content-connection-bottom">
              <img class="contact-popover-content-connection-qrcode" src="./images/QRcode.png" alt="QRcode" />
              <div class="bottom-right">
                <div>公司动向</div>
                <div>产品信息</div>
                <div>行业新闻</div>
                <div>前沿进展</div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <template #reference>
        <div class="contact-btn" @click="visible = !visible">
          <div class="contact-btn-icon">
            <img src="@/assets/images/contact.png" alt="contact" />
          </div>
        </div>
      </template>
    </el-popover>
    <div v-if="visible" class="contact-popover-overlay" @click="visible = false"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

const popperOptions = ref({
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [250, 0], // 控制水平和垂直偏移
      },
    },
  ],
});
</script>

<style lang="less">
@media (max-width: 992px) {
  .el-popper.el-popover.contact-popover-w {
    background-color: #12161b !important;
    border-radius: 20px;
    border: 1px solid transparent;
    left: 10px !important;
    height: calc(100vh - 150px);
  }

  .contact-popover {
    white-space: normal;

    &-close {
      text-align: right;

      img {
        width: 54px;
        height: 54px;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;


      &-left {
        width: 370px;

        &-title {
          margin-bottom: 15px;
          font-size: 17px;
          font-weight: 500;
          color: #f1f3f7;
        }

        &-tip {
          font-size: 13px;
          font-weight: 500;
          color: #F1F3F780;
        }

        &-form {
          margin-top: 25px;

          &-item {
            &-label {
              margin-top: 15px;
              font-size: 15px;
              color: #f1f3f766;
            }

            &-input {
              input {
                width: 100%;
                border: none;
                border-bottom: 0.5px solid #f1f3f733;
                background-color: transparent;
                padding-top: 15px;
                padding-bottom: 10px;
                outline: none;
              }

              input::placeholder {
                color: #F1F3F7CC;
                opacity: 1;
              }
            }
          }

          &-submit {
            display: flex;
            justify-content: center;
            margin-top: 65px;

            &-btn {
              width: 96px;
              height: 67px;
              line-height: 67px;
              text-align: center;
              color: #f1f3f7;
              border-radius: 999px;
              border: 1px solid #ffffff1a;
            }
          }
        }
      }



      &-connection {
        margin-top: 20px;
        color: #f1f3f7;

        &-title {
          font-size: 17px;
          font-weight: 500;
        }

        &-bottom {
          display: flex;
          justify-content: flex-start;
          gap: 5px;

          .bottom-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #F1F3F780;
          }
        }

        &-email {
          margin-top: 30px;
          margin-bottom: 30px;
          font-size: 15px;
          font-weight: 500;
        }

        &-qrcode {
          width: 100px;
          height: 100px;
          margin: 0;
        }

        &-desc {
          margin-top: 37px;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }

  }

  .contact-popover-overlay {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    /* Semi-transparent background */
    z-index: 9;
    /* Ensure it's above the page content but below the popover */
  }
}
</style>
<style lang="less" scoped>
.contact {
  position: fixed;
  right: 0.5%;
  top: 60%;
  z-index: 1000;

  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;
    position: relative;
    border-radius: 100px;
    background-color: #0a0b10b2;

    // transition: all 0.5s;
    &-icon {
      width: 24px;
      height: 24px;

      img {
        width: 100%;
      }
    }
  }

  &-btn::after,
  &-btn::before {
    content: "";
    position: absolute;
    border: 2px solid #808184;
    width: 100px;
    height: 80px;
    border-radius: 100px;
    /* 添加动画 */
    animation: ellipse-rotate 3s infinite linear;
  }

  @keyframes ellipse-rotate {

    0%,
    100% {
      clip-path: inset(0 0 65% 0);
    }

    25% {
      clip-path: inset(0 65% 0 0);
    }

    50% {
      clip-path: inset(65% 0 0 0);
    }

    75% {
      clip-path: inset(0 0 0 65%);
    }
  }
}
</style>