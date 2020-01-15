<template>
  <div class="home">
    <b-row>
      <b-col class="col-lg-6 col-12"><Hello /></b-col>
      <b-col class="col-lg-4 col-12 m-auto">
        <transition name="flip" mode="out-in"
          ><img
            class="img-fluid my-5"
            :src="require(`@/assets/portraits/${image}`)"
            alt="portrait"
            @click="showMainPortrait = !showMainPortrait"
            :key="image"/></transition
      ></b-col>
    </b-row>
  </div>
</template>

<script>
import Hello from "@/components/Hello.vue";

const mainPortrait = "portrait0.jpg";
const altPortrait = "portrait1.jpg";

export default {
  components: {
    Hello
  },
  data() {
    return {
      showMainPortrait: true
    };
  },
  computed: {
    image() {
      return this.showMainPortrait ? mainPortrait : altPortrait;
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: left;
}

img {
  border: 4px solid black;
  cursor: pointer;
}

.flip-enter {
  transform: scaleX(0);
}

.flip-enter-active {
  transition: all, 0.4s;
}

.flip-leave-active {
  transform: scaleX(0);
  transition: all, 0.4s;
}
</style>
