<script>
  import ImmobilienCard from '$lib/components/ImmobilienCard.svelte';
  
  let { data } = $props();
  
 
  let immoArten = $derived.by(() => {
    if (!data?.immobilien) return [];
    const allArten = data.immobilien.map(immo => immo?.art).filter(Boolean);
    return ['Alle', ...new Set(allArten)]; // "Alle" als erste Option
  });
  
  let selectedArt = $state('Alle'); // Startwert
  
  // Gefilterte Immobilien
  let filteredImmos = $derived.by(() => {
    if (!data?.immobilien) return [];
    
    return selectedArt === 'Alle' 
      ? data.immobilien 
      : data.immobilien.filter(immo => immo?.art === selectedArt);
  });
</script>

<a href="/" class="btn btn-secondary mb-3">← Zurück zur Startseite</a>

<h1 class="mb-4">Immobilienübersicht</h1>

<!-- Dropdown-Filter -->
<!-- svelte-ignore a11y_label_has_associated_control (COPILOT VORSCHLAG UM GELBE UNTERSTREICHUNG ZU VERHINDERN)-->
<label class="form-label"><strong>Filtern nach Art:</strong></label>
<div class="mb-4" style="max-width: 300px;">
  <select bind:value={selectedArt} class="form-select">
    {#each immoArten as art}
      <option value={art}>{art}</option>
    {/each}
  </select>
</div>


{#if filteredImmos.length > 0}
  <p class="text-muted mb-1">
    {filteredImmos.length} {filteredImmos.length === 1 ? 'Immobilie' : 'Immobilien'}
    {selectedArt !== 'Alle' ? ` (Art: ${selectedArt})` : ''}
  </p>
  
  <div class="row">
    {#each filteredImmos as immo}
      <div class="col-md-6 col-lg-4 mb-4">
        <ImmobilienCard immo={immo} />
      </div>
    {/each}
  </div>
{:else}
  <div class="alert alert-warning">
    {data?.immobilien?.length > 0
      ? 'Keine Immobilien dieser Art vorhanden.'
      : 'Keine Immobilien geladen.'}
  </div>
{/if}