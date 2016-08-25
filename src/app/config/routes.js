import Home from 'app/pages/Home'
import NotFound from 'app/pages/NotFound'

export const routes = {
  '/': Home,
  '/404': NotFound,
  '*': NotFound
}
