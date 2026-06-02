const notFoundHandler = (req, res) => {
  res
    .status(404)
    .json({ message: ` ${req.method} ${req.url} Route not found` });
};

export default notFoundHandler;
