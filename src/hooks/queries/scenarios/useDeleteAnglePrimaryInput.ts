import {DatabaseService} from '@services/database';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useSelector} from 'react-redux';

export function useDeleteAnglePrimaryInput(id: string) {
  const scenarioId = useSelector(currentScenarioIdSelector);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: () => DatabaseService.deleteAnglePrimaryInput(id),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
