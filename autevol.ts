interface Bangladesh {
  data: string;
}

const bangladesh: Bangladesh = {
  data: '12', // Storing number as a string to match the 'data' property type
};

// If you need to work with the value as a number, you can convert it when necessary
const numericData: number = parseInt(bangladesh.data);
