import { NextRequest } from "next/server";
import { GET_GEOMETRY_LIST } from "src/modules/geometry/api/get-geometry-list";

export async function GET(_: NextRequest) {
  return await GET_GEOMETRY_LIST();
}
