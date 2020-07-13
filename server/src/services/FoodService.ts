import { Service, Inject } from "typedi";

@Service()
export default class FoodService {
  constructor(@Inject("foodModel") private foodModel) {}
}
