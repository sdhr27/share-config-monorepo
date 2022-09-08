const BabelPresetEnv = require('@babel/preset-env');
const BabelPresetTypescript = require('@babel/preset-typescript');
const BabelPresetReact = require('@babel/preset-react');
const BabelPluginSyntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import');
const BabelPluginProposalClassProperties = require('@babel/plugin-proposal-class-properties');
const BabelPluginProposalObjectResetSpread = require('@babel/plugin-proposal-object-rest-spread');
const BabelPluginProposalOptionalChaining = require('@babel/plugin-proposal-optional-chaining');

module.exports = {
  env: {
    test: {
      presets: [
        [BabelPresetEnv, { targets: { node: 'current' } }],
        [BabelPresetTypescript],
        [BabelPresetReact, { runtime: 'automatic' }],
      ],
      plugins: [
        BabelPluginSyntaxDynamicImport,
        BabelPluginProposalClassProperties,
        BabelPluginProposalObjectResetSpread,
        BabelPluginProposalOptionalChaining,
      ],
    },
  },
};
