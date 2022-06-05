import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDataByUserId } from "../../services";
import { UserData, UserDataInitializer } from "../interfaces";

export const useUserProfile = () => {
  const { id } = useParams();
  const userId = (): number => {
    if (id) return parseInt(id, 10);
    return 0;
  };

  const [userData, setUserData] = useState<UserData>(UserDataInitializer);

  // Gets user by id
  useEffect(() => {
    getDataByUserId(userId()).then((user) => {
      setUserData(user);
    });
  }, []);

  // If the user is a female, return "Ms.",
  // otherwise return "Mr."
  const formatGender = (gender: string) => {
    if (gender === "female") return "Ms.";
    return "Mr.";
  };

  // Formats the date to "Day Month DD YYYY"
  const formatDate = (rawDateFormat: string) => {
    const formattedDate = new Date(rawDateFormat.replace(" ", ""));
    return formattedDate.toDateString();
  };

  const processedUserData = {
    profile: {
      fullName: `${formatGender(userData.gender)} ${userData.lastName} ${
        userData.firstName
      }`,
      email: userData.email,
      age: `${userData.age} years old`,
      phoneNumber: userData.phone,
      registrationDate: formatDate(userData.registered),
    },
    address: {
      streetNumberAndName: `${userData.streetNumber} ${userData.street}`,
      zipCodeAndCity: `${userData.postalCode} ${userData.city.toUpperCase()}`,
    },
  };
  return { processedUserData };
};
