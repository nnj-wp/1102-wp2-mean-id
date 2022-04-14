import { DIDPLAY_ALERT } from './action_51';

const reducer_51 = (state, action) => {
  if (action.type === DIDPLAY_ALERT) {
    return {
      ...state,
      showAlert: type,
      alertText: 'please provide all values',
      alertType: 'danger',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: '',
      alertType: '',
    };
  }

  throw new Error(`no such action ${action.type}`);
};

export default reducer_51;
