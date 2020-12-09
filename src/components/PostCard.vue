<template>
  <div class="card">
    <g-link
      v-if="post.cover_image"
      class="card-image"
      :to="post.path"
    >
      <figure class="image is-16by9">
        <g-image
          alt="Cover image"
          :src="post.cover_image"
        />
      </figure>
    </g-link>
    <div class="card-content">
      <g-link
        :to="post.path"
        class="is-size-4 has-text-weight-bold"
      >
        {{ post.title }}
      </g-link>
      <div
        class="content"
        v-html="post.description"
      />
      <PostMeta :post="post" />
    </div>
    <div
      v-if="post.tags"
      class="card-footer"
    >
      <PostTags
        class="card-footer-item"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta.vue';
import PostTags from '~/components/PostTags.vue';

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
