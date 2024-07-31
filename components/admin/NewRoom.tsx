"use client";

import { useNewRoomMutation } from "@/redux/api/roomApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ButtonLoader from "../layout/ButtonLoader";

const NewRoom = () => {
  const [roomDetails, setRoomDetails] = useState({
    name: "",
    price: 0,
    description: "",
    address: "",
    category: "King",
    guestCapacity: 1,
    numOfBeds: 1,
    internet: false,
    breakfast: false,
    airConditioned: false,
    petsAllowed: false,
    roomCleaning: false,
  });

  const {
    name,
    price,
    description,
    address,
    category,
    guestCapacity,
    numOfBeds,
    internet,
    breakfast,
    airConditioned,
    petsAllowed,
    roomCleaning,
  } = roomDetails;

  const router = useRouter();

  const [newRoom, { isLoading, error, isSuccess }] = useNewRoomMutation();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.push("/admin/rooms");
      toast.success("Room created");
    }
  }, [error, isSuccess]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const roomData = {
      name,
      pricePerNight: price,
      description,
      address,
      category,
      guestCapacity: Number(guestCapacity),
      numOfBeds: Number(numOfBeds),
      isInternet: internet,
      isBreakfast: breakfast,
      isAirConditioned: airConditioned,
      isPetsAllowed: petsAllowed,
      isRoomCleaning: roomCleaning,
    };

    newRoom(roomData);
  };

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setRoomDetails({
      ...roomDetails,
      [e.target.name]:
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value,
    });
  };

  const roomFeatures: { name: string; value: keyof typeof roomDetails }[] = [
    { name: "Computer Science", value: "internet" },
    { name: "Mechanical", value: "breakfast" },
    { name: "Banking and Finance", value: "airConditioned" },
    { name: "Teaching", value: "petsAllowed" },
    { name: "Other", value: "roomCleaning" },
  ];
  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-8">
        <form
          className="shadow rounded bg-body"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <h2 className="mb-4">New Event</h2>
          <div className="mb-3">
            <label htmlFor="name_field" className="form-label">
              Event Name
            </label>
            <input
              type="text"
              id="name_field"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price_field" className="form-label">
              Ticket Price
            </label>
            <input
              type="text"
              id="price_field"
              className="form-control"
              name="price"
              value={price}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description_field" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description_field"
              rows={8}
              name="description"
              value={description}
              onChange={onChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="address_field" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address_field"
              className="form-control"
              name="address"
              value={address}
              onChange={onChange}
              required
            />
          </div>

          
      

            
          

          

          

          <button
            type="submit"
            className="btn form-btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? <ButtonLoader /> : "CREATE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRoom;
