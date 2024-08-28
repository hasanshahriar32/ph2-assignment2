import { TStudent } from './student.interface'
import { Student } from './student.model'

const createStudentIntoDb = async (studentData: TStudent) => {
  // const result = await Student.create(student) // build in static method.. provided by mongoose
  

  // static method// creating a custom instance


  const student = new Student(studentData)// create an instance

  if(await student.isUserExists(studentData.id as string)){
    throw new Error(" user already exists")
  }

  const result = await student.save() // build in instance method.. provided by mongoose




  return result
}

const getAllStudentsFromDb = async () => {
  const result = await Student.find()
  return result
}
const getSingleStudentFromDb = async ({ id }: { id: string }) => {
  const result = await Student.findById(id)
  return result
}
export const studentServices = {// creating a custom instance


  createStudentIntoDb,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
}