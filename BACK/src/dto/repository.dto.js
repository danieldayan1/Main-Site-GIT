import Joi from 'joi';

export const sortByValues = {
    date: 'date',
}

export const sortTypesValues = {
    desc: 'desc',
    asc: 'asc'
}

export const getSortedRepositoriesSchema  = Joi.object({
    isSortByDate: Joi.boolean()
        .optional(),
});
