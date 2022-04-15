import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingleRepository from './RepositoryList/SingleRepository';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppBar from './AppBar';
import Review from './Review';
import MyReviews from './MyReviews';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/:id' element={<SingleRepository />} exact />
        <Route path='/sign-in' element={<SignIn />} exact />
        <Route path='/sign-up' element={<SignUp />} exact />
        <Route path='/review' element={<Review />} exact />
        <Route path='/my-reviews' element={<MyReviews />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
