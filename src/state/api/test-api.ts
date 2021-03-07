
import qs from 'qs';


const _makeRequest = async (path = "aca pones ej /song/isjd1941", options: any, baseUrl = "aca metes la url de spotify") => {

    let opts = getPayload(options);
    if (opts.method === 'GET' && opts.params) {
      path += qs.stringify(opts.params, { addQueryPrefix: true });
    }
    const requestUrl = `${baseUrl}/api/${path}`;
  
    let response = await fetch(requestUrl, opts);
  

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response;
  };
  
  function getPayload(options: any) {
    // Stringify body option for fetch()
    const { body } = options;
    const isJson = Object.prototype.toString.call(body) === '[object Object]';
  
    let headers = isJson ? { 'Content-Type': 'application/json' } : {};
  

    // ACA VA EL AUTH
    // headers = Object.assign(headers, options.headers, {
    //   Authorization: getAuthorization()
    // });
  
    const extras = isJson ? { body: JSON.stringify(body) } : {};
    const result = Object.assign({}, options, { headers }, extras);
    //const result = Object.assign({}, options, { headers }, extras, { agent });
    //console.log(agent);
  
    return result;
  }
  
  // POST EXAMPLE
  export function POST(body: any) {
    return _makeRequest('/auth/google-token', {
      method: 'POST',
      body
    });
  }
  
  // put
  export function PUT(body: any) {
    return _makeRequest('/auth/refresh-token', {
      method: 'PUT',
      body
    });
  }
  
  // DELETE
  export function DELETE() {
    return _makeRequest('/auth/refresh-token', {
      method: 'DELETE'
    });
  }
  
  
  // GET
  export function GET(body: any) {
    return _makeRequest(`/mock?user=${body.email}`, {
      method: 'GET'
    });
  }
  
  