var utils = require('./index.js');


// Example keys.
// Todo: generate keys dynamically

// X, Y
var keys = [
  ['08e07141e07e622242f954dc89b656597a23a4dd3d212987c8cc0d827deccf7b', '704e94fb02bf21f54f622a9cdcb6a34981b91735d8227120a11c1b7eee983c51'],
  ['0b6a054d8270713c90f8b2bffe82430ed3e9dcc3ba85dd578f8de78acecdcb40', 'd0421fbf709d2678be6388290027c61d37d7845deb13ac96c6ec872c36236241'],
  ['644c762399ba9fcf2d8e144102cbbe94f2f034a3150846c3a09d7e146ff93559', '7f7ec2aab87182cf27f1d401b73c88578618e624eec99c5019e25f2f5b5acc90'],
  ['c7b9d670b3c56b2c99a9a597491a5066f7ec25ea27d2c9b50ab46787d9bd111d', '3dbf7c972d14782f99e76d27118bb71c4d605e5b9ccc5e662f406f6a6ca6b738'],
  ['52750fa386e867f3ba0467a2a60e75ee66b3367d52f10315389d600fbfa91707', 'c4b9db20dcd86a6597c9a1a46ebb53293a0e443747856537c8b9c595f55a7eaf'],
  ['438de8f9f5f47b173d194cc79bf0899646829187f232e35d4563ba05d5cdf708', 'bad28d907e9ef2dad21ef47c5c3e12ddcad104a4c9c9c87feb50e8dd73ef876d'],
  ['4f7d65538c79d782370a7768f087310a93d86e9cd0cbc4c3197b5d8a2d1cb32a', '0b7a1becffd6703957043ca8747740ee82757af6dfe30c81205e83df54526c8c'],
  ['7462163f89fc02b989e564cf7a2ce39a806273ee4042201fb5544cc794c48975', 'd53acb27ef5da1cba6ff90e3611637e55a14ce6a9ec25063cd0de943f1dd3b04'],
  ['537ad9e2efabb4d99b758c2dbf5982cf60640a3cbfc158084adbcdbfd70f5d09', '6c1079865880dd9537295d69f0a0239c18a634c6555d08a0eeab4411620588f9'],
  ['80a639990eaeb5ed4ead951580052c686ea521de0e4cb22e7864b09874f2b8ff', 'b9071c744f74e0dea7860e0c97464a5a0b7c0cd2c1cb5f2e85a801223b6c4ef9'],
]

keys.map( function( key ) {
  // console.log(ec.getYbyX(key[0]), ec.hexToBigInteger(key[1]).isEven() );
  console.log( utils.ec.getYbyX(key[0], utils.ec.hexToBigInteger(key[1]).isEven() ) == key[1].toUpperCase() )
} )

keys.map( function( key ) {
  console.log( utils.ec.decompressToCoordinate( utils.ec.compressCoordinate(key[0], key[1]) ).y  == key[1].toUpperCase() )
} )

keys.map( function( key ) {
  var uncompressed = '04' + key[0] + key[1];
  console.log(utils.ec.decompress( utils.ec.compress(uncompressed) ).toLowerCase()  == uncompressed.toLowerCase());
} )

var newKeyPair = utils.keyPair.generate();
console.log(newKeyPair);

var newURN = utils.urn.create('pbk',['ec','secp256r1'],newKeyPair.ecpubhex);
console.log(newURN);