import React, { useState, useEffect } from "react";
import { userBookings } from "../utils/fetches";
export default function UserBookings() {
  const [userData, setUserData] = useState([]);
  const userId = "6175590a005c7e2ef4e5d480";

  useEffect(() => {
    fetchUserBooking();
  }, []);
  const fetchUserBooking = async () => {
    try {
      const resp = await userBookings(userId);
      if (resp) {
        setUserData(resp);
      }
    } catch (error) {}
  };
  return (
    <div>
      {/* {userData && <h3>You have {userData.bookings.length} booking</h3>} */}
      {userData &&
        userData?.bookings?.map((b) => (
          <h3>
            You have an appointment on {b.startDate} at {b.startTime}
          </h3>
        ))}
    </div>
  );
}
