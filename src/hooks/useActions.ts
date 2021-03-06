import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginActionCreators, userDataActionCreators } from '../state';

// NEED REFACTOR
export const useLoginActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(loginActionCreators, dispatch);
};

export const useUserDataActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(userDataActionCreators, dispatch);
};