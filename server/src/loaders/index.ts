import expressLoader from "./express";
import typeormLoader from "./typeorm";

export default async ({ expressApp }: any) => {
  await expressLoader({ app: expressApp });

  await typeormLoader();
};
