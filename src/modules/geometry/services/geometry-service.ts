import { geometryApiResponseSchema as schema } from "src/modules/geometry/schemas/geometry-schema";
import payload from "src/modules/geometry/data/payload.json";
import { ApiResponse } from "@utils/api-response";

export class GeometryService {
  static types = [
    "box",
    "sphere",
    "cone",
    "cylinder",
    "ring",
    "icosahedron",
    "dodecahedron",
    "torus",
    "torusKnot",
  ] as const;

  static getGeometryTypes() {
    return this.types.map((type) => ({
      id: type,
    }));
  }

  static async getGeometryList() {
    try {
      const { data, success } = schema.safeParse(payload);

      if (!success) return ApiResponse.badRequest();

      return ApiResponse.ok(data);
    } catch (err) {
      return ApiResponse.internalServerError(
        "Failed to load list of geometric shapes",
      );
    }
  }
}
