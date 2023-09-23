// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// React-Query
import { QueryClient, QueryClientProvider } from 'react-query'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Globals Styles
import './index.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/home'
import LoginPage from './pages/login'
import UserPage from './pages/user'

// Query Client
const queryClient = new QueryClient()

// Render
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <React.StrictMode>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/user" element={<UserPage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </React.StrictMode>
        </Provider>
    </QueryClientProvider>
)
