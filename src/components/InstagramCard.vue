<template>
  
  <div class="card text-center">
  <div class="card-header">
    {{info.description}}
  </div>
  <div class="card-body p-0">
   <img :src="info.url" class="card-img-top">
  </div>
  <div class="card-footer text-body-secondary">
{{info.time}}  </div>
</div>
</template>

<script>
export default {
  props:["info"],
  name: 'InstagramCard',
  
}
</script>
