import https from 'https';
import {MongoClient} from 'mongodb'

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@docdb-2023-05-18-00-19-38.cluster-clql0hyc1jzc.us-east-2.docdb.amazonaws.com:27017`;
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
  const options = {
    hostname: 'www.googleapis.com',
    path: `/youtube/v3/videos?id=${event.id}&key=AIzaSyBPdE_oUlVk4NTwyygKjnfn8UIF95pORgg&part=snippet`,
    method: 'GET'
  }
  try {
    const collection = client.db("afex-test").collection("video-list-collection")
    const searchForExistingVideo = await collection.find({ id: event.id }).toArray()
    if(!searchForExistingVideo.length) {
      const videoData = await new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });
          res.on('end', () => {
            resolve(JSON.parse(data));
          });
        });
        req.on('error', (error) => {
          reject(error);
        });
        req.end();
      });
  
      if( videoData.items.length ) {
        const [ videoInfoDoc ] = videoData.items
        const result = await collection.insertOne({
          id: event.id,
          title: videoInfoDoc.snippet.title,
          description: videoInfoDoc.snippet.description,
          thumbnails: videoInfoDoc.snippet.thumbnails
        });
        const newRecord = {
          _id: result.insertedId,
          id: event.id,
          title: videoInfoDoc.snippet.title,
          description: videoInfoDoc.snippet.description,
          thumbnails: videoInfoDoc.snippet.thumbnails
        }
  
        return {
          statusCode: 200,
          body: JSON.stringify(newRecord),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      } else {
        return {
          statusCode: 400,
          body: 'No se encuentra informacion sobre el video, compruebe que la URL es la correcta!',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }
    } else {
      return {
          statusCode: 400,
          body: 'La URL ingresada ya se encontraba registrada, no es posible guardarla dos veces!',
          headers: {
            'Content-Type': 'application/json'
          }
        }
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};