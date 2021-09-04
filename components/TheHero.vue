<template>
  <div class="hero">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 65px);
  background: radial-gradient(
      78.5% 78.5% at 46.39% 21.5%,
      rgba(229, 243, 60, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      91.88% 91.88% at 44.88% 8.12%,
      rgba(255, 173, 189, 0.2) 53.65%,
      rgba(255, 173, 189, 0) 100%
    ),
    radial-gradient(
      45.77% 19% at 31.17% 42.02%,
      rgba(229, 243, 60, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  background-size: cover;
}
.container {
  position: absolute;
  margin-top: 65px;
}
</style>
