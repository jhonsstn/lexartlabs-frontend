function generateId() {
  const randomString = () => {
    return Math.random().toString(36).substring(2, 6);
  };

  const id = `${randomString()}-${randomString()}-${randomString()}-${randomString()}`;

  return id;
}

const id = generateId();
console.log('ID Randomico: ' + id);
