import { z } from 'zod'

// zod data validation
// checking


    const userNameSchema = z.object({
      type: z.object({
        firstName: z.string(),
        lastName: z.string(),
        middleName: z.string().optional(),
      }),
      required: z.literal(true),
    })

    const guardianSchema = z.object({
      type: z.object({
        father: z
          .object({
            name: z.string(),
            contactNumber: z.string(),
            occupation: z.string(),
          })
          .optional(),
        mother: z
          .object({
            name: z.string(),
            contactNumber: z.string(),
            occupation: z.string(),
          })
          .optional(),
        other: z
          .object({
            name: z.string(),
            contactNumber: z.string(),
            occupation: z.string(),
          })
          .optional(),
      }),
      required: z.literal(true),
    })

    const localGuardianSchema = z.object({
      type: z.object({
        name: z.string(),
        contactNumber: z.string(),
        occupation: z.string(),
      }),
      required: z.literal(true),
    })

    const studentSchema = z.object({
      id: z.string().optional(),
      name: userNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      email: z.string().email(),
      dob: z.string(),
      profileImg: z.string().optional(),
      contactNumber: z.string(),
      emergencyContact: z.string(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'other'])
        .optional(),
      address: z.object({
        permanent: z.string(),
        current: z.string(),
      }),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      isActive: z.enum(['active', 'inactive']).default('inactive'),
    })

const StudentValidationSchema = studentSchema
export default StudentValidationSchema
