import { main } from "../lib/main.js";

// Verify `main` exits with an error when `owner` is set to an email address.
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
  console.error(error.message);
}
