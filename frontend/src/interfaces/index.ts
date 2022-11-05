
export interface IPeople{
  name: string;
  height: number;
  mass: number;
  homeworld: string;
}

interface IPeopleQuery{
  results: IPeople[];
  next: string;
  previous: string;
}

interface IData{
  people: IPeople[];
}

export interface IQueryResults{
  loading: boolean;
  error: Error | undefined| any;
  data: IData
}


export interface IContextValues {
  page: number;
  name: string;
  perPage: number;
  count: number;
  loading: boolean;
  error: Error | undefined| any;
  people: IPeople[];
  setPage: (page: number) => void;
  setName: (name: string) => void;
}

export interface IPeopleVars {
  page: number;
  name: string;
}
