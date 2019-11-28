export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_DONE = 'SHOW_DONE'
export const SHOW_ALL = 'SHOW_ALL'

interface IShowActiveAction {
  type: typeof SHOW_ACTIVE
}

interface IShowDoneAction {
  type: typeof SHOW_DONE
}

interface IShowAllAction {
  type: typeof SHOW_ALL
}

export type FilterActionTypes = IShowActiveAction | IShowDoneAction | IShowAllAction
