import { Request, Response, NextFunction } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

import { FoodProvider } from "@providers/food.provider";

@Middleware({ type: "before" })
export class FoodMiddleware<T extends FoodProvider>
  implements ExpressMiddlewareInterface {
  constructor(protected foodProvider: T) {
    this.foodProvider = foodProvider;
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const response = await this.foodProvider.getIngredients(
      encodeURI(req.body.name)
    );
    next(response);
  }
}
