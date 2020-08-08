import React, { InputHTMLAttributes, useCallback } from 'react';

import { currency, number } from "./masks";

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  mask?: "currency" | "number";
  prefix?: string;
}

const Input:React.FC<InputProps> = ({ mask, name, label, prefix, ...rest }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "number") {
        number(e);
      }
    },
    [mask]
  );

  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} onKeyUp={handleKeyUp} {...rest} />
    </div>
  );
}

export default Input;