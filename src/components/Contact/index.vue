<template>
  <div class="contact">
    <el-popover
      placement="left-end"
      width="1285"
      trigger="manual"
      :visible="visible"
      :show-arrow="false"
      popper-class="contact-popover-w"
    >
      <div class="contact-popover">
        <div class="contact-popover-close" @click="visible = !visible">
          <img src="@/assets/images/close.png" alt="close" />
        </div>
        <div class="contact-popover-content">
          <div class="contact-popover-content-left">
            <p class="contact-popover-content-left-title">洽谈合作</p>
            <p class="contact-popover-content-left-tip">
              感谢您对元素驱动的关注，如您对生物智造产品 &
              解决方案有兴趣或疑问，<br />使用1分钟填写下方表格，我们将尽快安排工作人员与您建联。
            </p>
            <div class="contact-popover-content-left-form">
              <div class="contact-popover-content-left-form-item">
                <div class="contact-popover-content-left-form-item-label">
                  姓名
                </div>
                <div class="contact-popover-content-left-form-item-input">
                  <input type="text" placeholder="您的姓名..." />
                </div>
                <div class="contact-popover-content-left-form-item-label">
                  邮箱
                </div>
                <div class="contact-popover-content-left-form-item-input">
                  <input type="text" placeholder="您的邮箱..." />
                </div>
                <div class="contact-popover-content-left-form-item-label">
                  电话
                </div>
                <div class="contact-popover-content-left-form-item-input">
                  <input type="text" placeholder="您的电话..." />
                </div>
                <div class="contact-popover-content-left-form-item-label">
                  请简单描述您的问题
                </div>
                <div class="contact-popover-content-left-form-item-input">
                  <input type="text" placeholder="您的留言..." />
                </div>
              </div>
              <!-- <div class="contact-popover-content-left-form-submit-w"> -->
              <div class="contact-popover-content-left-form-submit">
                <p class="contact-popover-content-left-form-submit-btn">提交</p>
              </div>
              <!-- </div> -->
            </div>
          </div>
          <div class="contact-popover-content-divider">
            <img src="./images/divider.png" alt="divider" />
          </div>
          <div class="contact-popover-content-connection">
            <p class="contact-popover-content-connection-title">
              您也可以通过以下渠道找到我们
            </p>
            <p class="contact-popover-content-connection-email">
              邮箱：mkt@mint-bio.com
            </p>
            <img
              class="contact-popover-content-connection-qrcode"
              src="./images/QRcode.png"
              alt="QRcode"
            />
            <p class="contact-popover-content-connection-desc">
              公司动向、产品信息、行业新闻、前沿进展
            </p>
          </div>
        </div>
      </div>
      <template #reference>
        <div class="contact-btn" @click="visible = !visible">
          <img src="@/assets/images/contact.png" alt="contact" />
        </div>
      </template>
    </el-popover>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
  
<style lang="less">
.el-popper.el-popover.contact-popover-w {
  margin-right: 2.5rem;
  padding: 24px 26px 95px 72px;
  background-color: #2828289f;
  border-radius: 20px;
  border: 1px solid transparent;
}
.contact-popover {
  &-close {
    text-align: right;
    img {
      width: 54px;
      height: 54px;
    }
  }
  &-content {
    display: flex;
    &-left {
      width: 560px;
      &-title {
        margin-bottom: 30px;
        font-size: 36px;
        font-weight: 500;
        color: #f1f3f7;
      }
      &-tip {
        font-size: 16px;
        font-weight: 500;
        color: #f1f3f7;
      }
      &-form {
        margin-top: 45px;
        &-item {
          &-label {
            margin-top: 35px;
            font-size: 16px;
            color: #f1f3f766;
          }
          &-input {
            input {
              width: 100%;
              color: #f1f3f7;
              background-color: transparent;
              border: none;
              border-bottom: 0.5px solid #f1f3f733;
              padding-top: 35px;
              padding-bottom: 10px;
              outline: none;
            }
            input::placeholder {
              color: #f1f3f7;
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
    &-divider {
      margin-left: 45px;
      margin-right: 69px;
      img {
        width: 16px;
      }
    }
    &-connection {
      color: #f1f3f7;

      &-title {
        font-size: 36px;
        font-weight: 500;
      }
      &-email {
        margin-top: 162px;
        margin-bottom: 66px;
        font-size: 24px;
        font-weight: 500;
      }
      &-qrcode {
        width: 122px;
        height: 123px;
      }
      &-desc {
        margin-top: 37px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
<style lang="less" scoped>
.contact {
  position: fixed;
  right: 20px;
  top: 904px;
  z-index: 1000;
}
</style>