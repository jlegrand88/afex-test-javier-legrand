import {MongoClient} from 'mongodb'

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

export const handler = async(event) => {
  try {
    await client.connect()
    const collection = client.db("afex-test").collection("video-list-collection")
    const result = await collection.find().toArray();
    const response = {
      statusCode: 200,
      body: JSON.stringify(result)
    }
    return response

  } catch (error) {
    console.error("Error:", error)
    return error
  } finally {
    await client.close()
  }
}