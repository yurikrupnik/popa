import Users from './model';

import {handleError, respondWithResult} from '../responses';



// Gets a list Count
export function getUsers(req, res) {
    return Users.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function getUserById(req, res) {
    return Users.findOne({_id: req.params.id})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function updateUser(req, res) {
    return Users.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}


export function saveUser(req, res) {
    return Users.find({})
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function deleteUser(req, res) {
    return Users.remove()
        .then(respondWithResult(res))
        .catch(handleError(res));
}