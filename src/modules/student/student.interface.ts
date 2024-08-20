// import { Schema, model, connect } from 'mongoose';

export type Guardian = {
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

export type UserName = {
  firstName: string
  lastName: string
  middleName?: string
}

export type LocalGuardian = {
  name: string
  contactNumber: string
  occupation: string
}

export type Student = {
  id?: string
  name: {
    type: UserName
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
    type: Guardian
    required: true
  }
  localGuardian: {
    type: LocalGuardian
    required: true
  }
  isActive: 'active'| 'inactive'
  
}

// create a schema
