import { renderHook, waitFor, act } from "@testing-library/react";
import { ReactNode } from "react";
import { useCarMutations } from "./useCarMutations";
import { server } from "@/mocks/server";
import { db } from "@/mocks/db";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apollo";

const wrapper = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  server.resetHandlers();
  db.reset();
});
afterAll(() => server.close());

describe("useCarMutations", () => {
  it("creates a car", async () => {
    // Arrange
    const { result } = renderHook(() => useCarMutations(), { wrapper });
    const newCar = {
      make: "Test",
      model: "Car",
      year: 2025,
      color: "blue",
      mobile: "test-mobile",
      tablet: "test-tablet",
      desktop: "test-desktop",
    } as any;
    let res: any;

    // Act
    await act(async () => {
      res = await result.current.create(newCar);
    });

    // Assert
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(res?.data?.createCar).toBeDefined();
    expect(res?.data?.createCar.make).toBe("Test");
    expect(res?.data?.createCar.model).toBe("Car");
  });
});
