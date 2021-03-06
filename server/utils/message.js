const generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  }
};

const generateLocationMessage = (from, lat, lgt) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${lat},${lgt}`,
    createdAt: new Date().getTime()
  }
}

module.exports = {
  generateMessage,
  generateLocationMessage
}
