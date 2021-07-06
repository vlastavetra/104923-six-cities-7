export const ActionType = {
  SET_LOCATION: 'main/setLocation',
  SET_SORT: 'main/setSort',
};

export const ActionCreator = {
  setLocation: (locationName) => ({
    type: ActionType.SET_LOCATION,
    payload: locationName,
  }),
  setSort: (sorting) => ({
    type: ActionType.SET_SORT,
    payload: sorting,
  }),
};
