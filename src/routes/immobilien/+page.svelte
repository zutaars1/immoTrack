<script>
  import ImmobilienCard from '$lib/components/ImmobilienCard.svelte';
  let { data } = $props();
</script> 

<a href="/" class="btn btn-secondary mb-2">← Zurück zur Startseite</a>

<h1 class="mb-4">Immobilienübersicht</h1>

<div class="row">
  {#each data.immobilien as immo}
    <div class="col-md-6 col-lg-4 mb-4">
      <ImmobilienCard immo={immo} />
    </div>
  {/each}
</div>
