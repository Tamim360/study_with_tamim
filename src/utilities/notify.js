import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (msg) => toast.success(msg);