import {
	CANCEL_DISABLE_DATE,
	CHANGE_PASSWORD,
	CONFIRM_CANCEL_RESERVATION,
	CREATE_SERVICE,
	DELETE_SERVICE,
	DISABLE_DATE,
	EDIT_SERVICE,
	FORGOT_PASSWORD,
	GET_ALL_RESERVATIONS,
	GET_AVAILABLE_TIMES,
	GET_DISABLED_DATES,
	GET_RESERVATIONS_BY_DATE,
	GET_RESERVATIONS_BY_MAIL,
	GET_SERVICES,
	LOGIN,
	LOGOUT,
	NEW_RESERVATION,
	REGISTER,
	SEND_CANCEL_RESERVATION,
	UPDATE_STATE_RESERVATION,
} from "./actions-types.js";
export const initialState = {};

// biome-ignore lint: REDUCER
function rootReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER:
			return {
				...state,
			};
		default:
			return state;
	}
}

export default rootReducer;
