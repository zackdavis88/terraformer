import { ApolloContext } from '../../middleware/context.js';
import { CreateUserRequest } from '../../api/types.js';
import handleError from '../utils/handleError.js';
import generateUserId from '../utils/generateUserId.js';

const createUserMutation = async (
  _parent: never,
  args: CreateUserRequest,
  context: ApolloContext,
) => {
  try {
    const { message, user } = await context.apiClient.createUser(args);
    return {
      message,
      user: {
        id: generateUserId(user.username),
        ...user,
      },
    };
  } catch (err) {
    return handleError(err);
  }
};

export default createUserMutation;
