import axios from "axios";
import config from "../Utils/Config";

import repositoryModel from "../Models/repositoryModel";

class RepositoryService{

    public async fetchAllRepositories():Promise<repositoryModel[]>{
        let repos = []
        const response = await axios.get<any>(config.reposUrl);

        for(let i=0;i<response.data.length;i++){
            const rep = new repositoryModel();
            rep.name = response.data[i].name;
            rep.url = response.data[i].html_url;
            repos.push(rep);
        }
        return repos;
    }
}

const repositoryService = new RepositoryService();
export default repositoryService;