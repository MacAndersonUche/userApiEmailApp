export interface User {
	id: number;
	createdAt: Date;
	username: string;
	email: string;
	password: string;
}


export interface State {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

export enum ActionType {
	LOGIN = "LOGIN",
	LOGOUT = "LOGOUT",
}

export interface Action {
	type: string;
	payload: { user: User; token: string };
}
