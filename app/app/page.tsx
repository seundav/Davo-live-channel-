@import "tailwindcss";

:root {
  --background: #f5f7ff;
  --foreground: #172554;
  --blue: #2563eb;
  --purple: #7c3aed;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

button, input, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
