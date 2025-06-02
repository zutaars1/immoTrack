<script>
  import "./style.css";
  let { children } = $props();
</script>


<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4 border rounded px-3">
    <a class="navbar-brand fw-bold" href="/">immoTrack-Home</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/immobilien"><b>Immobilien</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/vertraege"><b>Verträge</b></a>
        </li>
      </ul>
    </div>
  </nav>
</div>


<div class="container py-4">
  <div class="content">
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
