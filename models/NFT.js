   
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var nftSchema = Schema( {
  name: String,
} );

module.exports = mongoose.model( 'NFT', nftSchema );