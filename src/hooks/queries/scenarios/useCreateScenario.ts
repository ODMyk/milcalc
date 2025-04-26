import {DatabaseService} from '@services/database';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export function useCreateScenario() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenarios'],
    mutationFn: DatabaseService.createScenario,
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenarios']});
    },
  });
}
