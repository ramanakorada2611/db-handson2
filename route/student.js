const express=require('express')
const studentController=require('../controller/student')
const mainRouter=express.Router()

mainRouter.post('/student',studentController.insertStudentData)
mainRouter.get('/student',studentController.saveStudentData)
mainRouter.put('/student',studentController.updateStudentData)
mainRouter.delete('/student',studentController.deleteStudentData)

module.exports=mainRouter;