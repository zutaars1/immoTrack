<script>
  import VertraegeCard from '$lib/components/VertraegeCard.svelte';
  let { data } = $props();
</script>

<a href="/" class="btn btn-secondary mb-2">← Zurück zur Startseite</a>

<h1 class="mb-4">Alle Verträge</h1>

<div class="row">
  {#each data.vertraege as vertrag}
    <div class="col-md-6 col-lg-4 mb-4">
      <VertraegeCard vertrag={vertrag} />
    </div>
  {/each}
</div>
