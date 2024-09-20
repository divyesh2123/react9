import React from "react";

export interface ILanguage
{
    lan: string
}

export interface ILanguageContext
{
    lan: ILanguage,
    setlan : Function
}


export const TodoContext = React.createContext<ILanguageContext | null>(null);