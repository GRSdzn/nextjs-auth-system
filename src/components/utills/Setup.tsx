import { useVerify } from '@/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Setup() {
  useVerify();
  const clearWaitingQueue = () => {
    // Easy, right 😎
    toast.clearWaitingQueue();
  };
  return <ToastContainer draggable limit={3} />;
}
