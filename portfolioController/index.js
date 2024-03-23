const express = require("express");
const router = express.Router();
const PortfolioModel = require("../model/PortfolioModel");

// Save a new portfolio
router.post("/portfolios", async (req, res) => {
  try {
    // Get the user ID from the authenticated user (assuming you have authentication in place)
    const userId = req.user.id;

    // Create a new portfolio instance
    const portfolio = new PortfolioModel({
      user: userId,
      title: req.body.title,
      description: req.body.description,
      images: req.body.images,
      tags: req.body.tags,
    });

    // Save the portfolio to the database
    const savedPortfolio = await portfolio.save();

    // Send the saved portfolio as the response
    res.status(201).json(savedPortfolio);
  } catch (error) {
    console.error("Error saving portfolio:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the portfolio" });
  }
});

module.exports = router;
