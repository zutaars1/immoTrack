<script>
  let { data } = $props();
</script>

<a href="/vertraege" class="btn btn-secondary mb-2">← Zurück zur Vertragsübersicht</a>

<div class="col-md-6">
    <h5>Vertrag</h5>
        <ul class="list-group mb-3">
          <li class="list-group-item"><strong>Mieter:</strong> {data.contract.name_mieter}</li>
          <li class="list-group-item"><strong>Startdatum:</strong> {data.contract.startdatum}</li>
          <li class="list-group-item"><strong>E-Mail:</strong> {data.contract.email}</li>
          <li class="list-group-item"><strong>Telefon:</strong> {data.contract.telefonnummer}</li>
          <li class="list-group-item"><strong>Mietzins:</strong> {data.contract.mietzins}</li>
        </ul>

      <p class="text-muted">Kein Vertrag vorhanden.</p>
</div>
