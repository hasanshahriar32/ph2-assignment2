// import { Schema, model, connect } from 'mongoose';

import { Model } from "mongoose"

export type TGuardian = {
  father?: {
    name: string
    contactNumber: string
    occupation: string
  }
  mother?: {
    name: string
    contactNumber: string
    occupation: string
  }
  other?: {
    name: string
    contactNumber: string
    occupation: string
  }
}

export type TUserName = {
  firstName: string
  lastName: string
  middleName?: string
}

export type TLocalGuardian = {
  name: string
  contactNumber: string
  occupation: string
}

export type TStudent = {
  id?: string
  name: {
    type: TUserName
    required: true
  }
  gender: 'male' | 'female' | 'other';
  email: string
  dob: string
  profileImg?: string
  contactNumber: string
  emergencyContact: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | 'other'
  address: {
    permanent: string
    current: string
  }
  guardian: {
    type: TGuardian
    required: true
  }
  localGuardian: {
    type: TLocalGuardian
    required: true
  }
  isActive: 'active'| 'inactive'
  
}

// create a schema for custom instance method 
export type StudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>
}

export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>
