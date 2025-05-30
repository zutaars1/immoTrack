<script>
  import "./style.css";
  let { children } = $props();
  import Navigation from '$lib/components/Navigation.svelte';
</script>


<div class="container py-4">
  <Navigation />
  <div class="content">
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
