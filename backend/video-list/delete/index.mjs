import { MongoClient, ObjectId } from 'mongodb'

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@docdb-2023-05-18-00-19-38.cluster-clql0hyc1jzc.us-east-2.docdb.amazonaws.com:27017`
const client = new MongoClient(
  uri,
  {
    tls: true,
    tlsCAFile: './rds-combined-ca-bundle.pem',
    useUnifiedTopology: true,
    monitorCommands: true,
    retryWrites: false,
    useNewUrlParser: true
  }
)

export const handler = async (event) => {
  const videoId = event.queryStringParameters.id
  try {
    await client.connect()

    const collection = client.db("afex-test").collection("video-list-collection")
    const filter = { "_id": new ObjectId(videoId) }
    const result = await collection.deleteOne(filter)
    
    const response = {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Credentials' : true,
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: JSON.stringify(result)
    };
    return response

  } catch (error) {
    console.error("Error:", error)
    return error
  } finally {
    await client.close()
  }
}