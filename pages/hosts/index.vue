<template>
  <div>
    <h3>Hosts</h3>
    <ul>
      <li v-for="host in hosts" :key="host.id">
        {{ host.id }}: {{ host.hostname }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    hosts: {
      query: gql`
        {
          hosts {
            id
            hostname
          }
        }
      `,
      prefetch: true
    }
  },

  mounted() {
    // console.log(this)
  }
}
</script>
