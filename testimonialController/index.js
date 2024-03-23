const express = require("express");
const router = express.Router();
const TestimonialModel = require("../model/TestimonialModel");

// Create a new testimonial
router.post("/testimonials", async (req, res) => {
  try {
    // Get the authenticated user ID (assuming you have authentication in place)
    const userId = req.user.id;

    // Create a new testimonial instance
    const testimonial = new TestimonialModel({
      user: userId,
      content: req.body.content,
      rating: req.body.rating,
    });

    // Save the testimonial to the database
    const savedTestimonial = await testimonial.save();

    // Send the saved testimonial as the response
    res.status(201).json(savedTestimonial);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the testimonial" });
  }
});

module.exports = router;
