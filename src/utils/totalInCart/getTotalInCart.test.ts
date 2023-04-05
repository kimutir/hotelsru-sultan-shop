import { CartListType } from "@store/reducers/reducerCart";
import getTotalIncart from "./getTotalInCart";

describe("getTotalInCart function", () => {
  it("returns {price:0, amount:0} with 0 items amount", () => {
    const emptyCart: CartListType = {};
    expect(
      getTotalIncart({
        cart: emptyCart,
      }),
    ).toEqual({
      price: 0,
      amount: 0,
    });
  });

  it("returns {price:number, amount:number} with items in cart", () => {
    const cart: CartListType = {
      1: {
        amount: 2,
        info: {
          brend: "test",
          code: "1",
          description: {
            big: "test",
            small: "test",
          },
          for: ["test"],
          img: "test",
          manufacturer: "test",
          price: 200,
          size: {
            type: "test",
            value: "test",
          },
          title: "test",
        },
      },
    };

    expect(getTotalIncart({ cart })).toEqual({ amount: 2, price: 400 });
  });
});
