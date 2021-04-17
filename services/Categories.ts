import { ICategory } from '../types/API';
import { GET, onSuccessType, onFailureType } from '../utils/Network';

export const getAllCategories = (onSuccess?: (responseData: ICategory[]) => void, onFailure?: onFailureType) => {

    GET('products/categories', (response) => {

        const mappedCategories: ICategory[] = response.data.map((item: any, index: string) => (
            {
                name: item,
                id: String(index),
                images: [
                    'https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs',
                    'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
                    'https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8',
                    'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
                ],
                hasChildren: false
            }
        ))

        onSuccess && onSuccess(mappedCategories)

    }, onFailure)
}