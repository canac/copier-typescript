'use strict';

function eslint(files) {
  return `eslint --cache ${files.join(' ')}`;
}

module.exports = {
  './*.cjs': (files) => eslint(files),
  'src/**/*.ts': (files) => ['tsc --noEmit', eslint(files)],
};
