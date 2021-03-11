import { useState } from "react";

export const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      setValue(e.target.value);
    };
    const clean = () => setValue(initialValue);
    return { value, onChange, clean };
  };
  