import { AppState } from 'store/types';

export const selectSession = (appState: AppState) => appState.session;
