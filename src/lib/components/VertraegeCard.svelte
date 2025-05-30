<script>
  let { vertrag } = $props();
</script>

<div class="card shadow-sm h-100 d-flex flex-column">
  <div class="card-body d-flex flex-column justify-content-between">
    <div>
      <h5 class="card-title">{vertrag.name_mieter}</h5>
      <p class="card-text">
        <strong>Startdatum:</strong> {vertrag.startdatum}<br />
      </p>
    </div>

    <div class="mt-3">
      <a class="btn btn-outline-primary w-100" href={`/vertraege/${vertrag._id}`}>Details</a>
    </div>
  </div>
</div>
