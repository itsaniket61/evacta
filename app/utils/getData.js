const BASE_URL =
  'https://script.google.com/macros/s/AKfycbybhaNkBNvXqHciQZ5Sv4xOwVGnxZo-jW53jitUZzjQesQYoHIzjvpHPqlJPAum_xEy5g/exec?api=';

// Generic fetch wrapper with error handling
const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, {redirect: 'follow', ...options});
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data.data || data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Get all records or single record by ID
const getData = async (sheetName, id = null) => {
  const url = id
    ? `${BASE_URL}${sheetName}&id=${id}`
    : `${BASE_URL}${sheetName}`;

  return fetchData(url);
};

// Create new record
const createData = async (sheetName, data) => {
  const url = `${BASE_URL}${sheetName}`;

  const options = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetchData(url, options);
};

// Update existing record
const updateData = async (sheetName, data) => {
  const url = `${BASE_URL}${sheetName}`;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetchData(url, options);
};

// Delete record
const deleteData = async (sheetName, id) => {
  const url = `${BASE_URL}${sheetName}&id=${id}`;

  const options = {
    method: 'DELETE',
  };

  return fetchData(url, options);
};

export { getData, createData, updateData, deleteData };
