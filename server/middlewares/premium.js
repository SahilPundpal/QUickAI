export const requirePremium = (req, res, next) => {
  if (req.plan !== "premium") {
    return res.status(403).json({
      success: false,
      message: "This feature is only available for premium subscriptions",
    });
  }

  next();
};