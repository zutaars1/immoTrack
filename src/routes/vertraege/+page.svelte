<script>
  import VertraegeCard from '$lib/components/VertraegeCard.svelte';
  let { vertraege } = $props(); // muss von +page.server.js geliefert werden
</script>

<h1 class="mb-4">Alle Verträge</h1>

<div class="row">
  {#each vertraege as vertrag}
    <div class="col-md-6 col-lg-4 mb-4">
      <VertraegeCard vertrag={vertrag} />
    </div>
  {/each}
</div>
