import { Action, ActionType, State } from "./../types/user";

export const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case ActionType.LOGIN:
			localStorage.setItem("user", JSON.stringify(action.payload.user));
			localStorage.setItem("token", JSON.stringify(action.payload.token));
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				token: action.payload.token,
			};
		case ActionType.LOGOUT:
			localStorage.clear();

			return {
				...state,
				isAuthenticated: false,
				user: null,
			};
		default:
			return state;
	}
};
