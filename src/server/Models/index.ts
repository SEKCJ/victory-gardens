export interface IUsers {
    id: number,
    email: string,
    firstname: string,
    lastname: string,
    password: string
}

export interface ITokens {
    id: number,
    userid: number,
    token: string,
    expires: Date,
}

export interface IPayLoad {
    id?: number,
    userid: number,
    accesstokenid?: number;
    role?: string,
    unique?: string,
}

import {Request} from 'express';

export interface ReqUser extends Request {
    user: {
        id: number,
        role: string,
    };
}

export interface IVegetables {
    id: number,
    name: string,
    sci_name: string,
    soil: string,
    position: string,
    frost_tolerant: string,
    feeding: string,
    companions: string,
    bad_companions: string,
    spacing: string,
    sow_and_plant: string,
    planting_months: string,
    harvest_months: string,
    notes: string,
    harvesting: string,
    troubleshooting: string
}