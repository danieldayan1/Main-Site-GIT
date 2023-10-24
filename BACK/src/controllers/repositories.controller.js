import { getRepositoriesInfo } from '../services/repositories.service.js';

export const getRepositoriesBySort = async (req, res, next) => {
    try {
        const {isSortByDate} = req.params
        let reposInfo = await getRepositoriesInfo(isSortByDate)
        res.json(reposInfo);
    } catch (err) {
        next(err);
    }
}
