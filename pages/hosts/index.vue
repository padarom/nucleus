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
import GetHostList from '~/queries/GetHostList.graphql'

export default {
  apollo: {
    hosts: {
      query: GetHostList,
      prefetch: true
    }
  }
}
</script>
