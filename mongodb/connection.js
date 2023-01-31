 const { MongoClient}=require('mongodb');

 const url="mongodb://127.0.0.1:27017";

 const client =new MongoClient(url);

const insertTODB=async (data)=>{
    try {
    await client.connect();
    console.log("connection to db is succefull")
    const database=client.db("humanResourse")
    const collection=database.collection("employee")
    const dbResponse=await collection.insertMany(data)
    // console.log("db operation res=>",dbResponse)
    await client.close()
    return dbResponse;
    } catch (error) {
        return error.message
    }
}

const findTODb= async(query)=>{
 try {
    await client.connect();
    console.log("connection to db is succefull")
    const database=client.db("humanResourse")
    const collection=database.collection("employee")
    const dbResponse= await collection.find(query).toArray()
    await client.close()
    return dbResponse
 } catch (error) {
    return error.message
 }
}

const updateTODB=async(filter,studentUpdate)=>{
try {
    await client.connect();
    console.log("connection to db is succefull")
    const database=client.db("humanResourse")
    const collection=database.collection("employee")
    const dbResponse= await collection.updateOne(filter,studentUpdate)
    await client.close()
    return dbResponse
} catch (error) {
    return error.message
}
}

const deleteTODB=async(filter)=>{
    try {
        await client.connect();
        console.log("connection to db is succefull")
        const database=client.db("humanResourse")
        const collection=database.collection("employee")
        const dbResponse= await collection.deleteMany(filter)
        await client.close()
        return dbResponse
    } catch (error) {
        return error.message
    }
    }
module.exports={insertTODB,findTODb,updateTODB,deleteTODB}