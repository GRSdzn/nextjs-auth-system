import { Header } from '@/components/ui';
import ReduxProvider from '../providers/ReduxProvider';
import { Setup } from '../utills';
import StyleLayout from './StyleLayout';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <Setup />
      <Header />
      <StyleLayout>{children}</StyleLayout>
    </ReduxProvider>
  );
};

export default MainLayout;
