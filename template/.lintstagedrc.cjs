'use strict';

module.exports = {
  '*.ts': 'tsc --noEmit',
  '*.{ts,cjs}': (files) => `eslint --cache ${files.join(' ')}`,
};
