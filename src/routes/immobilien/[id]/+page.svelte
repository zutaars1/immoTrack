<script>
  let { data } = $props();
</script>

<a href="/immobilien" class="btn btn-secondary mb-2">← Zurück zur Immobilienübersicht</a>

<h1 class="mb-4">{data.immobilie.bezeichnung}</h1>

<div class="row">
  <div class="col-md-6">
    <h5>Immobiliendetails</h5>
    <ul class="list-group mb-4">
      <li class="list-group-item"><strong>Adresse:</strong> {data.immobilie.adresse}</li>
      <li class="list-group-item"><strong>Art:</strong> {data.immobilie.art}</li>
      <li class="list-group-item"><strong>Baujahr:</strong> {data.immobilie.baujahr}</li>
      <li class="list-group-item"><strong>Zimmer:</strong> {data.immobilie.zimmer}</li>
      <li class="list-group-item"><strong>Wohnfläche:</strong> {data.immobilie.wohnflaeche} m²</li>
    </ul>
  </div>

<div class="col-md-6">
    <h5>Vertrag</h5>
        <ul class="list-group mb-3">
          <li class="list-group-item"><strong>Mieter:</strong> {data.vertrag.name_mieter}</li>
          <li class="list-group-item"><strong>Startdatum:</strong> {data.vertrag.startdatum}</li>
          <li class="list-group-item"><strong>E-Mail:</strong> {data.vertrag.email}</li>
          <li class="list-group-item"><strong>Telefon:</strong> {data.vertrag.telefonnummer}</li>
          <li class="list-group-item"><strong>Mietzins:</strong> {data.vertrag.mietzins}</li>
        </ul>

      <p class="text-muted">Kein Vertrag vorhanden.</p>

  </div>
</div>
