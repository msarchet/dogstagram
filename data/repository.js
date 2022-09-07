const Post = require("./posts")

const data = {
  posts: [
    new Post(
      "A Fancy Boi",
      "Look at me doing a big prance",
      "Sauce",
      "https://placedog.net/500",
      Date.parse("07-07-2022")
    ),
    new Post(
      "A Fancy Boi",
      "Look at me doing a big prance",
      "Sauce",
      "https://placedog.net/500",
      Date.parse("07-07-2022")
    ),
    new Post(
      "A Fancy Boi",
      "Look at me doing a big prance",
      "Sauce",
      "https://placedog.net/500",
      Date.parse("07-07-2022")
    ),
    new Post(
      "A Fancy Boi",
      "Look at me doing a big prance",
      "Sauce",
      "https://placedog.net/500",
      Date.parse("07-07-2022")
    ),
    new Post(
      "A Fancy Boi",
      "Look at me doing a big prance",
      "Sauce",
      "https://placedog.net/500",
      Date.parse("07-07-2022")
    ),
  ],
  profiles: [
    { name: "Sauce", age: 6, breed: "German Shepherd" },
    { name: "Bingo", age: 3, breed: "Goldendoodle" },
    { name: "Kirby", age: 12, breed: "Basset Hound" },
    { name: "Pestilence", age: 9999, breed: "Hellhound" },
  ],
}

const GetData = () => data

const GetUserProfile = (profileId) => {
  const matching = data.profiles.filter((profile) => profile.name == profileId)

  if (matching.length > 0) {
    return matching[0]
  }

  return null
}

const CreatePost = (postData) => {
  let post = new Post(
    postData.title,
    postData.body,
    postData.author,
    postData.image,
    postData.data
  )

  data.posts.push(post)
}

module.exports = {
  GetData,
  GetUserProfile,
  CreatePost,
}
