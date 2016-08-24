import * as types from 'store/constants/mutationTypes'

export const beginAjaxCall = ({ dispatch }) => {
  dispatch(types.BEGIN_AJAX_CALL)
}

export const ajaxCallSuccess = ({ dispatch }) => {
  dispatch(types.AJAX_CALL_SUCCESS)
}

export const ajaxCallError = ({ dispatch }) => {
  dispatch(types.AJAX_CALL_ERROR)
}
