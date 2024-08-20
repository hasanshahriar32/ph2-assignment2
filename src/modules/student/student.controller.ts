import { studentServices } from './student.service'
import { Request, Response } from 'express'
import StudentValidationSchema from './student.zod.validator'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body

    

    const zodParsedData = StudentValidationSchema.parse(studentData)


    const result = await studentServices.createStudentIntoDb(zodParsedData)

    // send response
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    })
  } catch (error) {
    // send error response
    res.status(500).json({
      success: false,
      message: error,
    })
  }
}


const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDb()
    res.status(200).json({
      success: true,
      message: 'data fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    })
  }
}
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string
    const result = await studentServices.getSingleStudentFromDb({ id })
    res.status(200).json({
      success: true,
      message: 'data fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    })
  }
}

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
