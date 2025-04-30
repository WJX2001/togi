import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router'
import Layout from './components/Common/Layout'
import Home from './components/Home'

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  )
}
