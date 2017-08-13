import { filter } from 'lodash';
import Model from './model';
import {
    handleError,
    respondWithIds,
    respondWithResult,
    respondWithDelete,
    respondWithCreate
} from '../responses';
// Gets a list Count
export function count(req, res) {
    return Model.count()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function CREATE(req, res) {
    const { body } = req;
    return Model.create(body)
        .then(respondWithCreate(res))
        .catch(handleError(res));
}

// Gets a list of Payments
export function findListOfIndexes(req, res) {
    const { query } = req;
    // let query = {};
    const fields = '_id';
    return Model.find(query, fields)
        .then(respondWithIds(res))
        .catch(handleError(res));
}

export function findList(req, res) {
    const { query } = req;
    const { fields } = query;
    return Model.find({}, fields)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function UPDATE(req, res) {
    const { body } = req;
    return Model.findOneAndUpdate({ id: body.id }, body)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function deleteById(req, res) {
    const { params } = req;
    const { id } = params;
    res.id = id;
    return Model.remove({ id })
        .then(respondWithDelete(res))
        .catch(handleError(res));
}

export function deleteByIds(req, res) {
    const { body } = req;
    res.id = body;
    return Model.remove({ id: { $in: body } })
        .then(respondWithDelete(res))
        .catch(handleError(res));
}

export function getSchema(req, res) {
    const requiredFields = filter(Model.schema.paths, 'isRequired');
    res.status(200).json(requiredFields);
}
