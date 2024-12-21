import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --color-red:#FF5656;
  --color-black:#494953; 
  --color-white:#fff;
  --color-gray:#D2D2D2;
  --color-grey-50:#f9fafb;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;
  --color-gray-background:#F9FAFB;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}
*:disabled {
  cursor: not-allowed;
}
select:disabled,
input:disabled {
  background-color: var(--color-grey-800);
  color: var(--color-grey-500);
}

body {
  font-family: 'Cairo', sans-serif;
  direction: rtl;
  background-color: var(--color-gray-background);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
}

/* Style Input Of react-phone-number-input */
.PhoneInput {
  direction: ltr;
}

.PhoneInput input {
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  padding: 0.5rem 1.2rem;
}



`;

export default GlobalStyles;

// @media (min-width: 576px) {
//   /* Small Devices => Landscape Phones */
//   .container {
//     max-width: 540px;
//   }
// }
// @media (min-width: 768px) {
//   /* Medium Devices => Tablets */
//   .container {
//     max-width: 720px;
//   }
// }
// @media (min-width: 929px) {
//   /* Large Devices => Desktops */
//   .container {
//     max-width: 960px;
//   }
// }
// @media (min-width: 1200px) {
//   /* Desktops */
//   .container {
//     max-width: 1140px;
//   }
// }
