<template>
  <div class="author content has-text-centered">
    <g-image
      alt="Author image"
      class="image"
      src="~/assets/images/author.jpg"
    />

    <h1 v-if="showTitle">
      {{ $static.metaData.siteName }}
    </h1>

    <p>
      A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.
    </p>
  </div>
</template>

<static-query>
query {
  metaData {
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
