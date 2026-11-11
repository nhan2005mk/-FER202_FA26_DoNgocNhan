import { createAction } from '@reduxjs/toolkit';
import type { PersistedState } from './persist';

// Dispatch 1 lần sau khi mount, mỗi slice tự lấy phần dữ liệu của mình
export const hydrate = createAction<PersistedState>('app/hydrate');

