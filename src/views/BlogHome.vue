<template>
  <div class="container my-5">
    <div v-for="{ slug, title, summary } in posts" :key="slug">
      <article class="row">
        <router-link :to="'/blog-posts/' + slug" class="col-md-4"
          ><h2 class="text-info">{{ title }}</h2></router-link
        >
        <p class="col-md-8">
          <small>{{ summary }}</small>
        </p>
      </article>
      <hr />
    </div>
    <!-- pagination -->
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ 'cursor-disallow': !previousPage }">
          <a
            class="page-link"
            @click="
              !previousPage
                ? false
                : $router.push({
                    name: 'blog-page-view',
                    query: { page: previousPage }
                  })
            "
            >Previous</a
          >
        </li>
        <li class="page-item" :class="{ 'cursor-disallow': !nextPage }">
          <a
            class="page-link"
            @click="
              !nextPage
                ? false
                : $router.push({
                    name: 'blog-page-view',
                    query: { page: nextPage }
                  })
            "
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { butter } from "../buttercms.js";

export default {
  name: "BlogHome",
  data() {
    return {
      posts: [],
      meta: null
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: this.$route.query.page || 1,
          page_size: 2
        })
        .then(res => {
          this.posts = res.data.data;
          this.meta = res.data.meta;
        });
    }
  },
  computed: {
    previousPage() {
      if (!this.meta) return null;
      return this.meta.previous_page;
    },
    nextPage() {
      if (!this.meta) return null;
      return this.meta.next_page;
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style>
article {
  margin: 2.5%;
}

article a:hover {
  text-decoration: none;
  transform: scale(1.1);
  transition: transform 0.2s;
}

h2 {
  text-align: left;
}

.page-item {
  cursor: pointer;
}

.cursor-disallow {
  cursor: not-allowed;
}
</style>
