import createError from 'http-errors';
import path from 'path';

import { get } from '../utils/http.util.js';
import { config } from '../configs/repositories.config.js';


// key extranl API field name, value - wanted name
const repositoriesInfoRequiredFieldsTranslation = {
    name: 'name',
    html_url: 'html_url',
    created_at: 'created_at'
}

const { 
    baseUrl,
    fetchRepoEndpoint
} = config;

export const getRepositoriesInfo = async (isSortByDate) => {
    const repositoriesInfo = await fetchGithubRepoInfo();
   
    if(!repositoriesInfo || !repositoriesInfo.length) {
        throw createError(404, `repository not found!`);
    } else {
        const repos = filterFields(repositoriesInfo);
        return isSortByDate ? repos.sort((a,b)=>{a.created_at - b.created_at}) : repos;
    }
}

const filterFields = (repositoriesInfo=[]) => {

    return repositoriesInfo.map(repoObj => Object.keys(repositoriesInfoRequiredFieldsTranslation).reduce(
        (repData, currFieldName) => {
            repData[repositoriesInfoRequiredFieldsTranslation[currFieldName]] = repoObj[currFieldName];
            return repData;
        }, {})
    )
}


const fetchGithubRepoInfo = async () => await get(path.join(baseUrl, fetchRepoEndpoint), {}, 'Failed to fetch repositories');