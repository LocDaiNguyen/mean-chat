export interface UiState {
  userId: number;
  threadId: number;
  error?: string;
}

export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  threadId: undefined
};
