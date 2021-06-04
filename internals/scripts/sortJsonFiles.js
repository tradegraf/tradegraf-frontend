const sortJson = require('sort-json');
const glob = require('glob');

const jsonFilePaths = glob.sync('./app/**/*.json');
sortJson.overwrite([...jsonFilePaths]);
// TODO: sort-json repo can be changed with something else
//  reason: sort-json does not provide areFilesSorted,
//  so we cannot exit before commit when some files need sort
