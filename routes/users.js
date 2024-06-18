const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect(`mongodb+srv://bbc12715:EORpvVzliDwYVJiZ@cluster0.pbm2rwp.mongodb.net/`)
.then(function(){
  console.log("connected to DB");
})
.catch(function(err){
  console.log(err);
})
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  picture: {
    type: String,
    default: "def.png"
  },
  stories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "story"
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  followings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  story: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story",
    },
  ],
  messages: {
    type: Array,
    default: [],
  },
  profilepicture: {
    type: String,
    default: "default.jpg",
  },
  bio: String,
  password: String,
  email: String,
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

mongoose.plugin(plm);

module.exports = mongoose.model("user", userSchema);
