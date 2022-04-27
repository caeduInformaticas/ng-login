export enum EERROR  {
    E1 = '0001',
    E2 = '0002'
}
export interface IERROR {
    type: EERROR;
    text: string;
}

const _callback = {
    utilError: (e: IERROR): string => {
        return `${e.type} - ${e.text}`;
    },
    error: {
        router: () => {
            return {
                type: EERROR.E2,
                text: 'cannot router'
            }
        },
        internal: () => {
            return {
                type: EERROR.E1,
                text: 'internal error'
            }
        }
    }
}
export interface ITYPEERROR {
    callback: (e: IERROR) => string;
    error: () => IERROR
}
export const _MAP_MESSAGES: Map<string, ITYPEERROR> = new Map();
_MAP_MESSAGES.set(EERROR.E1,{callback: _callback.utilError,error:_callback.error.internal});
_MAP_MESSAGES.set(EERROR.E2,{callback: _callback.utilError,error:_callback.error.router});