import { z } from 'zod'

// zod data validation


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
            name: z.string().nonempty(),
            contactNumber: z.string().nonempty(),
            occupation: z.string().nonempty(),
          })
          .optional(),
        mother: z
          .object({
            name: z.string().nonempty(),
            contactNumber: z.string().nonempty(),
            occupation: z.string().nonempty(),
          })
          .optional(),
        other: z
          .object({
            name: z.string().nonempty(),
            contactNumber: z.string().nonempty(),
            occupation: z.string().nonempty(),
          })
          .optional(),
      }),
      required: z.literal(true),
    })

    const localGuardianSchema = z.object({
      type: z.object({
        name: z.string().nonempty(),
        contactNumber: z.string().nonempty(),
        occupation: z.string().nonempty(),
      }),
      required: z.literal(true),
    })

    const studentSchema = z.object({
      id: z.string().optional(),
      name: userNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      email: z.string().email().nonempty(),
      dob: z.string().nonempty(),
      profileImg: z.string().optional(),
      contactNumber: z.string().nonempty(),
      emergencyContact: z.string().nonempty(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'other'])
        .optional(),
      address: z.object({
        permanent: z.string().nonempty(),
        current: z.string().nonempty(),
      }),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      isActive: z.enum(['active', 'inactive']).default('inactive'),
    })

const StudentValidationSchema = studentSchema
export default StudentValidationSchema
