exports.sendResponse = (res, status, success, message, data = null) => {
    res.status(status).json({ success, message, data });
  };
  