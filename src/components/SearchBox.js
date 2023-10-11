import React from "react";

function SearchBox(props) {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search....."
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
