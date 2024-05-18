import { Schema, model, connect } from 'mongoose';
import { Guardian, Student } from './student.interface';

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  MotherName: { type: String },
  mobileNo: { type: String },
  address: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  contactNo: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  email: { type: String },
  guardian: guardianSchema,
  presentAddress: { type: String },
  permanentAddress: { type: String },
});

export const studentModel = model<Student>('Student', studentSchema);
