import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentMethods,
  StudentModel,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<TGuardian>({
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

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  occupation: { type: String, required: true },
});


// creating a custom instance mthod


const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({
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


studentSchema.methods.isUserExists = async function(id: string){ 
  const existingUser = await Student.findOne({id})

  return existingUser;
}


export const Student = model<TStudent, StudentModel>('Student', studentSchema);

