export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  age: number;
  phone: string;
  registered: string;
  streetNumber: number;
  street: string;
  postalCode: number;
  city: string;
}

export const UserDataInitializer = {
  id: 0,
  firstName: "John",
  lastName: "Doe",
  gender: "male",
  email: "johndoe@mail.com",
  age: 39,
  phone: "+1 (967) 555-3994",
  registered: "2022-05-12T03:29:35 -02:00",
  streetNumber: 632,
  street: "Pulaski Street",
  postalCode: 94176,
  city: "Davenport",
};
