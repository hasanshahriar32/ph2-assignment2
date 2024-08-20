import Joi from 'joi'

// UserName Schema
const userNameSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string().optional(),
  lastName: Joi.string().required(),
})

// Guardian Schema
const guardianSchema = Joi.object({
  father: Joi.object({
    name: Joi.string().required(),
    contactNumber: Joi.string().required(),
    occupation: Joi.string().required(),
  }).required(),
  mother: Joi.object({
    name: Joi.string().required(),
    contactNumber: Joi.string().required(),
    occupation: Joi.string().required(),
  }).required(),
  other: Joi.object({
    name: Joi.string().required(),
    contactNumber: Joi.string().required(),
    occupation: Joi.string().required(),
  }).required(),
})

// LocalGuardian Schema
const localGuardianSchema = Joi.object({
  name: Joi.string().required(),
  contactNumber: Joi.string().required(),
  occupation: Joi.string().required(),
})

// Student Schema
export const studentValidationSchema = Joi.object({
  id: Joi.string().optional(),
  name: userNameSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  email: Joi.string().email().required(),
  dob: Joi.date().iso().optional(),
  profileImg: Joi.string().uri().optional(),
  contactNumber: Joi.string().required(),
  emergencyContact: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'other')
    .required(),
  address: Joi.object({
    permanent: Joi.string().required(),
    current: Joi.string().required(),
  }).required(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  isActive: Joi.string().valid('active', 'inactive').required(),
})
