import { verifyDuplicatedCpfEmailOrUsername } from './verifyDuplicatedCpfEmailOrUsername.middleware';
import { validateRequestBodyMiddleware } from './validateRequestBody.middleware';
import { authenticationMiddleware } from './authentication.middleware';
import handleErrorMiddleware from './handleError.middleware';

export {
  verifyDuplicatedCpfEmailOrUsername,
  validateRequestBodyMiddleware,
  authenticationMiddleware,
  handleErrorMiddleware
};
