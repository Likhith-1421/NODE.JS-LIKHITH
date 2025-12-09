const {MongoClient} = require('mongodb')
const url = 'mongodb+srv://pbklikhith14_db_user:Likhith_1421@likhith1.lv1gea1.mongodb.net/'
const client = new MongoClient (url)
const dbName = 'HELLODATABASE'

async function likhith()
{
    await client.connect()
    console.log('HEYY LIKHITH YOU ARE CONNECTED')
    const db = client.db(dbName)
    const collection = db.collection('USER2')

//   const data = await collection.find({session:'morning'}).toArray()
//   console.log(data)
//   const Adata = await collection.insertMany([{
//     session : 'Afternoon',
//     time : '2:00',
//     name : 'likhith'
//   }])

//   console.log(Adata)
//   const update = await collection.updateOne({session: ' morning'}, {$set:{firstname : ' hello'}})
//   console.log(update)
//   const delet = await collection.deleteMany({})
//   console.log(delet)

const insert = await collection.insertMany([{
    session : 'morning',
    name : ' any name '
},{
    session : 'afternoon',
    name : 'likhith'
}])
console.log(insert)

const update = await collection.updateOne({session : 'afternoon'},{$set: {time:'5:50'}})
    return "YOU ARE DONE!!!"
   
}
 
likhith()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())