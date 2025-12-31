import { ApiResponse } from "@utils/api-response";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest) {
  try {
    return ApiResponse.ok("default response from route GET");
  } catch (err) {
    return ApiResponse.internalServerError(
      "failed to load data from route GET",
    );
  }
}
