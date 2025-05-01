import {DatabaseService} from '@services/database';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useSelector} from 'react-redux';

export function useDeleteCalibrationMilsInput(id: string) {
  const scenarioId = useSelector(currentScenarioIdSelector);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: () => DatabaseService.deleteCalibrationMilsInput(id),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
