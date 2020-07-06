import swaggerJSDoc from "swagger-jsdoc";

export const swaggerDefinition = {
  swagger: "2,0",
  openapi: "3.0.0",
  info: {
    title: "PV_CALORIE",
    version: "1.0.0",
    description: "CALORIE & SUGAR API",
  },
  host: "localhost:8000",
  basePath: "/",
};

export const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ["../../api-docs.yaml"],
};

export const swaggerSpec = swaggerJSDoc(options);
