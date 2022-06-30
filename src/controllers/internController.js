const InternModel = require("../models/internModel.js");
const CollegeModel = require("../models/collegeModel");

exports.createIntern = async function (req, res) {
  try {
    const { name, email, mobile, collegeName } = req.body
    const existCollege = await CollegeModel.find({ name: collegeName, isDeleted: false})
    //console.log(existCollege)
    const requireId = existCollege[0]['_id'].toString()
    //console.log(existCollege[0].fullName)
    const savedData = await InternModel.create({ name, email, mobile, collegeId: requireId })
    res.status(201).send({ status: true, mgs: savedData });
  } catch (error) {
    res.status(500).send({ status: false, mgs: error.message });
  }

};
