import { useAntdConfig, useAntdConfigSetter } from '@umijs/max';
import { Layout, MappingAlgorithm, Space, Switch, theme, version } from 'antd';
const { darkAlgorithm, defaultAlgorithm } = theme;

export default function Page() {
  const setAntdConfig = useAntdConfigSetter();
  const antdConfig = useAntdConfig();
  console.log('antdConfig', antdConfig?.theme?.algorithm);
  return (
    <Layout>
      <h1>with antd@{version}</h1>
      <Space>
        isDarkTheme
        <Switch
          checked={antdConfig?.theme?.algorithm?.includes?.(defaultAlgorithm)}
          onChange={(data) => {
            console.log('onChange', data);
            // 此配置会与原配置深合并
            setAntdConfig({
              theme: {
                algorithm: [data ? darkAlgorithm : defaultAlgorithm],
              },
            });
            // or
            setAntdConfig((config) => {
              const algorithm = config.theme!.algorithm as MappingAlgorithm[];
              if (algorithm.includes(darkAlgorithm)) {
                config.theme!.algorithm = [defaultAlgorithm];
              } else {
                config.theme!.algorithm = [darkAlgorithm];
              }
              return config;
            });
          }}
        ></Switch>
      </Space>
    </Layout>
  );
}
