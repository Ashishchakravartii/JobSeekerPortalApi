const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const employeModel = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First Name is Required"],
      minLength: [true, "First Name should be atleast 4 character long."],
    },
    lastname: {
      type: String,
      required: [true, "Last Name is Required"],
      minLength: [true, "Last Name should be atleast 4 character long."],
    },
    contact: {
      type: String,
      required: [true, "Contact is Required"],
      maxLength: [10, "Contact should not exceed 10 character"],
      minLength: [10, "Contact should be atleast 4 character long"],
    },

    email: {
      type: String,
      unique: true,
      required: [true, "Email Required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      select: false,
      maxLength: [15, "Password Should Not Exceed More Than 15 Characters "],
      minLength: [6, "Password Should Have Atleast 6 Characters "],
      // match:[]
    },
    resetPasswordToken: {
      type: String,
      default: "0",
    },
    organizationname: {
      type: String,
      required: [true, "organization Name is Required"],
      minLength: [4, "organization Name should be atleast 4 character long."],
    },
    organizationlogo: {
      type: Object,
      default: {
        fileId: "",
        url: "https://images.unsplash.com/photo-1682685797439-a05dd915cee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },

    internships: [{ type: mongoose.Schema.Types.ObjectId, ref: "internship" }],
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "job" }],
  },
  { timestamps: true }
);
employeModel.pre("save", function () {
  if (!this.isModified("password")) {
    return;
  }
  let salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

employeModel.methods.comparepassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

employeModel.methods.getjwttoken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const Employe = mongoose.model("employe", employeModel);
module.exports = Employe;
