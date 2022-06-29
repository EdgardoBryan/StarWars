import  Express  from "express";
import StarWarsApi from "../../apiClient/StarWarsApi.js";

const PeopleRouter = new Express.Router();

PeopleRouter.get("/", async (req, res) => {
    try {
      const peopleResponse = await StarWarsApi.getPeople()
      const peopleData = JSON.parse(peopleResponse)
      return res
        .set({ "Content-Type": "application/json" })
        .status(200)
        .json(peopleData)
    } catch (error) {
      return res.status(401).json({ errors: error })
    }
  })

  export default PeopleRouter