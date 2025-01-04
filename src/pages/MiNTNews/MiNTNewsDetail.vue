<template>
  <div class="news-detail-container">
    <MiNTNewsDetailCom v-if="configData" :info="configData">
    </MiNTNewsDetailCom>
    <MiNTDivider :content="'+'"></MiNTDivider>
    <div class="more-dynamic">更多动态</div>
    <MiNTNewsListPreview
      class="news-preview"
      :filteredNews="newsList"
    ></MiNTNewsListPreview>
  </div>
</template>
  
  <script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import MiNTNewsDetailCom from "@/components/MiNTNews/MiNTNewsDetailCom.vue";
import MiNTNewsListPreview from "@/components/MiNTNews/MiNTNewsListPreview.vue";
import MiNTDivider from "@/components/Divider";
export default {
  components: {
    MiNTNewsDetailCom,
    MiNTNewsListPreview,
    MiNTDivider,
  },

  setup() {
    const route = useRoute();
    const configId = ref(route.params.configId); // 假设configId是从路由参数中获取的
    const configData = ref(null);
    const loading = ref(true);
    const error = ref(false);
    const errorMessage = ref("");
    const newsList = ref([]);

    async function loadConfigById(configIdValue) {
      try {
        const url = `/data/news_${configIdValue}.json`;
        const response = await axios.get(url);
        if (response.status === 200) {
          configData.value = response.data;
        } else {
          error.value = true;
          errorMessage.value = `Failed to load config with status code: ${response.status}`;
        }
      } catch (err) {
        error.value = true;
        errorMessage.value = `Error loading config: ${err.message}`;
      } finally {
        loading.value = false;
      }
    }

    async function fetchNewsData() {
      try {
        const response = await axios.get("/data/news_list.json");
        if (response.status === 200) {
          newsList.value = response.data;
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    }

    onMounted(() => {
      if (configId.value) {
        loadConfigById(configId.value);
        fetchNewsData();
      } else {
        console.warn("configId is not set");
      }
    });

    return {
      configData,
      loading,
      error,
      errorMessage,
      newsList,
    };
  },
};
</script>
  
  <style lang="scss" scoped>
.news-detail-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .more-dynamic {
    margin-top: 100px;
    font-size: 21px;
    color: #ffffff;
  }
  .news-preview {
    padding-top: 80px;
    padding-bottom: 300px;
    width: 82.5%;
  }
}
</style>