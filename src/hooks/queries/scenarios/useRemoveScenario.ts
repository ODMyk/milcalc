import {DatabaseService} from '@services/database';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Scenario} from 'src/types/Scenario';

export function useRemoveScenario(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenarios', id],
    mutationFn: async () => {
      await DatabaseService.removeScenario(id);
      return id;
    },
    onMutate: async () => {
      await queryClient.cancelQueries({queryKey: ['scenarios']});
      const previousData = queryClient.getQueryData<Scenario[]>(['scenarios']);

      queryClient.setQueryData<Scenario[]>(
        ['scenarios'],
        oldData => oldData?.filter(scenario => scenario.id !== id) ?? [],
      );

      return {previousData};
    },
    onError: (_err, _id, context) => {
      queryClient.setQueryData(['scenarios'], context?.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenarios']});
    },
  });
}
