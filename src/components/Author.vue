<template>
  <div class="author content has-text-centered">
    <g-image
      alt="Author image"
      class="image"
      src="~/assets/images/author.jpg"
    />

    <h1 v-if="showTitle">
      {{ $static.metadata.siteName }}
    </h1>

    <p>A baseline Gridsome starter to get you going with Bulma.</p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
