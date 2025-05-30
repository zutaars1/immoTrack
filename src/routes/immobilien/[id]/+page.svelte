<script>
  let { immobilie, vertraege } = $props();
</script>

<h1 class="mb-4">{immobilie.bezeichnung}</h1>

<div class="row">
  <div class="col-md-6">
    <h5>Immobiliendetails</h5>
    <ul class="list-group mb-4">
      <li class="list-group-item"><strong>Adresse:</strong> {immobilie.adresse}</li>
      <li class="list-group-item"><strong>Art:</strong> {immobilie.art}</li>
      <li class="list-group-item"><strong>Baujahr:</strong> {immobilie.baujahr}</li>
      <li class="list-group-item"><strong>Zimmer:</strong> {immobilie.zimmer}</li>
      <li class="list-group-item"><strong>Wohnfläche:</strong> {immobilie.wohnflaeche} m²</li>
    </ul>
  </div>

<div class="col-md-6">
    <h5>Vertrag</h5>
    {#if vertraege.length > 0}
      {#each vertraege as v}
        <ul class="list-group mb-3">
          <li class="list-group-item"><strong>Mieter: </strong>{v.name_mieter}</li>
          <li class="list-group-item"><strong>Startdatum: </strong>{v.startdatum}</li>
          <li class="list-group-item"><strong>E-Mail: </strong>{v.email}</li>
          <li class="list-group-item"><strong>Telefon: </strong>{v.telefonnummer}</li>
          <li class="list-group-item"><strong>Mietzins: </strong>{v.mietzins}</li>
        </ul>
      {/each}
    {:else}
      <p class="text-muted">Kein Vertrag vorhanden.</p>
    {/if}
  </div>
</div>
