import React from "react";
import "./PrimaryButton.css";
export default function PrimaryButton({ children }) {
  return (
    <button>
      {children}
      <div class="arrow-wrapper">
        <div class="arrow"></div>
      </div>
    </button>
  );
}
