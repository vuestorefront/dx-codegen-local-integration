/* eslint-disable @typescript-eslint/no-unused-vars */
import consola from "consola";
import { DummyIntegrationContext, TODO } from "../../types";

/**
 * Greets the integrator with a friendly message.
 *
 * @remarks
 * This is an example method that can be used as a starting point for creating new methods.
 *
 * @example
 * SDK usage:
 * ```ts
 * const result = await sdk.dummy.exampleMethod("test");
 * console.log(result); // { data: "Hello, Alokai Integrator!" }
 * ```
 */
export const exampleMethod = async (
  context: DummyIntegrationContext,
  params: TODO
) => {
  consola.log("exampleEndpoint has been called");

  // Example request could look like this:
  // return await context.client.get(`example-url?id=${params.id}`);
  return { data: "Hello, Alokai Integrator! You've hit the exampleMethod for a local integration." };
};
