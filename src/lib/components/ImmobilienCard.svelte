<script>
  let { immo } = $props();
</script>

<div class="card h-100 d-flex flex-column">
  <img
    alt={immo.bezeichnung}
    src={`images/${immo.bezeichnung}.png`}
    class="card-img-top"
    style="object-fit: cover; height: 200px;"
  />

  <div class="card-body d-flex flex-column justify-content-between">
    <div>
      <h5 class="card-title">{immo.bezeichnung}</h5>
    </div>

    <div class="mt-auto">
      <a class="btn btn-outline-primary w-100" href={`/immobilien/${immo._id}`}>Details</a>
    </div>
  </div>
</div>
