import {DatabaseService} from '@services/database';
import {UpdateAnglePrimaryInputDto} from '@services/database/updateAnglePrimaryInput';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useSelector} from 'react-redux';

export function useUpdateAngleSecondaryInput(id: string) {
  const scenarioId = useSelector(currentScenarioIdSelector);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: (dto: UpdateAnglePrimaryInputDto) =>
      DatabaseService.updateAngleSecondaryInput(id, dto),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
