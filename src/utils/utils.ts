export const filterFetchedData = ({ fields }: { fields: string[] }) => {
  return (data: { [key: string]: any }[]) => {
    // Handle empty fields or invalid data gracefully
    if (!fields || !Array.isArray(fields) || !data || !Array.isArray(data)) {
      console.warn('Invalid fields or data provided to filterFetchedData.');
      return data; // Return original data if invalid
    }
    
    // Efficiently filter and create new objects with specified fields
    return data.map((item) => {
      const filteredObject: { [key: string]: any } = {};
      for (const field of fields) {
        if (item.hasOwnProperty(field)) {
          filteredObject[field] = item[field];
        }
      }
      return filteredObject;
    });
  };
};
