const { insertTODB, findTODb, updateTODB, deleteTODB} = require("../mongodb/connection");

//insert
const insertStudentData=async (req,res)=>{
    const studentDataInsert=req.body;
try {
    if(studentDataInsert && studentDataInsert.length > 0){
        const insertManyDb= await insertTODB(studentDataInsert)
        return res.status(200).send({sucess:insertManyDb.acknowledged})
    }
    const insertOneDb= await insertTODB(studentDataInsert)
    return res.status(200).send({sucess:insertOneDb})
} catch (error) {
    console.log("error occured while insert the data=>",error)
    return res.status(500).send({message:"something went wrong"})
}

}
//read 
const saveStudentData=async (req,res)=>{
    const query=req.query;
    console.log("query",query)
    try {
        const findDb=await findTODb(query)
        return res.status(200).send({studentsDetails:findDb})
    } catch (error) {
        console.log("error occured while read the data=>",error)
        return res.status(500).send({message:"something went wrong"})
    }
}
//update
const updateStudentData=async (req,res)=>{
    const filter=req.body.filter;
    const update=req.body.update;
    const studentUpdate={
        $set:update
    }
    try {
        const updateDb= await updateTODB(filter,studentUpdate)
        return res.status(200).send({studentsUpdateDetails:updateDb})
    } catch (error) {
        console.log("error occured while update the data=>",error)
        return res.status(500).send({message:"something went wrong"})
    }
}
//delete
const deleteStudentData=async (req,res)=>{
    const studentDelete=req.body.lastCompany
    const filter={
        lastCompany:studentDelete
    }
    try {
        const deleteDb= await deleteTODB(filter)
        return res.status(200).send({studentsUpdateDetails:deleteDb})
    } catch (error) {
        console.log("error occured while update the data=>",error)
        return res.status(500).send({message:"something went wrong"})
    }
}

module.exports={insertStudentData,saveStudentData,updateStudentData,deleteStudentData}