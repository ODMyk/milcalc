import {DatabaseService} from '@services/database';
import {UpdateCalibrationMilsInputDto} from '@services/database/updateCalibrationMilsInput';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useSelector} from 'react-redux';

export function useUpdateCalibrationMilsInput(id: string) {
  const scenarioId = useSelector(currentScenarioIdSelector);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: (dto: UpdateCalibrationMilsInputDto) =>
      DatabaseService.updateCalibrationMilsInput(id, dto),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
