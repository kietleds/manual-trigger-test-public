export default {
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Matches test files
  verbose: true, // Show detailed output,
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "reports", outputName: "junit.xml" }],
  ],
};
