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

  // Envoi de la requête HTTP
  axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
  }).catch(function (error) {
    console.log(error);
  });

} catch (error) {
  core.setFailed(error.message);
}
