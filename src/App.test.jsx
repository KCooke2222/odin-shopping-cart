import { render, screen, within, cleanup } from "@testing-library/react";
afterEach(cleanup);
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function renderApp(route = "/") {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [
          { index: true, element: <Home /> },
          { path: "shop", element: <Shop /> },
          { path: "cart", element: <Cart /> },
        ],
      },
    ],
    { initialEntries: [route] },
  );

  render(<RouterProvider router={router} />);
}

// Test 1: incrementing + on a product increases its quantity display
test("increment button increases quantity", async () => {
  renderApp("/shop");
  const card = screen.getByText("Vintage Roadster").closest("div");

  const plusBtn = within(card).getByRole("button", { name: "+" });
  const qty = within(card).getByText("0");

  await userEvent.click(plusBtn);
  expect(qty).toHaveTextContent("1");
});

// Test 2: items added in shop appear in cart with correct quantities
test("cart reflects quantities from shop", async () => {
  renderApp("/shop");
  const card = screen.getByText("Vintage Roadster").closest("div");

  const plusBtn = within(card).getByRole("button", { name: "+" });
  await userEvent.click(plusBtn);

  await userEvent.click(screen.getByRole("link", { name: /cart/i }));
  const cartCard = screen.getByText("Vintage Roadster").closest("div");
  expect(within(cartCard).getByText("1")).toBeInTheDocument();
});

// Test 3: checkout clears the cart
test("checkout empties the cart", async () => {
  renderApp("/shop");
  const card = screen.getByText("Vintage Roadster").closest("div");

  const plusBtn = within(card).getByRole("button", { name: "+" });
  await userEvent.click(plusBtn);

  await userEvent.click(screen.getByRole("link", { name: /cart/i }));
  const checkoutBtn = screen.getByRole("button", { name: "Checkout" });

  await userEvent.click(checkoutBtn);
  await userEvent.click(screen.getByRole("button", { name: "Done" }));

  expect(screen.queryByText("Vintage Roadster")).not.toBeInTheDocument();
  expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
});
