const core = require('@actions/core');

try {
  // Récupération des inputs
  const requestType = core.getInput('type', { required: false }) || 'GET';
  const url = core.getInput('url', { required: true });
  const headers = JSON.parse(core.getInput('headers', { required: false }) || '{}');
  const body = JSON.parse(core.getInput('body', { required: false }) || '{}');

  // Configuration de la requête HTTP
  const config = {
    method: requestType,
    url: url,
    headers: headers,
    data: body
  };

  /** Fetch */
  fetch(url, config)

} catch (error) {
  core.setFailed(error.message);
}
