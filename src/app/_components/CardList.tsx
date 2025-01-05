"use client";

import React from "react";
import { Card } from "@ui/card";
import { GeometryApiResponseModel } from "@models/geomtry-model";
import Grid from "@app/_components/Grid";
import { useApiFetchFromQuery } from "@hooks/useApiFetchFromQuery";

export default function GeometryList() {
  // const { data, isLoading, error } = useApiFetchFromSwr<GeometryApiResponseModel>({
  //   url: "/api/geometry",
  // });

  const { data, isLoading, error } =
    useApiFetchFromQuery<GeometryApiResponseModel>({
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
      <Grid>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Card.Loading key={index} />
          ))}
      </Grid>
    );
  }

  return (
    <Grid>
      {data?.data.map(({ route, image, title, description }, index) => (
        <Card.Root key={index} route={route}>
          <Card.OpacityImage image={image}>
            <Card.Text>{title}</Card.Text>
            <Card.Text className="inline lg:text-xl">{description}</Card.Text>
          </Card.OpacityImage>
          <Card.Text className="card-mobile-text">{title}</Card.Text>
          <Card.Text className="card-mobile-text">{description}</Card.Text>
        </Card.Root>
      ))}
    </Grid>
  );
}
