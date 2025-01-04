"use client";

import React from "react";
import { Card } from "@ui/card";
import { TGeometry } from "@models/GeometrySchema";
import Grid from "@app/_components/Grid";
import { useApiFetchFromQuery } from "@hooks/useApiFetchFromQuery";

export default function GeometryList() {

  // const { data, isLoading, error } = useApiFetchFromSwr<TGeometry[]>({
  //   url: "/api/geometry",
  // });

  const { data, isLoading, error } = useApiFetchFromQuery<TGeometry[]>({
    url: "/api/geometry",
    key: "geometry"
  });

  if (error) {
    return (
      <h2 className="py-20 text-xl font-bold">
        Sorry, we were unable to fetch the list of geometric shapes.
      </h2>
    )
  }

  if (isLoading) {
    return (
      <Grid>{Array(3).fill(0).map((_, index) => <Card.Loading key={index} />)}</Grid>
    )
  }

  return (
    <Grid>
      {data?.map((value, index) => (
        <Card.Root key={index} route={value.route}>
          <Card.OpacityImage image={value.image}>
            <Card.Text>
              {value.title}
            </Card.Text>
            <Card.Text className="inline lg:text-xl">
              {value.description}
            </Card.Text>
          </Card.OpacityImage>
          <Card.Text className="text-2xl md:hidden text-black">
            {value.title}
          </Card.Text>
          <Card.Text className="text-base md:hidden text-third">
            {value.description}
          </Card.Text>
        </Card.Root>
      ))}
    </Grid>
  )
}
