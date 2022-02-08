import { Route, Switch } from 'react-router-dom';

import AllcharactersPage from './pages/AllCharacters';
import NewCharacterPage from './pages/NewCharacter';
import FavoritesPage from './pages/Favorites';
import Arena from './pages/Arena';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllcharactersPage />
        </Route>
        <Route path='/new-Character'>
          <NewCharacterPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/Arena'>
          <Arena />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
