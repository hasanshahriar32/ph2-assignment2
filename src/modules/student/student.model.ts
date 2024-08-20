import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  father: {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    occupation: { type: String, required: true },
  },
  mother: {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    occupation: { type: String, required: true },
  },
  other: {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    occupation: { type: String, required: true },
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  occupation: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {type: userNameSchema, required: true},
  gender: ['male', 'female', 'other'],
  email: { type: String, required: true },
  dob: { type: String },
  profileImg: { type: String },
  contactNumber: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'other'],
  address: {
    permanent: { type: String, required: true },
    current: { type: String, required: true },
  },
  guardian: {type: guardianSchema, required: true},
  localGuardian: {type: localGuardianSchema, required: true},
  isActive: ['active', 'inactive'],
});

const Student = model<Student>('Student', studentSchema);
export const StudentModel = Student;
