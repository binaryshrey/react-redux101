export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    console.log("get state from local storage");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
    console.log("set state in local storage");
  } catch (err) {
    // Ignore write errors.
  }
};
