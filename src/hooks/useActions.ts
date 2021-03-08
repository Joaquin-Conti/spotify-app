import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginActionCreators, uiActionCreators, userDataActionCreators } from '../state';

// NEED REFACTOR
export const useLoginActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(loginActionCreators, dispatch);
};

export const useUserDataActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(userDataActionCreators, dispatch);
};

export const useUIDataActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(uiActionCreators, dispatch);
};