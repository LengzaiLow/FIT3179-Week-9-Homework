// Embed the Vega-Lite choropleth spec into the #choropleth div
// When running from a local file (file://) Vega's default data loader has trouble
// resolving relative paths. Specify a custom loader with a baseURL pointing to
// the current directory so that relative paths in the spec (e.g., data/ and js/)
// resolve correctly. See https://vega.github.io/vega/usage/#loading-data
const customLoader = vega.loader({ baseURL: './' });

vegaEmbed('#choropleth', 'js/gdp_choropleth.vg.json', {
  actions: false,
  loader: customLoader
})
  .then(function (result) {
    // Access the Vega view instance via result.view if needed
    // Indicate that the script ran by appending a status message below the chart
    const msg = document.createElement('p');
    msg.textContent = 'Vega-Lite map initialised.';
    msg.style.fontSize = '0.8rem';
    msg.style.color = '#888';
    document.body.appendChild(msg);
  })
  .catch(console.error);