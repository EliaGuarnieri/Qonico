<template>
  <form
    class="form"
    :name="name"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input
      type="hidden"
      name="form-name"
      :value="name"
    >
    <slot class="form__content" />
    <div class="form__footer">
      <button
        class="button"
        type="submit"
      >
        Invia
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    handleSubmit () {
      const formData = new FormData({
        'form-name': this.name,
        ...this.form
      })
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: new URLSearchParams(formData).toString()
        // eslint-disable-next-line no-console
      }).then(() => console.log('Form successfully submitted')).catch(error =>
        alert(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-row-gap: 1.8rem;
  align-self: center;

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
.button {
  background-color: $blue;
  color: $white;
  border-radius: 3px;

  &:hover {
    background-color: $blue-dark;
  }
}
</style>
