import { useState } from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <TextField
        fullWidth
        label="Search courses..."
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBar;
