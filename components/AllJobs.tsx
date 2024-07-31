"use client";

import React from "react";
import RoomItem from "@/components/room/RoomItem";
import { IRoom } from "@/backend/models/room";
import CustomPagination from "@/components/layout/CustomPagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}
const AllJobs = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const { rooms, resPerPage, filteredRoomsCount } = data;
  return (
    <div>

      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          {location
            ? `${filteredRoomsCount} events found in ${location}`
            : "All Events"}
        </h2>
        <div className="row mt-4">
          {rooms?.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Events.</b>
            </div>
          ) : (
            rooms?.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>

      <CustomPagination
        resPerPage={resPerPage}
        filteredRoomsCount={filteredRoomsCount}
      />

    </div>
  );
};

export default AllJobs;

