"use client";

import React from "react";
import { Card } from "src/shared/ui/card";
import { GeometryApiResponseModel } from "src/modules/geometry/schemas/geometry-schema";
import { Layout } from "@ui/layout";
import { useFetch } from "@hooks/useFetch";

export default function GeometryBody() {
  const { data, isLoading, error } = useFetch<GeometryApiResponseModel>({
    url: "/api/geometry",
    key: "geometry",
  });

  if (error) {
    return (
      <h2 className="py-20 text-xl font-bold">
        Sorry, we were unable to fetch the list of geometric shapes.
      </h2>
    );
  }

  if (isLoading) {
    return (
      <Layout.Grid>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Card.Loading key={index} />
          ))}
      </Layout.Grid>
    );
  }

  return (
    <Layout.Grid>
      {data?.data.map(({ route, image, title, description }, index) => (
        <Card.Root key={index} route={route}>
          <Card.OpacityImage image={image}>
            <Card.Text>{title}</Card.Text>
            <Card.Text className="inline lg:text-xl">{description}</Card.Text>
          </Card.OpacityImage>
          {[title, description].map((value, textindex) => (
            <Card.Text key={textindex} className="card-mobile-text">
              {value}
            </Card.Text>
          ))}
        </Card.Root>
      ))}
    </Layout.Grid>
  );
}
