const getId = value => value._id; // eslint-disable-line no-underscore-dangle

export const handleError = (res, statusCode) => {
    statusCode = statusCode || 500; // eslint-disable-line no-param-reassign
    return err => res.status(statusCode).send(err);
};

export const respondWithResult = (res, statusCode) => {
    statusCode = statusCode || 200; // eslint-disable-line no-param-reassign

    return entity => res.status(statusCode).json(entity);
};

export const respondWithCreate = (res, statusCode) => {
    statusCode = statusCode || 201; // eslint-disable-line no-param-reassign

    return entity => res.status(statusCode).json(entity);
};

export const respondWithIds = (res, statusCode) => {
    statusCode = statusCode || 200; // eslint-disable-line no-param-reassign

    return entity => res.status(statusCode).json(entity.map(getId));
};

export const respondWithDelete = (res, statusCode) => {
    // send the ids back to the client to remove from the view without http request
    const { id } = res;
    const responseBody = Array.isArray(id) ? id : [id];
    statusCode = statusCode || 202; // eslint-disable-line no-param-reassign
    return () => res.status(statusCode).json(responseBody);
};
