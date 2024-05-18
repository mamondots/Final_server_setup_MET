export type Guardian = {
  fatherName: string;
  MotherName: string;
  mobileNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  contactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  email: string;
  guardian: Guardian;
  presentAddress: string;
  permanentAddress: string;
};
