<template>
  <div
    id="hero"
    class="hero"
  >
    <div class="container">
      <h1 class="title">
        Il Futuro<br> è oggi.
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  background: url("images/cool-background.svg");
  background-size: cover;
}
.container {
  position: absolute;
}
</style>
