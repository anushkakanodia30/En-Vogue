"use client";

import React from "react";
import RoomItem from "./room/RoomItem";
import { IRoom } from "@/backend/models/room";
import CustomPagination from "./layout/CustomPagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Features from "./layout/Features";
import Footer from "./layout/Footer";
import AllJobs from "@/components/AllJobs";
import { useRouter } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}
const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const handleAllJobsClick = () => {
    const queryParams = new URLSearchParams();

    window.location.href = `/?${queryParams.toString()}`; // Using window.location.href to navigate
  };
    
    
  return (
    <div>
      <div style={{//backgroundImage: 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fopen-laptop-desk-job-search-title-screen_1163-2113.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.735520172.1710460800%26semt%3Dais&tbnid=lFOe47aj5BBZAM&vet=12ahUKEwjFup6knvqEAxU2oGMGHTBfDXAQMygtegUIARC5AQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fjob-portal&docid=9wpfYr_yWxdNjM&w=626&h=417&q=good%20and%20simple%20images%20to%20use%20as%20background%20images%20in%20home%20page%20of%20job%20portal&ved=2ahUKEwjFup6knvqEAxU2oGMGHTBfDXAQMygtegUIARC5AQ")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    }}>
        <div style={{    position: 'absolute',
    width: '100%',
    height: '95%',
    
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/diagonales-decalees.png")'
    // backgroundColor:'red',
    // opacity: 0.4,
    }}></div>

    
        <div className="px-4 py-5 text-center">
          <h1 className="display-5 fw-bold" style={{color:"#e61e4d"}}>En-Vogue</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 fw-bold" style={{ fontSize: "30px"}}>
            IT'S TIME TO CELEBRATE THE BEST EVENTS OF LIFE!
              
            </p>
            
            {/*<Link
             href="" // Update the route to the correct route where AllJobs component is rendered
             className="mt-3 btn btn-primary"
             style={{
               position: "absolute",
               left: "50%",
               transform: "translateX(-50%)",
               background: "white",
               color: "#e61e4d",
               border: "none", // Remove border
               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow effect
               fontSize: "20px"
             }}
>
  <strong>All Jobs</strong>
            </Link>*/}

            
            <button
              onClick={handleAllJobsClick}
              className="mt-3 btn btn-primary"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                background: "white",
                color: "#e61e4d",
                border: "none", // Remove border
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow effect
                fontSize: "20px",
              }}
            >
              <strong>All Events</strong>
            </button>

          </div>
        </div>
      </div>

      <Features />


    </div>
  );
};

export default Home;
