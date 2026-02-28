import { main } from "../lib/main.js";

// Verify `main` throws an error when `owner` is set to an email address.
let didThrow = false;

try {
  await main(
    "123456",
    "private-key",
    "slav2.3py@outlook.com",
    [],
    undefined,
    {
      info: () => {},
      setSecret: () => {},
      setOutput: () => {},
      saveState: () => {},
    },
    () => {},
    () => {},
    false
  );
} catch (error) {
  didThrow = true;
  console.error(error.message);
}

if (!didThrow) {
  throw new Error("Expected an error when owner is an email address.");
}
