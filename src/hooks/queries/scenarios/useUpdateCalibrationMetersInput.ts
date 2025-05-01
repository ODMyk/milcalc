import {DatabaseService} from '@services/database';
import {UpdateCalibrationMetersInputDto} from '@services/database/updateCalibrationMetersInput';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useSelector} from 'react-redux';

export function useUpdateCalibrationMetersInput(id: string) {
  const scenarioId = useSelector(currentScenarioIdSelector);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: (dto: UpdateCalibrationMetersInputDto) =>
      DatabaseService.updateCalibrationMetersInput(id, dto),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
