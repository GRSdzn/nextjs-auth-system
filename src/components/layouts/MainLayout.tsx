import { Header } from '../ui/';
import ReduxProvider from '../providers/ReduxProvider';
import { Setup } from '../utills';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <Setup />
      <Header />
      {children}
    </ReduxProvider>
  );
};

export default MainLayout;
