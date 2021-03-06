
const fetch = require('node-fetch')


function check(url, invocationParameters,  expectedResultData, expectedResultStatus) {

  const checkResult = { // this is the object you need to set and return
      urlChecked: url,
      resultData: null,
      resultStatus: null,
      statusTestPassed: null,
      resultDataAsExpected: null
  }

/*creo uri di richiesta*/
  var uri = url +"?";
  for (let e of Object.keys(invocationParameters)) {
    uri = uri + e + "=" + invocationParameters[e] + "&";
  }
/**/

  uri = uri.substring(0, uri.length - 1);
  console.log(uri);


  return fetch(uri)
        .then(function(res) {
            return res.json();

        })
        .then(function(json){
          checkResult.resultDataAsExpected = compareResults(expectedResultData,json);
        });



}


// funzione che confronta due oggetti semplici e verifica se actual contiene tutti gli attributi di expected, e se per
// questi ha gli stessi valori
function compareResults(expected, actual) {
    if (!expected) return true //always ok if there are no expectations
    if (!actual) return false
    for (let e of Object.keys(expected)) {
        if (actual[e]===undefined || expected[e]!=actual[e]  ) return false
    }
    return true
}

module.exports = check
