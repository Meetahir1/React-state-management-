import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import McqContext from './contexts/McqContext.jsx'

createRoot(document.getElementById('root')).render(
	<McqContext>
		<App />
	</McqContext>
)