import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import Change from './change';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <Change></Change>
        <img
          src="https://test-btxy.oss-cn-beijing.aliyuncs.com/test.png"
          alt=""
        />
      </div>
    </PageContainer>
  );
};

export default HomePage;
