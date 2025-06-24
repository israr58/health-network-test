import React, { useState } from 'react';

export default function SearchBar({ onSearch, onClear }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
        gap: '10px',
      }}
    >
      <input
        type="text"
        placeholder="Search HCP by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px 15px',
          borderRadius: '25px',
          border: '1px solid #ccc',
          minWidth: '250px',
          fontSize: '16px',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          borderRadius: '25px',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        🔍 Search
      </button>
      <button
        type="button"
        onClick={handleClear}
        style={{
          padding: '10px 20px',
          borderRadius: '25px',
          border: '1px solid #ccc',
          backgroundColor: '#f8f9fa',
          color: '#333',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        ✖️ Clear
      </button>
    </form>
  );
}
