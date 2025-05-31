<script>
  let { data, form } = $props();
  let vertrag = data.contract;
</script>

<a href="/vertraege" class="btn btn-secondary mb-4">← Zurück zur Vertragsübersicht</a>

<div class="row">
  <!-- Vertragsdetails -->
  <div class="col-md-6">
    <div class="card mb-4">
      <div class="card-header">
        <strong>Vertrag – Details</strong>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Mieter:</strong> {vertrag.name_mieter}</li>
        <li class="list-group-item"><strong>Startdatum:</strong> {vertrag.startdatum}</li>
        <li class="list-group-item"><strong>E-Mail:</strong> {vertrag.email}</li>
        <li class="list-group-item"><strong>Telefon:</strong> {vertrag.telefonnummer}</li>
        <li class="list-group-item"><strong>Mietzins:</strong> {vertrag.mietzins}</li>
      </ul>
    </div>
  </div>

  <!-- Formular zur Bearbeitung -->
  <div class="col-md-6">
    <div class="card mb-4">
      <div class="card-header">
        Vertrag bearbeiten
      </div>
      <div class="card-body">

        {#if form?.success}
            <div class="alert alert-success" role="alert">
                Änderungen wurden erfolgreich gespeichert.
            </div>
        {/if}

        <form method="POST" action="?/update">
          <input type="hidden" name="id" value={vertrag._id} />

          <div class="mb-3">
            <label class="form-label" for="name_mieter">Mieter</label>
            <input id="name_mieter" class="form-control" name="name_mieter" type="text" value={vertrag.name_mieter} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="startdatum">Startdatum</label>
            <input id="startdatum" class="form-control" name="startdatum" type="date" value={vertrag.startdatum} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="email">E-Mail</label>
            <input id="email" class="form-control" name="email" type="email" value={vertrag.email} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="telefonnummer">Telefonnummer</label>
            <input id="telefonnummer" class="form-control" name="telefonnummer" type="text" value={vertrag.telefonnummer} />
          </div>

          <div class="mb-3">
            <label class="form-label" for="mietzins">Mietzins</label>
            <input id="mietzins" class="form-control" name="mietzins" type="text" value={vertrag.mietzins} />
          </div>

          <button type="submit" class="btn btn-primary">Änderungen speichern</button>
        </form>
      </div>
    </div>
  </div>
</div>
