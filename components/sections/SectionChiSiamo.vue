<template>
  <section class="section">
    <div class="chi-siamo container row">
      <div class="chi-siamo__cit">
        <div class="chi-siamo__triangle" />
        <h2 class="title chi-siamo__title">
          Lorem ipsum dolor sit amer.
        </h2>
      </div>
      <div class="chi-siamo__descrizione">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ipsum eget integer accumsan sodales. Mauris, malesuada sed consequat id non sollicitudin. Morbi amet imperdiet imperdiet mi vulputate proin quis volutpat quis. Facilisis sit sed fusce posuere semper morbi et. Mattis natoque feugiat pulvinar diam praesent aenean. Id mauris tristique aliquam odio dignissim adipiscing urna, eget non. Et nullam leo adipiscing sed ipsum pellentesque. Rhoncus vulputate adipiscing sit egestas interdum bibendum. Nam in in nisi a. Faucibus ac vestibulum aliquam urna, phasellus lectus risus nibh. Enim mattis fringilla ornare tellus integer aliquet vitae sed eu. Pretium magna ut ac cursus. Egestas enim aenean faucibus gravida urna lorem id adipiscing bibendum.
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.chi-siamo {
  flex-direction: column;

  @include for-desktop {
    flex-direction: row;
    align-items: center;

    & > * {
      width: calc(50% - calc(#{$gutter} / 2));
    }
  }

  &__triangle {
    display: inline-block;
    position: relative;
    left: 5%;
    bottom: 2.8rem;
    width: 10rem;
    height: calc(3 / 2 * 5rem);
    background-color: $lime;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: rotateZ(35deg);
  }
}
</style>
