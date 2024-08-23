// "use client";

const InputSearchComponent = ({ setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <input type="text" onChange={handleInputChange} placeholder="search..." />
  );
};

export default InputSearchComponent;
