import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find()
  return result
}
const getSingleStudentFromDb = async ({ id }: { id: string }) => {
  const result = await StudentModel.findById(id)
  return result
}
export const studentServices = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
}