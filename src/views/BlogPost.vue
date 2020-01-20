<template>
  <div class="container my-5">
    <!-- only render if post is in -->
    <div v-if="Object.keys(post).length">
      <h1>{{ post.data.title }}</h1>
      <div v-html="post.data.body"></div>
    </div>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" @click="$router.go(-1)">Go back</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { butter } from "../buttercms.js";
export default {
  name: "blog-post",
  data() {
    return {
      post: {},
      meta: null
    };
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug).then(res => {
        this.post = res.data;
      });
    }
  },
  created() {
    this.getPost();
  }
};
</script>

<style scoped>
h1 {
  font-size: 4em;
}
</style>
