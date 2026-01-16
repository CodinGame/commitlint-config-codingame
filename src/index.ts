import conventionalConfig from '@commitlint/config-conventional'
import releaseRules from '@codingame/semantic-release-rules'

const typeEnum = releaseRules.map((rule) => rule.type)

const config: typeof conventionalConfig = {
  ...conventionalConfig,
  rules: {
    ...conventionalConfig.rules,
    'type-enum': [2, 'always', typeEnum]
  }
}

export default config
