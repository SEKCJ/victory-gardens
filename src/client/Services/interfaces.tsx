import {RouteComponentProps} from 'react-router-dom';

export interface IVeggieProps extends RouteComponentProps { }

export interface IVeggieState {
    vgId: number, vgName: string, vgSciName: string, vgSoil: string, vgPosition: string, vgFt: string,
    vgFeeding: string, vgCompanions: string, vgBadCompanions: string, vgSpacing: string, vgSandP: string,
    vgPm: string, vgHm: string, vgNotes: string, vgHarvest: string, vgTs: string, vgImg: string,
}

export interface IResObj {
    id: number, name: string, sci_name: string, soil: string, position: string, frost_tolerant: string,
    feeding: string, companions: string, bad_companions: string, spacing: string, sow_and_plant: string,
    planting_months: string, harvest_months: string, notes: string, harvesting: string,
    troubleshooting: string, url: string
}