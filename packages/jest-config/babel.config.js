const babel1 = require('@babel/preset-env');
const babel2 = require('@babel/preset-typescript');
const babel3 = require('@babel/preset-react');
const babel4 = require('@babel/plugin-syntax-dynamic-import');
const PluginProposalClassProperties = require('@babel/plugin-proposal-class-properties');
const babel6 = require('@babel/plugin-proposal-object-rest-spread');
const babel7 = require('@babel/plugin-proposal-optional-chaining');

module.exports = {
  env: {
    test: {
      presets: [
        [babel1, { targets: { node: 'current' } }],
        [babel2],
        [babel3, { runtime: 'automatic' }],
      ],
      plugins: [babel4, PluginProposalClassProperties, babel6, babel7],
    },
  },
};
