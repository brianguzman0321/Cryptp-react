//import apis
import { getCurrencyLists } from 'apis';
import { toastr } from 'utils';

//get owner lists action
export const getCurrencyDetails = () => async dispatch => {
  const result = await getCurrencyLists();
  if (result.status === 200) {
    dispatch({ type: 'FETCHCURRENCYDETAILS', payload: result.data.details.data });
  } else {
    toastr.error(result.data.message);
  }
  return true;
};
