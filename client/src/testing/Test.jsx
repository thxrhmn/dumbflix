import React, { useRef, useState } from 'react';

function Test() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted value: ${value}`);
    setValue('');
    inputRef.current.focus();

    setTimeout(() => {
      alert(null);
    }, 3000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a value:
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test;
