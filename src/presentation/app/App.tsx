import ListUsers from '@components/organisms/ListUsers';
import UserDetails from '@components/organisms/UserDetails';
import FavoriteUsers from '@components/organisms/FavoriteUsers';

import { AppContainer, AppContainerWrapper } from './styles';

function App() {
  return (
    <AppContainerWrapper>
      <AppContainer>
        <ListUsers />
        <UserDetails />
        <FavoriteUsers />
      </AppContainer>
    </AppContainerWrapper>
  );
}

export default App;
