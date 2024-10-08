import { AxiosInstance } from "axios";
import { IntegrationContext } from "@vue-storefront/middleware";
import { MiddlewareConfig, Endpoints } from "../index";

/**
 * Runtime integration context, which includes API client instance, settings, and endpoints that will be passed via middleware server.
 * */
export type DummyIntegrationContext = IntegrationContext<
  AxiosInstance,
  MiddlewareConfig,
  Endpoints
>;

/**
 * Global context of the application which includes runtime integration context.
 * */
export interface Context {
  $example: DummyIntegrationContext;
}
