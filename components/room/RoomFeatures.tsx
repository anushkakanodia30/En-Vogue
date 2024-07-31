import { IRoom } from "@/backend/models/room";
import React from "react";

interface Props {
  room: IRoom;
}

const RoomFeatures = ({ room }: Props) => {
  return (
    <div className="features mt-5">
      <h3 className="mb-4">Other Details:</h3>
      <div className="room-feature">
        <i className="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
        <p>{room?.guestCapacity} Years of Experience</p>
      </div>
      <div className="room-feature">
        <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
        <p>{room?.numOfBeds}</p>
      </div>
      <div className="room-feature">
      {
            room?.isBreakfast 
              && <p>Computer Science</p>
          }
      </div>
      <div className="room-feature">
{
            room?.isInternet
            && <p>Mechanical</p>
          }
      </div>
      <div className="room-feature">
        {
            room?.isAirConditioned
            && <p>Banking and Finance</p>
          }
      </div>
      <div className="room-feature">
        {
            room?.isPetsAllowed
            && <p>Teaching</p>
          }
      </div>
      <div className="room-feature">
        {
            room?.isRoomCleaning
            && <p>Other</p>
          }
      </div>
    </div>
  );
};

export default RoomFeatures;
