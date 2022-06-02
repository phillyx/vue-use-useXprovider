import { useXprovider } from 'use-x-provider'

export interface ICheckBox {
  label: string
  checked: boolean
}
type TCarType = 'SEDAN' | 'SUV' | 'MPV' | 'WG'
type TDriveMode = 'Oil' | 'EV' | 'PHEV' | 'Hydrogen'
export interface ICarInfo {
  brandName: string
  type: TCarType
  drivingMode: TDriveMode
}
const state = {
  car: {
    brandName: 'BYD',
  } as ICarInfo,
  checkboxGroups: [
    {
      label: 'A',
      checked: false,
    },
    {
      label: 'B',
      checked: false,
    },
    {
      label: 'C',
      checked: true,
    },
  ] as ICheckBox[],
}
type THomeState = typeof state

export const providerFoundation = useXprovider<THomeState>(state, 'HomeContext.Provider', Symbol('home'))

export const setHomeState = providerFoundation.setState
export const setHomeStateWithStr = providerFoundation.setStateWithStr
export const homeState = providerFoundation.state as THomeState
export const useHomeContext = providerFoundation.useContext
