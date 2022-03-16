const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {

    const newRes = await fetch('https://futuramaapi.herokuapp.com/api/quotes/3')
    const data = await newRes.json();
    const profile = await Profile.insert({
      name,
      quote: data[0].quote
    });

    return profile
    // TODO: Implement me!
  }
};
