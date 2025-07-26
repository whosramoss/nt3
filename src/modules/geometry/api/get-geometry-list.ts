import { geometryApiResponseSchema } from "src/modules/geometry/schemas/geometry-schema";
import { NextResponse } from "next/server";
import payload from "@server/payload.json";

export async function GET_GEOMETRY_LIST() {
  try {
    const { data, success, error } =
      geometryApiResponseSchema.safeParse(payload);

    if (!success) {
      console.error("[Validation Error]", error.issues);
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 },
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "failed to load data from route GET" },
      { status: 500 },
    );
  }
}
