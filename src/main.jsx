import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Login from './pages/Login.jsx'
import Students from './pages/Students.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import AnsKey from './pages/AnsKey.jsx'

const router = createBrowserRouter([
	{ path: '/', element: <Navigate to="/login" replace /> },
	{ path: '/login', element: <Login /> },
	{
		path: '/students',
		element: (
			<ProtectedRoute>
				<Students />
			</ProtectedRoute>
		),
	},
	{
		path: '/anskey/:enroll',
		element: (
			<ProtectedRoute>
				<AnsKey />
			</ProtectedRoute>
		),
	},
	{ path: '*', element: <Navigate to="/login" replace /> },
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
