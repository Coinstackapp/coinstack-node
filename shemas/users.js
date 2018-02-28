var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  created_at: Date,
  updated_at: Date,
  token:"",
  type:""
});

userSchema.pre('save', function(next) {                                                                                                                                        
  if(this.password) {                                                                                                                                                        
      var salt = bcrypt.genSaltSync(10)                                                                                                                                     
      this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
  }                                                                                                                                                                          
  next();                                                                                                                                                                     
}); 

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

var User = mongoose.model('User', userSchema);

module.exports = User;
