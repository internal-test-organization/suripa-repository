const fs = require('fs')
  , path = require('path')
  , core = require('@actions/core')
  , json2csv = require('json2csv')
;
function saveIntermediateData(directory, data) {
  try {
    const file = path.join(directory, 'organization_removed_users.json');
    fs.writeFileSync(file, JSON.stringify(data));
    core.setOutput('report_json', file);
  } catch (err) {
    console.error(`Failed to save intermediate data: ${err}`);
  }
}
