import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

// Mock fetch call
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          first_name: "Chase",
          last_name: "Allen",
          email: "chaseallen124@gmail.com",
          age: 25,
        },
        {
          first_name: "Alex",
          last_name: "James",
          email: "jamealex343@gmail.com",
          age: 30,
        },
      ]),
  })
);

test("renders student data in table", async () => {
  render(<App />);

  // Wait for the data to be fetched and rendered
  await waitFor(() => {
    expect(screen.getByText("Chase")).toBeTruthy();
  });

  // Check if the first student's data is displayed
  expect(screen.getByText("Chase")).toBeTruthy();
  expect(screen.getByText("Allen")).toBeTruthy();
  expect(screen.getByText("chaseallen124@gmail.com")).toBeTruthy();
  expect(screen.getByText("25")).toBeTruthy();

  // Check if the second student's data is displayed
  expect(screen.getByText("Alex")).toBeTruthy();
  expect(screen.getByText("jamealex343@gmail.com")).toBeTruthy();
  expect(screen.getByText("30")).toBeTruthy();
});
