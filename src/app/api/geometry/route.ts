import { NextRequest } from "next/server";
import { GeometryService } from "src/modules/geometry/services/geometry-service";

export async function GET(_: NextRequest) {
  return await GeometryService.getGeometryList();
}
