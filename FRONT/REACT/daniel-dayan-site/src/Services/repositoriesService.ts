import axios from "axios";
import config from "../Utils/Config";

import repositoryModel from "../Models/repositoryModel";

class RepositoryService{

    public async fetchAllRepositories():Promise<repositoryModel[]>{
        const response = await axios.get<[]>(config.reposUrl);
        return response.data;
    }
}

const repositoryService = new RepositoryService();
export default repositoryService;