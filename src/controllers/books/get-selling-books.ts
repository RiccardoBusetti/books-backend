import { Controller, IControllerRequest, toResponse } from '../base';
import { pipe } from 'fp-ts/function';
import { toTaskEither } from '../../helpers/fp-extensions';
import { AppError } from '../../errors/base';
import { Book } from '../../entities/book';
import { chain } from 'fp-ts/TaskEither';
import { getUserFromRequestUseCase } from '../../use-cases/get-user-from-request';
import { getSellingBooksUseCase } from '../../use-cases/books/get-sellings-books';

export const getSellingBooksController: Controller<AppError, Book[]> = (
    request: IControllerRequest,
) =>
    pipe(
        getUserFromRequestUseCase(request),
        toTaskEither,
        chain((user) => pipe(getSellingBooksUseCase(user), toTaskEither)),
        toResponse(false),
    );
