const s3 = require('aws-s3');
const config = {
    bucketName: '<BUCKET NAME>',
    dirName: '<>DIR NAME', /* optional */
    region: '<REGION NAME>',
    accessKeyId: '<ACCESS ID>',
    secretAccessKey: '<SECRET ACCESS KEYS>'
}
const S3Client = new s3(config);

const upload = async (file, newFileName) => {

    let result = await S3Client
        .uploadFile(file, newFileName)
        .then(data => console.log(data))
        .catch(err => console.error(err));
    return result;
};
const del = async (filename) => {
    let result = await S3Client
        .deleteFile(filename)
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return result;
}

exports.upload = upload;
exports.del = del;