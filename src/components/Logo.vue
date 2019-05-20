<template>
  <g-link
    class="navbar-item is-size-4 has-text-weight-bold"
    to="/"
  >
    {{ $static.metaData.siteName }}
  </g-link>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
