import { EAvailablePlans } from "../types/availablePlans";

const selectedPlan = document.querySelector('#selectedPlan')
const prices = document.querySelectorAll('[data-card-price]')
const availablesPlans = document.querySelector('#availablesPlans');

const defaultPlan = EAvailablePlans.Monthly;

const handleChoicePlan = (event: any) => {
  if (!availablesPlans || !selectedPlan) {
    return
  }
  
  if (event.target.classList.contains('isChoisen')) {
    return;
  }

  selectedPlan.textContent = event.target.textContent
  
  const choisenPlan = selectedPlan.textContent;

  availablesPlans.childNodes.forEach((planNode:any) => {
    const currentPlan = planNode.textContent;

    if (currentPlan === choisenPlan) {
      planNode.classList.add('isChoisen')
    } else {
      planNode.classList.remove('isChoisen')
    }
  })

  prices.forEach(price => {
    const priceInNumber = Number(price.getAttribute('data-card-price'))

  try {
    switch(choisenPlan) {
      case EAvailablePlans.Monthly:
        price.textContent = `$${priceInNumber * 1}`
        break
      case EAvailablePlans.Yearly:
        price.textContent = `$${priceInNumber * 10 }9`
        break
      default:
        throw new Error('Incorect selected plan');
    };
  } catch (error) {
    console.warn(error);
  }
  })


  availablesPlans.classList.remove('isOpen')
} 

export function createPlanButton(textValue: string) {
  const button = document.createElement('button')
  
  button.classList.add('price-card__setup-button-element')
  button.textContent = textValue
  
  button.addEventListener("click", handleChoicePlan)  
  
  if (textValue === defaultPlan) {
    button.classList.add('isChoisen')
  }
  
  return button
}