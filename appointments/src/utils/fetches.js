const url = "http://localhost:3001/appointment";
const userUrl = "http://localhost:3001/users";

export const register = async (data) => {
  try {
    const response = await fetch(`${url}/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${apiKey}`,
      },
    });
    if (response) {
      const data = await response.json();
      return data;
    }
  } catch (error) {}
};
export const login = async () => {
  try {
    const response = await fetch(`${url}/login`);
    const data = await response.json();
    return data;
  } catch (error) {}
};
export const putAppointment = async (appointmentId) => {
  const resp = await fetch(`${url}/${appointmentId}`);
  if (resp) {
    const appData = await resp.json();
    console.log("appointment details", appData);
    return appData;
  }
};
export const postApp = async (appointmentId) => {
  try {
    const resp = await fetch(
      `${url}/6175590a005c7e2ef4e5d480/${appointmentId}`,
      {
        method: "POST",
      }
    );
    if (resp) {
      const data = await resp.json();
      console.log("post appp--->", data);
      return data;
    }
  } catch (error) {
    console.log("post error", error);
  }
};

export const userBookings = async (userId) => {
  try {
    const getUserBooking = await fetch(`${userUrl}/${userId}`);
    if (getUserBooking) {
      const data = await getUserBooking.json();
      console.log("user bookings......>", data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getUser = async () => {
  const resp = await fetch(`${userUrl}/6175590a005c7e2ef4e5d480`);
  if (resp) {
    const appData = await resp.json();
    return appData;
  } else {
    console.log("bad request");
  }
};
