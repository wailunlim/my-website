<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" class="mx-xl-3">About</b-nav-item>
          <b-nav-item to="/curriculum-vitae" class="mx-xl-3"
            >Curriculum vitae</b-nav-item
          >
          <b-nav-item to="" class="mx-xl-3" disabled>Blog</b-nav-item>
          <b-nav-item to="" class="mx-xl-3" disabled>Fun stuffs</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped></style>
