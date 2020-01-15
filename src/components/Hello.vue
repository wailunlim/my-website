<template>
  <div class="info">
    <h1 class="mb-4"><b>Hello.</b></h1>
    <h2 class="mb-4"><b>My name is Wai Lun.</b></h2>
    <h3>
      I am a current third-year Computer Science student at the National
      University of Singapore. I am passionate about technology and I hope to
      one day contribute positively to the world through code.
    </h3>
    <br />
    <h3>
      I will soon be in <i>Munich, Germany</i> till end July for an internship
      as a software developer. There I hope to learn more about businesses on
      top of improving my technical skills. I also hope to improve my German and
      find time to travel around Europe.
    </h3>
    <br />
    <h3>
      Outside of programming I enjoy video games, TV shows and movies. I also
      play football and go for the occasional swim to keep fit.
    </h3>
  </div>
</template>

<script>
export default {
  name: "Hello"
};
</script>

<style scoped>
.info {
  margin: 5%;
  text-align: left;
}

h1 {
  font-size: 4.5em;
}

h2 {
  font-size: 2.2em;
}

h1,
h2,
h3 {
  line-height: 1.4;
}
</style>
