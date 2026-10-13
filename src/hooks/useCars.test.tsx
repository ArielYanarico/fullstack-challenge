import { renderWithProviders, screen, waitFor } from "../test/renderWithProviders";
import { server } from "@/mocks/server";
import { db } from "@/mocks/db";
import { useCars } from "./useCars";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  server.resetHandlers();
  db.reset();
});
afterAll(() => server.close());

describe("useCars integration", () => {
  it("fetches cars from mock API", async () => {
    // Arrange
    function TestComponent() {
      const { loading, cars } = useCars({});
      if (loading) return <p>Loading…</p>;
      return <p>{cars.length} cars</p>;
    }

    // Act
    renderWithProviders(<TestComponent />); 

    // Assert
    await waitFor(() => expect(screen.getByText("6 cars")).toBeInTheDocument());
  });

  it("applies filters", async () => {
    // Arrange
    function Filtered() {
      const { loading, cars } = useCars({ model: "Q5" });
      if (loading) return <p>Loading…</p>;
      return <p>{cars.length} cars</p>;
    }

    // Act
    renderWithProviders(<Filtered />);

    // Assert
    await waitFor(() => expect(screen.getByText("1 cars")).toBeInTheDocument());
  });
});
