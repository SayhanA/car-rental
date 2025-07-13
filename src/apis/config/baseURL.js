const baseURL =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "production" ? "http://localhost:5000" : "";

export default baseURL;
