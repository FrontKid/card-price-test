import { EAvailablePlans } from '../types/availablePlans';
import { createPlanButton } from '../utils/planButton';

const planButton = document.querySelector('#planButton')
const availablesPlans = document.querySelector('#availablesPlans');

const plans: EAvailablePlans[] = [
  EAvailablePlans.Monthly,
  EAvailablePlans.Yearly,
]

const handlePlanButton = () => {
  if (availablesPlans) {
    availablesPlans.classList.toggle('isOpen')
  }
}

export const renderPlanButton = () => {
  plans.forEach((plan:string) =>  {
    const planButton = createPlanButton(plan);
  
    availablesPlans?.appendChild(planButton);
  })
}

planButton?.addEventListener('click', handlePlanButton);


