import { GET, onSuccessType, onFailureType } from '../utils/Network';

export const getAllCategories = (onSuccess?: onSuccessType, onFailure?: onFailureType) => {
    GET('products/categories',onSuccess, onFailure)
}