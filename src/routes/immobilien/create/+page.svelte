<script>
	let immobilie = $state({
		id: '',
		bezeichnung: '',
		adresse: '',
		baujahr: '',
		zimmer: '',
		wohnflaeche: '',
		art: '',
		bildUrl: ''
	});

	let { form, nextId } = $props();
	immobilie.id = nextId;
</script>

<h1>Neue Immobilie erfassen</h1>

<form method="POST" action="?/create">
	<!-- ID sichtbar, aber nicht bearbeitbar -->
	<div class="mb-3">
		<label class="form-label" for="immobilie-id">ID</label>
		<input id="immobilie-id" name="id" class="form-control" type="number" bind:value={immobilie.id} readonly />
	</div>

	<div class="mb-3">
		<label class="form-label" for="immobilie-bezeichnung">Bezeichnung</label>
		<input id="immobilie-bezeichnung" name="bezeichnung" class="form-control" type="text" bind:value={immobilie.bezeichnung} required />
	</div>

	<div class="mb-3">
		<label class="form-label" for="immobilie-adresse">Adresse</label>
		<input id="immobilie-adresse" name="adresse" class="form-control" type="text" bind:value={immobilie.adresse} required />
	</div>

	<div class="mb-3">
		<label class="form-label" for="immobilie-baujahr">Baujahr</label>
		<input id="immobilie-baujahr" name="baujahr" class="form-control" type="number" bind:value={immobilie.baujahr} required />
	</div>

	<div class="mb-3">
		<label class="form-label" for="immobilie-zimmer">Zimmer</label>
		<input id="immobilie-zimmer" name="zimmer" class="form-control" type="number" step="0.5" bind:value={immobilie.zimmer} required />
	</div>

	<div class="mb-3">
		<label class="form-label" for="immobilie-wohnflaeche">Wohnfläche (m²)</label>
		<input id="immobilie-wohnflaeche" name="wohnflaeche" class="form-control" type="number" bind:value={immobilie.wohnflaeche} required />
	</div>

	<div class="mb-3">
		<label class="form-label" for="immobilie-art">Art</label>
		<select id="immobilie-art" name="art" class="form-select" bind:value={immobilie.art} required>
			<option value="">Bitte wählen</option>
			<option value="Haus">Haus</option>
			<option value="Wohnung">Wohnung</option>
			<option value="Villa">Villa</option>
			<option value="Gewerberaum">Gewerberaum</option>
		</select>
	</div>

	<div class="mb-3">
		<label class="form-label" for="immobilie-bildUrl">Bild-URL</label>
		<input id="immobilie-bildUrl" name="bildUrl" class="form-control" type="url" bind:value={immobilie.bildUrl} />
	</div>

	<button class="btn btn-primary" type="submit">Speichern</button>
</form>

{#if form?.success}
	<div class="alert alert-success mt-3">Immobilie wurde erfolgreich gespeichert.</div>
{/if}
