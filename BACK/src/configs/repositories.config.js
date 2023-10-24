import { getStringEnvByName, getNumberEnvByName } from '../utils/env.util.js';

export const config = {
    baseUrl: getStringEnvByName("GITHUB_BASE_URL", "https://api.github.com/"),
    fetchRepoEndpoint: getStringEnvByName("GITHUB_END_POINT", "users/danielDayan1/repos")
};