export const ActionType = {
  SET_LOCATION: 'main/setLocation',
};

export const ActionCreator = {
  setLocation: (locationName) => ({
    type: ActionType.SET_LOCATION,
    payload: locationName,
  }),
};
