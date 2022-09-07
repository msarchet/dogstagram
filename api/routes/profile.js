const express = require("express")
const router = express.Router()

const repository = require("../../data/repository")

router.use((req, res, next) => {
  console.log("handling a profile request")
  next()
})

router.get("/:id", (req, res) => {
  const profileId = req.params.id

  const profile_data = repository.GetUserProfile(profileId)

  if (profile_data) {
    res.render("profile", profile_data)
    return
  }

  res.send(404)
})

module.exports = router
