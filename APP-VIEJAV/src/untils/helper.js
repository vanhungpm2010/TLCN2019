const getErrorMessage = (error, message = "Something went wrong!") => { 
  try {
    const result =
      error &&
      error.message &&
      typeof error.message === "string"
        ? error.message
        : message;
    return result;
  } catch (e) {
    return message;
  }
};

export { getErrorMessage };
