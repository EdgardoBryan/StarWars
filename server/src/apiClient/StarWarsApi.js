import got from "got"



class StarWarsApi {   
  static async getPeople() {
    try {
      const api_url ="https://swapi.dev/api/people";
      const apiResponse = await got(api_url);
      const responseBody = apiResponse.body;
      console.log(responseBody)
      return responseBody;
    } catch (error) {
      return { error: error.message };
    }
  }
}

export default StarWarsApi

