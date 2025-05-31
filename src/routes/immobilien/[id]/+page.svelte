<script>
  let { data, form } = $props();
  let immobilie = data.immobilie;
  let vertrag = data.vertrag;
</script>

<a href="/immobilien" class="btn btn-secondary mb-2">← Zurück zur Immobilienübersicht</a>

<h1 class="mb-4">{immobilie.bezeichnung}</h1>

<div class="row">
  <!-- Immobiliendetails -->
  <div class="col-md-6">
    <div class="card mb-4">
      <div class="card-header">Immobiliendetails</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Adresse:</strong> {immobilie.adresse}</li>
        <li class="list-group-item"><strong>Art:</strong> {immobilie.art}</li>
        <li class="list-group-item"><strong>Baujahr:</strong> {immobilie.baujahr}</li>
        <li class="list-group-item"><strong>Zimmer:</strong> {immobilie.zimmer}</li>
        <li class="list-group-item"><strong>Wohnfläche:</strong> {immobilie.wohnflaeche} m²</li>
      </ul>
    </div>

    <!-- Formular update Immobilie -->
    <div class="card">
      <div class="card-header">Immobilie bearbeiten</div>
      <div class="card-body">

        {#if form?.success}
          <div class="alert alert-success" role="alert">
            Die Änderungen wurden erfolgreich gespeichert.
          </div>
        {/if}

        <form method="POST" action="?/update">
          <input type="hidden" name="id" value={immobilie._id} />

          <div class="mb-3">
            <label class="form-label" for="bezeichnung">Bezeichnung</label>
            <!--COPILOT VORSCHLAG: You need to associate the label with the input by adding a for attribute to the label and an id attribute to the input with the same value.-->
            <input id="bezeichnung" class="form-control" name="bezeichnung" type="text" value={immobilie.bezeichnung} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="adresse">Adresse</label>
            <input id="adresse" class="form-control" name="adresse" type="text" value={immobilie.adresse} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="art">Art</label>
            <input id="art" class="form-control" name="art" type="text" value={immobilie.art} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="baujahr">Baujahr</label>
            <input id="baujahr" class="form-control" name="baujahr" type="number" value={immobilie.baujahr} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="zimmer">Zimmer</label>
            <input id="zimmer" class="form-control" name="zimmer" type="number" step="0.5" value={immobilie.zimmer} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="wohnflaeche">Wohnfläche (m²)</label>
            <input id="wohnflaeche" class="form-control" name="wohnflaeche" type="number" step="0.1" value={immobilie.wohnflaeche} />
          </div>

          <button class="btn btn-primary" type="submit">Änderungen speichern</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Mieterdetails -->
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">Mieter</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Mieter:</strong> {vertrag.name_mieter}</li>
        <li class="list-group-item"><strong>Startdatum:</strong> {vertrag.startdatum}</li>
        <li class="list-group-item"><strong>E-Mail:</strong> {vertrag.email}</li>
        <li class="list-group-item"><strong>Telefon:</strong> {vertrag.telefonnummer}</li>
        <li class="list-group-item"><strong>Mietzins:</strong> {vertrag.mietzins}</li>
      </ul>
    </div>
  </div>
</div>
