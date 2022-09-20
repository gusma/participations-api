let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let participationSchema = require("../models/Participation");

router.post("/create-participation", (req, res) => {
  participationSchema.create(req.body, (error, data) => {
    if (error) {
      return res
        .status(400)
        .json({ status: 400, message: "Error creating participation" });
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.get("/", (req, res) => {
  participationSchema.find((error, data) => {
    if (error) {
      res
        .status(400)
        .json({ status: 400, message: "Error fetching participations" });
    } else {
      res.json(data);
    }
  });
});

router
  .route("/update-participation/:id")
  .get((req, res) => {
    participationSchema.findById(req.params.id, (error, data) => {
      if (error) {
        res.status(400).json({ status: 400, message: "Error fetching id" });
      } else {
        res.json(data);
      }
    });
  })

  // Update Data
  .put((req, res, next) => {
    participationSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          res.status(400).json({ status: 400, message: "Error updating id" });
        } else {
          res.json(data);
          console.log("Participation updated");
        }
      }
    );
  });

// Delete Participation
router.delete("/delete-participation/:id", (req, res, next) => {
  participationSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      res
        .status(400)
        .json({ status: 400, message: "Error deleting participation" });
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
