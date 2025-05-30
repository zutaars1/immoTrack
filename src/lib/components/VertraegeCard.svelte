<script>
  let { vertrag } = $props();
</script>

<div class="card shadow-sm h-100">
  <div class="card-body">
    <h5 class="card-title">{vertrag.name_mieter}</h5>
    <p class="card-text">
      <strong>Startdatum:</strong> {vertrag.startdatum}<br />
      <strong>E-Mail:</strong> {vertrag.email}<br />
      <strong>Telefon:</strong> {vertrag.telefonnummer}<br />
      <strong>Mietzins:</strong> {vertrag.mietzins}<br />
    </p>
  </div>
</div>
