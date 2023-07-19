import { render } from 'react-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Root } from './Root';

const root = document.getElementById('root') as HTMLElement;

render(<Root />, root);
