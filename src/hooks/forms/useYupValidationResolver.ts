import {omit, omitBy} from 'lodash';
import {useCallback} from 'react';
import {ResolverError} from 'react-hook-form';
import Yup from 'yup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useYupValidationResolver = <T extends object = any>(
  validationSchema: Yup.Schema<T>,
  excludeFields: Array<string> = [],
) =>
  useCallback(
    (data: T) => {
      try {
        const values = validationSchema.validateSync(data, {
          abortEarly: false,
        });

        return {
          values: omitBy(omit(values, excludeFields), field => field === ''),
          errors: {},
        };
      } catch (err: unknown) {
        const errors = err as Yup.ValidationError;

        const normalizedErrors = errors.inner.reduce<ResolverError['errors']>(
          (allErrors, currentError) => {
            if (currentError.path) {
              Object.assign(allErrors, {
                [currentError.path]: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              });
            }

            return allErrors;
          },
          {},
        );

        return {
          values: {},
          errors: normalizedErrors,
        };
      }
    },
    [validationSchema, excludeFields],
  );
