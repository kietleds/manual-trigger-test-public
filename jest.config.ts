export default {
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Matches test files
  verbose: true, // Show detailed output,
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-reports", // Output directory for the XML report
        outputName: "junit-report.xml", // Name of the XML report file
      },
    ],
  ],
};
